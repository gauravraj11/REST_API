const express = require('express');
const mongoose = require('mongoose');

const products = require('./models/products');
const users = require('./models/users');

const server = express();

const URL_DB = "mongodb+srv://Gaurav_2024:abcxyz@cluster0.6oq7bkr.mongodb.net/crud";

//DB connection
mongoose.connect(URL_DB);
const con = mongoose.connection;

con.on('open', ()=>{
    console.log("crud DB connected");
    
})

//middleware: Built-In
server.use(express.json());

server.get('/products',async (req, res)=>{
    const data = await products.find();
    res.send(data);
})

server.post('/products', async (req, res)=>{
    const data = await req.body;
    console.log(data);
    
    // const data = {name: "laptop", price: "1000000"}
    const postResult = await products.insertMany(data);
    res.send("Data posted");
})
server.get('/users',async (req, res)=>{
    const data = await users.find();
    res.send(data);
})

server.listen(3200, ()=>{

    console.log("Server is running...");
    
})