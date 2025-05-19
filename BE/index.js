import express from 'express'
import mongoose from 'mongoose';
import cors from 'cors';
const {Schema}=mongoose

const app = express()
const port = 3000
app.use(cors())
app.use(express.json());
mongoose.connect('mongodb+srv://admin:admin@cluster0.iq05qmm.mongodb.net/').then(()=>console.log("conected")).catch((eror)=>console.log("islemir"));


const Products = new Schema({
  image:String,
  productName:String,
  price:Number
  });
const Product = mongoose.model('Product', Products);


app.get('/', async(req, res) => {
    let data= await Product.find()
  res.send(data)
})
app.get('/:id', async(req, res) => {
    const {id}=req.params
    let data= await Product.findById(id)
  res.send(data)
})

app.post('/', async (req, res) => {
    const {body}=req
    let data=await Product.create(body)
    res.send(data)
  })

  app.delete('/:id', async (req, res) => {
    const {id}=req.params
    const  data= await Product.findByIdAndDelete(id)
    res.send(data)
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
