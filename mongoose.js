const mongoose = require("mongoose");
const express = require("express")
const { application } = require("express");
require("dotenv").config();

const password = process.env.DATABASE_PASSWORD
const name = process.env.DATABASE_NAME
const cluster = process.env.DATABASE_CLUSTER
const database = process.env.DATABASE

//const Product = require("./models/product");



mongoose.connect(`mongodb+srv://${name}:${password}@${cluster}/${database}?retryWrites=true&w=majority`)
    .then(() => {
        console.log("Connected to database!")
    }).catch(() => {
        console.log("Connection failed!")
    });


const productSchema = new mongoose.Schema({
    registration: {
        type: String,
        //required: true,
    },
    first_name: {
        type: String,
        //required: true
    },
    surname: {
        type: String,
        //required: true
    },
    address: {
        type: String,
        //required: true
    },
    phone: {
        type: Number,
        //required: true
    },
    email: {
        type: String,
        //required: true
    },
    plan: {
        type: String,
        //required: true
    }
});

const contactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    }
})

const Product = mongoose.model("Product", productSchema);
const Contact = mongoose.model("Contact", contactSchema);

const createProduct = async (req, res, next) => {
    const createdProduct = new Product({
        name: req.body.first_name,
        surname: req.body.surname,
        registration: req.body.registration,
        phone: req.body.phone,
        email: req.body.email,
        address: req.body.address,
        plan: req.body.plan
    })
    console.log(createdProduct)
    const result = await createdProduct.save()
    console.log(typeof createdProduct._id)
    res.json(result);
};

const createContact = async (req, res, next) => {
    const createdContact = new Contact({
        name: req.body.name,
        email: req.body.email,
        message: req.body.message
    })
    console.log(createdContact);
    const result = await createdContact.save();
    res.json(result)
}


const getProducts = async (req, res, next) => {
    const products = await Product.find().exec() //.exec() turns find() into a promise
    res.json(products);
}

exports.createProduct = createProduct;
exports.getProducts = getProducts;
exports.createContact = createContact;