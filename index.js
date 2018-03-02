const express = require("express");
const http = require("http");
const path = require("path");
const bodyParser = require("body-parser");
require("dotenv").config();

const app = express();

app.use(bodyParser.json());

app.get("/hello", (req, res) => res.send("Hello World!"));

const port = process.env.PORT || 3000;

const server = http.createServer(app);

server.listen(port, () => console.log(`listening on port ${port}`));
