const express = require('express')
const app = express()
const cors = require('cors')
const { z } = require('zod')

// default data
const products = [
    {
        id: 1,
        name: 'Blue shoes',
        price: 29.99,
    },
    {
        id: 2,
        name: 'Skinny jeans',
        price: 12.0,
    },
    {
        id: 3,
        name: 'Oversized T-shirt',
        price: 17.5,
    },
]

app.use(express.json())

// för en att se mer om cors: https://youtu.be/PNtFSVU-YTI
app.use(
    cors({
        origin: '*',
    })
)

// svarar med alla produkter
app.get('/products', (_, res) => {
    res.json(products)
})

// svarar en produkt
app.get('/products/:id', (req, res) => {
    // req.params.id är en string till att börja med, så vi gör om det till ett nummer
    const id = parseInt(req.params.id)
    const product = products.find((p) => p.id === id)

    // ifall vi inte hittar en produkt svarar vi med ett 404 error
    if (!product) {
        return res.status(404).send({
            message: 'Product not found',
        })
    }

    res.json(product)
})

app.post('/product', (req, res) => {
    // skapar en schema med zod för att senare validera att det som klienten skickar är korrekt
    const requestSchema = z.object({
        name: z.string(),
        price: z.number(),
    })

    // safeParse funktionen kommer kolla att req.body ser ut som vi förväntar oss
    // är den inte så vet vi att klienten skickade något vi inte vill acceptera
    // så skickar en status på 400 (Bad Request) och ett meddelande på vad som gick fel
    if (!requestSchema.safeParse(req.body).success) {
        return res.status(400).send({ message: 'Invalid types' })
    }

    const { name, price } = req.body

    const product = {
        id: products.length + 1,
        name,
        price,
    }

    products.push(product)

    res.json(product)
})

app.listen(3000)
