const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const Product = require('./models/Product')
const { z } = require('zod')

require('dotenv').config()

// connection till vår databas
mongoose.connect(process.env.MONGODB_URL, () => {
    console.log('connected')
})

app.use(express.json())

// för en att se mer om cors: https://youtu.be/PNtFSVU-YTI
app.use(
    cors({
        origin: '*',
    })
)

// svarar med alla produkter
app.get('/products', async (req, res) => {
    const { sortBy, sortOrder } = req.query
    const querySchema = z.object({
        sortBy: z.enum(['name', 'price']),
        sortOrder: z.enum(['asc', 'desc']),
    })

    const isValid = querySchema.safeParse({ sortBy, sortOrder })
    const products = await Product.find({}).sort(
        isValid ? { [sortBy]: sortOrder } : {}
    )

    res.json(products)
})

// svarar en produkt
app.get('/products/:id', async (req, res) => {
    try {
        const id = req.params.id
        const product = await Product.findById(id)

        // ifall vi inte hittar en produkt så skickar vi koden till catch stadiet
        if (!product) {
            throw new Error()
        }

        res.json(product)
    } catch (error) {
        return res.status(404).send({
            message: 'Product not found',
        })
    }
})

// radera en produkt
app.delete('/products/:id', async (req, res) => {
    try {
        const id = req.params.id
        const product = await Product.findByIdAndDelete(id)

        // ifall vi inte hittar en produkt så skickar vi koden till catch stadiet
        if (!product) {
            throw new Error()
        }

        res.json(product)
    } catch (error) {
        return res.status(404).send({
            message: 'Product not found 33',
        })
    }
})

// skapa en ny produkt
app.post('/product', async (req, res) => {
    // ifall använder gav något som inte stämmer överens med vår Mongoose schema kommer funktionen error:a
    // som vi fångar i catch nedanför
    try {
        const { name, price } = req.body
        const product = await Product.create({ name, price })

        res.json(product)
    } catch (error) {
        return res.status(400).send({ message: 'Invalid types' })
    }
})

app.listen(process.env.PORT)
