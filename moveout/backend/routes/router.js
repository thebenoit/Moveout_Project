const express = require('express')
const { Mongoose } = require('mongoose')
const router = express.Router()
const Schema = Mongoose.Schema

router.get('/appartments', (req, res) => {

   const AppartmentsData = [{
    "_id": {
      "$oid": "663b08da8eaff6aae413a1b2"
    },
    "title": "2 Beds 1 Bath - Apartment",
    "price": 840,
    "city": "Montréal, QC",
    "bedrooms": 1,
    "url": "https://www.facebook.com//marketplace/item/976199293912780/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t39.30808-6/441350074_7163314483797099_872077244687563396_n.jpg?stp=c210.0.540.540a_dst-jpg_p180x540&_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=N0_1MPtYJ0YQ7kNvgHJAmbu&_nc_ht=scontent.fymq2-1.fna&oh=00_AfCetXc0Q6_TB0BTOgWsT5b3yD76FgcjNHA0xZcbjDpPlg&oe=6640D0D6",
    "date_scraped": {
      "$date": "2024-05-08T01:08:42.014Z"
    }
  },
  {
    "_id": {
      "$oid": "663b08da8eaff6aae413a1b3"
    },
    "title": "2 Beds 1 Bath - Apartment",
    "price": 850,
    "city": "Montréal, QC",
    "bedrooms": 1,
    "url": "https://www.facebook.com//marketplace/item/414622431318360/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t39.30808-6/438145887_1627342808036890_6667496797886134274_n.jpg?stp=c0.58.526.526a_dst-jpg_p526x296&_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=QaHMY0zQSGIQ7kNvgFyKrwg&_nc_ht=scontent.fymq2-1.fna&oh=00_AfAsuq35NP6tDLG_WjFtAvqkqxYRsV25wbD_BJm9IzYpnQ&oe=6640CC05",
    "date_scraped": {
      "$date": "2024-05-08T01:08:42.317Z"
    }
  },
  {
    "_id": {
      "$oid": "663b08da8eaff6aae413a1b4"
    },
    "title": "2 chambres à coucher 1 salle de bain Appartement",
    "price": 840,
    "city": "Montréal, QC",
    "bedrooms": 1,
    "url": "https://www.facebook.com//marketplace/item/350035841429334/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/439831138_304521436030496_121095032113515107_n.jpg?stp=c90.0.540.540a_dst-jpg_p180x540&_nc_cat=106&ccb=1-7&_nc_sid=247b10&_nc_ohc=V1Kc4ymBqFsQ7kNvgGF254g&_nc_ht=scontent.fymq2-1.fna&oh=00_AfDZcgfqPbNenEmRvshjZv7yfg0zj1nRg1CYIykxkEfvoA&oe=6640F12C",
    "date_scraped": {
      "$date": "2024-05-08T01:08:42.319Z"
    }
  }]

      res.send(AppartmentsData)

    /*const appartments = Schema.appartments

    const appartData = await.appartments.find({}).exec()

    if(appartData)
    {
        //transforme la réponse en JSON
        res.send(JSON.stringify(appartData))
        console.log("Données insérées: ", appartData)
    }*/


    
})

router.get('/users', (req, res) => {

    

    
})


module.exports = router