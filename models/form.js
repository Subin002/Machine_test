const express= require('express')
const mongoose=require('mongoose')
const formSchema=mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String
    },
    course:{
        type:String
    },
    university:{
        type:String
    },
    year:{
        type:Number
    }
})

const formModel=mongoose.model('Form',formSchema)
module.exports=formModel