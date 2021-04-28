const router = require('express').Router()
const Product = require('../models/products-model')

router.get('/', async (req,res) => {
    try {
        console.log("get");
        const data = await Product.find()
        res.status(200).json(data)
    } catch (error) {
        res.send(501).json(error)
    }
})


router.get('/:search', (req,res) => {
    try {
        const data = Product.find({Title: req.params.search})
        res.status(201).send("okay")
    } catch (error) {
        console.log(error);
        res.status(500).send(error)
    }
})


module.exports = router