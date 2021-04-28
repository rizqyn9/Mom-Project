const router = require('express').Router()
const Products = require('../models/products-model')

router.get('/', (req,res) => {
    res.send(200).json({data : "okay"})
})
router.get('/:id', async (req,res,next) => {
    try {
        const {id} = req.params
        console.log(`${id}`);
        const data = await Products.findById(id)
        if(!data) {
            console.log("data not found");
            return res.status(401).json({error : "Data tidak ditemukan"})
        }
        console.log(data);
        res.status(200).json(data)
    } catch (error) {
        
    }
})

module.exports = router