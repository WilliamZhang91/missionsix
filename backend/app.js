const express = require('express');
const bodyParser = require('body-parser');
const mongoPractice = require("./mongoose")
const cors = require("cors");
const app = express();
require("dotenv").config();
const port = process.env.PORT;
app.use(cors());
const path = require('path')


app.use(bodyParser.json());

app.post('/products', mongoPractice.createProduct);

app.get('/products', mongoPractice.getProducts);

app.post('/contacts', mongoPractice.createContact);

if (process.env.NODE_ENV === "production") {  
    app.use(express.static(path.join(__dirname, "../frontend/build")))
    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "../frontend/build/index.html"));
    });
} else {
    app.get("/", (req, res) => {
        res.send("Api running")
    })
}

app.listen(port);