const express= require('express')
const app=express()
const port=1500
const cors=require('cors')
const mongoose=require('mongoose')
const formModel = require('./models/form')

app.use(express.json())
app.use(cors())



mongoose.connect('mongodb://127.0.0.1:27017/MachineTest')
  .then(() => {
    console.log('MongoDB connected successfully');
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
  });

app.post('/postform', async(req,res)=>{
    try{
        const {name, email, course, university, year}=req.body;
        const form=await formModel.create({name, email, course, university, year})
        res.status(201).json(form)
    }catch(err){
        console.log(err);
    }
})
app.get('/getform', async(req,res)=>{
    try{
        const getform=await formModel.find()
        res.json(getform)
    }catch(err){
        console.log(err);
    }
})



app.listen(port,()=>{
    console.log(`server is connected on port ${port}`);
})