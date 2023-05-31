const express = require('express')
const router = express.Router()
const controller = require('../controller/products')
const {productData} = require('../controller/products')


router.get('/',controller.productData);


router.post("/", (req, res)=>{
    res.json({message:"add new all the products"});
})

router.delete("/", (req, res)=>{
    res.json({message:"delete all the products"});
})

router.put("/", (req, res)=>{
    res.json({message:"edit the products"});
})

router.get("/:id", (req, res)=>{
    res.json({message:"get only new all the products"});
})


module.exports = router