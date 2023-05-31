require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const products = require('./Router/Products')



const PORT = process.env.PORT || 8000

app.use(express.json())
app.use(cors())

app.use('/products', products)


app.get ('/', (req,res)=>{
    res.json({message:"server all the products items..."})
})

app.listen(PORT, ()=>{
    console.log(`server is working at port on http://localhost:${PORT}`)
})

products.get('./', (req,res)=>{
    res.json({message:'which is the products items...'})
})
