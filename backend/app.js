const express = require('express');
const bodyParser = require('body-parser');
const mongoPractice = require("./mongoose")
const cors = require("cors");
const app = express();
app.use(cors());


app.use(bodyParser.json());

app.post('/products', mongoPractice.createProduct);

app.get('/products', mongoPractice.getProducts);

app.post('/contacts', mongoPractice.createContact);

app.listen(4000);