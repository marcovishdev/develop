const express = require("express");

const app = express();

app.get("/", (req,res) => {res.send("Hola Mundo Express")});

const requestHandler = () => {
    console.log("Servidor escuchando en puerto 8080");
};

app.listen(8080, requestHandler);