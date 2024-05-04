const mongoose = require('mongoose')
const Schema = mongoose.Schema

const appartmentSchema = new Schema({
    title:{type:String},
    price:{type:Number},
    city:{type:String},
    bedrooms:{type:Number},
    city:{type:String},
    url:{type:String},
    img:{type:String},
    date_scraped:{type:Date}

})

const usersSchema = new Schema({
    name:{type:String},
    email:{type:String},
    tel:{type:Number},
   

})

const appartments = mongoose.model('Appartments',appartmentSchema,'appartments_2024_04_28_20_34')
const users = mongoose.model('Users',usersSchema,'users')

const mySchemas = {appartment:'Appartments',users:'Users'}

