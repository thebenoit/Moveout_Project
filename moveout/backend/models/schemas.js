const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const appartmentSchema = new Schema({
    title: { type: String },
    price: { type: Number },
    city: { type: String },
    bedrooms: { type: Number },
    url: { type: String },
    img: { type: String },
    date_scraped: { type: Date }
});

const usersSchema = new Schema({
    name: { type: String },
    email: { type: String },
    tel: { type: Number }
});

const Appartments = mongoose.model('Appartments', appartmentSchema, 'appartments_2024_05_11_17_03');
//const Users = mongoose.model('Users', usersSchema, 'users');

const mySchemas = { 'Appartments': Appartments };  // Ici, vous devez passer les objets modèles

module.exports = mySchemas;
