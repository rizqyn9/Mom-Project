const monggose = require('mongoose')

const Product = new monggose.Schema({
    Nama_Barang : {
        type: String
    },
    Desc :{
        type: String
    },
    Label:{
        type: String
    },
    Images: {
        type: Object   
    },
    Category: {
        type: String
    },
    Properties: [
    ],
    Date_Created:{
        type:Date
    },
    Date_Updated : {
        type: Date
    }
})

module.exports = monggose.model("Product", Product)