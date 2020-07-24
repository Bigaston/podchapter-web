const express = require('express')
const path = require("path");
var compression = require('compression');

var app = express()

const PORT = 1697;

app.use(compression())

app.use("/public", express.static('./web/public'));

app.get("/robots.txt", (req, res) => {
	res.sendFile(path.join(__dirname, "./web/robots.txt"))
})

app.get("/sw.js", (req, res) => {
	res.sendFile(path.join(__dirname, "./web/sw.js"))
})

app.get("/*", (req, res) => {
	res.sendFile(path.join(__dirname, "./web/index.html"))
})

app.listen(PORT, () => console.log(`Serveur lauched on port ${PORT}`))
