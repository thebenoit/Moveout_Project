const express = require('express')
const { Mongoose } = require('mongoose')
const router = express.Router()
const Schema = Mongoose.Schema

router.get('/appartments', (req, res) => {

    const appartments = Schema.appartments

    const appartData = await.appartments.find({}).exec()

    if(appartData)
    {
        //transforme la réponse en JSON
        res.send(JSON.stringify(appartData))
        console.log("Données insérées: ", appartData)
    }
    
})
router.get('/users', (req, res) => {

    

    
})


module.exports = router