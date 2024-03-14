// Copyright (c) 2024 RoseLoverX
package math

import (
	"crypto/rsa"
	"math"
	"math/big"
	"math/rand"
	"time"
)

var (
	// all of them uses just for code simplification
	big0  = big.NewInt(0)
	big1  = big.NewInt(1)
	big15 = big.NewInt(15)
	big17 = big.NewInt(17)
)

// DoRSAencrypt encrypts exactly 1 message block of size 255 with the public key.
// Specific algorithm for mtproto, because the documentation does not indicate is
// this encryption working by OAEP spec or any else
func DoRSAencrypt(block []byte, key *rsa.PublicKey) []byte {
	if len(block) != math.MaxUint8 {
		panic("block size isn't equal 255 bytes")
	}
	z := big.NewInt(0).SetBytes(block)
	exponent := big.NewInt(int64(key.E))

	c := big.NewInt(0).Exp(z, exponent, key.N)

	res := make([]byte, 256)
	copy(res, c.Bytes())

	return res
}

// SplitPQ splits a number into two primes, while p1 < p2
// Part of diffie hellman's algorithm, how it works - no idea
func SplitPQ(pq *big.Int) (p1, p2 *big.Int) {
	// Benchmark: Fac 15x faster than SplitPQ
	// TODO: test extensively for fail cases
	rndmax := big.NewInt(0).SetBit(big.NewInt(0), 64, 1)

	what := big.NewInt(0).Set(pq)
	rnd := rand.New(rand.NewSource(time.Now().UnixNano()))
	g := big.NewInt(0)
	i := 0
	for !(g.Cmp(big1) == 1 && g.Cmp(what) == -1) {
		q := big.NewInt(0).Rand(rnd, rndmax)
		q = q.And(q, big15)
		q = q.Add(q, big17)
		q = q.Mod(q, what)

		x := big.NewInt(0).Rand(rnd, rndmax)
		whatnext := big.NewInt(0).Sub(what, big1)
		x = x.Mod(x, whatnext)
		x = x.Add(x, big1)

		y := big.NewInt(0).Set(x)
		lim := 1 << (uint(i) + 18)
		j := 1
		flag := true

		for j < lim && flag {
			a := big.NewInt(0).Set(x)
			b := big.NewInt(0).Set(x)
			c := big.NewInt(0).Set(q)

			for b.Cmp(big0) == 1 {
				b2 := big.NewInt(0)
				if b2.And(b, big1).Cmp(big0) == 1 {
					c.Add(c, a)
					if c.Cmp(what) >= 0 {
						c.Sub(c, what)
					}
				}
				a.Add(a, a)
				if a.Cmp(what) >= 0 {
					a.Sub(a, what)
				}
				b.Rsh(b, 1)
			}
			x.Set(c)

			z := big.NewInt(0)
			if x.Cmp(y) == -1 {
				z.Add(what, x)
				z.Sub(z, y)
			} else {
				z.Sub(x, y)
			}
			g.GCD(nil, nil, z, what)

			if (j & (j - 1)) == 0 {
				y.Set(x)
			}
			j++

			if g.Cmp(big1) != 0 {
				flag = false
			}
		}
		i++
	}

	p1 = big.NewInt(0).Set(g)
	p2 = big.NewInt(0).Div(what, g)

	if p1.Cmp(p2) == 1 {
		p1, p2 = p2, p1
	}

	return p1, p2
}

func MakeGAB(g int32, g_a, dh_prime *big.Int) (b, g_b, g_ab *big.Int) {
	rnd := rand.New(rand.NewSource(time.Now().UnixNano()))
	rndmax := big.NewInt(0).SetBit(big.NewInt(0), 2048, 1)
	b = big.NewInt(0).Rand(rnd, rndmax)
	g_b = big.NewInt(0).Exp(big.NewInt(int64(g)), b, dh_prime)
	g_ab = big.NewInt(0).Exp(g_a, b, dh_prime)

	return
}

func Xor(dst, src []byte) {
	for i := range dst {
		dst[i] ^= src[i]
	}
}

// Fac splits a number into two primes, while p < q
// Part of diffie hellman's algorithm
// Uses Pollard's rho algorithm
func Fac(pq *big.Int) (p, q *big.Int) {
	p = big.NewInt(0).Set(pq)
	q = big.NewInt(1)

	x := big.NewInt(2)
	y := big.NewInt(2)
	d := big.NewInt(1)

	for d.Cmp(big.NewInt(1)) == 0 {
		x = f(x, pq)
		y = f(f(y, pq), pq)

		temp := big.NewInt(0).Set(x)
		temp.Sub(temp, y)
		temp.Abs(temp)
		d.GCD(nil, nil, temp, pq)
	}

	p.Set(d)
	q.Div(pq, d)

	if p.Cmp(q) == 1 {
		p, q = q, p
	}

	return p, q
}

func f(x, n *big.Int) *big.Int {
	result := big.NewInt(0).Set(x)
	result.Mul(result, result)
	result.Add(result, big.NewInt(1))
	result.Mod(result, n)
	return result
}
