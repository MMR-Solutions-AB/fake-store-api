const mongoose = require('mongoose')

const cartSchema = new mongoose.Schema({
    products: [
        {
            product: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Product',
            },
            numberOfProducts: Number,
        },
    ],
})

module.exports = mongoose.model('Cart', cartSchema)
