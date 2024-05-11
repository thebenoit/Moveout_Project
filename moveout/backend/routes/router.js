const express = require("express");
const { Mongoose } = require("mongoose");
const router = express.Router();
const Schema = Mongoose.Schema;
const schemas = require("../models/schemas");

/*router.post('/appartments',(requ, res) => {

  /*const {title, price, city, bedrooms, url, img, date_scraped} = req.body

  const apartmentsData = {
    title: title ,
    price: price, 
    city: city,
    bedrooms: bedrooms,
    url: url,
    img: img,
    date_scrape: date_scraped }
})

const newAppart = new schemas.appartments(apartmentsData)
const saveAppart = await newAppart.save()

})*/

router.get("/appartments", async(req, res) => {
  try {
    const appartments = schemas.Appartments;
    console.log("Recherche dans la collection: ", appartments.collection.name);
    const docCount = await appartments.collection.countDocuments({});
    console.log("NB_Documents ", docCount);
    const appartData = await appartments.find({});
    console.log("Données récupérées:");

    if (appartData.length === 0) {
      console.log("Aucune donnée trouvée", appartData);
      return res.status(404).send("Aucune donnée trouvée");

    }

    res.send(appartData);
  } catch (error) {
    console.error("Erreur lors de la récupération des données:", error);
    res.status(500).send("Erreur lors de la récupération des données");
  }
});

router.get("/users", (req, res) => {
  const { nom, prenom, tel, email } = req.body;
});

module.exports = router;
