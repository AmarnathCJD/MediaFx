package main

import (
	"fmt"
	"io"
	"log"
	"net/http"
	"net/url"
)

var (
	urx = url.URL{
		Scheme: "socks5",
		Host:   "sin.socks.ipvanish.com:1080",
		User:   url.UserPassword("6fUNyidVCgY", "5shI6NljlqMY"),
	}
)

const PORT = 3004

func main() {
	http.HandleFunc("/getSources", func(w http.ResponseWriter, r *http.Request) {
		id := r.URL.Query().Get("id")
		fmt.Println(id)
		io.WriteString(w, getSource(id))
	})
	http.ListenAndServe(fmt.Sprintf(":%d", PORT), nil)

}

func getSource(id string) string {
	client := http.Client{
		Transport: &http.Transport{
			//Proxy: http.ProxyURL(&urx),
		},
	}

	req, err := http.NewRequest("GET", "https://megacloud.tv/embed-1/ajax/e-1/getSources?id="+id, nil)
	if err != nil {
		log.Fatal(err)
	}

	req.Header.Set("referer", "https://attackertv.so/watch-movie/drifter-106075")
	req.Header.Set("x-requested-with", "XMLHttpRequest")

	resp, err := client.Do(req)
	if err != nil {
		fmt.Println(err)
	}

	defer resp.Body.Close()
	body, err := io.ReadAll(resp.Body)
	if err != nil {
		fmt.Println(err)
	}

	return string(body)
}
