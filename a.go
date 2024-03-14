package main

import (
	"log"

	"github.com/amarnathcjd/gogram/telegram"
)

func main() {
	client, err := telegram.NewClient(telegram.ClientConfig{
		AppID:         3138242,
		AppHash:       "9ff85074c961b349e6dad943e9b20f54",
		LogLevel:      telegram.LogDebug,
		MemorySession: true,
		StringSession: "1BvXCnmJvWJwIs_WIz7fbo1Yx3xz3CzioCqOoeZ8m2imTz5VCXamOJCcx43fDLoi8715-lfEd9mZDW5NNtnbzmrf-O7WTpnBQAT2ErjbUtl_vQnHOARjLevyVkmzGu9Ra1ebmRvl_4KFC3vC0RySTRh66PtAzJjAJold65rmk1ELskp-gPOwdLkn_uDIr3BBveWL_O_uhNLkB47bpQSQiBkYC1V30ySdflONYtGkwBiYGmzop3nQlcSP-CBqMzc4L2BdVBKv5wNnnO1AgH3oLCOnx0SpcAQTaCX9e6QGtPY25JHuzheAFvEsP8tWYMIk9Vsk1lbYQMyGdKsqgCDoqKwrZjo6OOGzbGs6hFM6OjkxLjEwOC41Ni4xNTE6NDQzOjoFOjrvv70",
	})
	client.Conn()
	if err != nil {
		log.Fatal(err)
	}

	c, _ := client.GetSendableChannel("rosexchat")
	client.GetSendableChannel(c)
	client.ChannelsGetFullChannel(c)
}
