package main

import (
	"fmt"
	"log"
	"net/http"
)

func main() {
	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		fmt.Fprintf(w, "Hola Mundo GO")
	})
	fmt.Println("Server listening in port 8080 ...")
	log.Fatal(http.ListenAndServe(":8080", nil))

}
