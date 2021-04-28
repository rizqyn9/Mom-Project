const express = require('express')
const app = express()
const {URI_MONGODB} = require('./server/config')
const mongoose = require('mongoose')
const cors = require('cors')

mongoose.connect(URI_MONGODB,{useNewUrlParser: true, useUnifiedTopology:true, useCreateIndex:true, useFindAndModify:true})
    .then(()=> console.log("Terhubung ke Database = MAMA"))
    .catch(err => console.log(err))

var corsOptions = {
    origin: "http://localhost:3000"
    };
    
app.use(cors(corsOptions));
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(express.static('public'))

app.use('/', require('./server/controllers/home-contoller'))
app.use('/catalogue' , require('./server/controllers/catalogue-controller'))
app.use('/product' , require('./server/controllers/product-controller'))
app.use('/addProduct' , require('./server/controllers/addProduct-controller'))


app.listen(3005, () => {
    console.log(`Server running on http://localhost:3005`);
})