const express = require('express')
const app = express()
const port = 3003
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config()

app.use(cors())
app.use(express.json())

const cardSchema = new mongoose.Schema({
    img: String,
    categories: String,
    name: String,
    price: Number
});
const Card = mongoose.model('MyCard', cardSchema);

app.get('/', (req, res) => {
    Card.find({}, (err, docs) => {
        if (!err) {
            res.send(docs)
        } else {
            res.send("get alinmadi")
        }
    })
})

app.get('/:id', (req, res) => {
    const {id}=req.params
    Card.findById(id, (err, doc) => {
        if (!err) {
            res.send(doc)
        } else {
            res.send("id get alinmadi")
        }
    })
})

app.post('/', (req, res) => {
    const newCard = new Card({
        img: req.body.img,
        categories: req.body.categories,
        name: req.body.name,
        price: req.body.price
    });
    newCard.save()
    res.send("SUCCESFUL")
})

app.delete('/:id',(req,res)=>{
    const {id}= req.params
    Card.findByIdAndDelete(id,(err,doc)=>{
        if (!err) {
            res.send(doc)
            
        } else {
            res.send("delete sorgusu alinmadi")
        }
    })
})

mongoose.set('strictQuery', true);
mongoose.connect(process.env.UP)
    .then(() => console.log('Connected!'));

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})