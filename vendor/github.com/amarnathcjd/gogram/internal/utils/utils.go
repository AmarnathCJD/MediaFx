// Copyright (c) 2024 RoseLoverX

package utils

import (
	cr "crypto/rand"
	"crypto/sha1"
	"fmt"
	"math/rand"
	"os"
	"runtime"
	"time"
)

var (
	DcList = map[int]string{
		1: "149.154.175.58:443",
		2: "149.154.167.50:443",
		3: "149.154.175.100:443",
		4: "149.154.167.91:443",
		5: "91.108.56.151:443",
	}
)

type PingParams struct {
	PingID int64
}

func (*PingParams) CRC() uint32 {
	return 0x7abe77ec
}

func GenerateMessageId(prevID int64, offset int64) int64 {
	const billion = 1000 * 1000 * 1000
	unixnano := time.Now().UnixNano() + (offset * billion)
	seconds := unixnano / billion
	nanoseconds := unixnano % billion
	newID := (seconds << 32) | (nanoseconds & -4)
	if newID <= prevID {
		return GenerateMessageId(prevID, offset)
	}

	return newID
}

func AuthKeyHash(key []byte) []byte {
	return Sha1Byte(key)[12:20]
}

func GenerateSessionID() int64 {
	source := rand.NewSource(time.Now().UnixNano())
	return rand.New(source).Int63()
}

func FullStack() {
	buf := make([]byte, 1024)
	for {
		n := runtime.Stack(buf, true)
		if n < len(buf) {
			fmt.Fprintln(os.Stderr, string(buf[:n]))
		}
		buf = make([]byte, 2*len(buf))
	}
}

func Sha1Byte(input []byte) []byte {
	r := sha1.Sum(input)
	return r[:]
}

func Sha1(input string) []byte {
	r := sha1.Sum([]byte(input))
	return r[:]
}

func RandomBytes(size int) []byte {
	b := make([]byte, size)
	_, _ = cr.Read(b)
	return b
}

func Xor(dst, src []byte) {
	for i := range dst {
		dst[i] ^= src[i]
	}
}
