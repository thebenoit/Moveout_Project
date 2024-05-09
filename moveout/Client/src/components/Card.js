import React, { useEffect,useState } from "react";
import CardItem from "../components/CardItem";
import "../components/Cards.css";
import axios from 'axios';
// const {MongoClient} = require("mongodb");

function Card() {

  const [apartments, setApartments] = useState([]);
  const APPART_URL = "http://localhost:4000/appartments"

  

    useEffect(() => {

  /**
   * méthode qui fetch le backend API qui contient les
   * data des appartements 
   */
  const axiosFetchData = async () => {
    try {
      // Fetch data using Axios
      const response = await axios.get(APPART_URL);
      // Set fetched data into state
      setApartments(response.data);
    } catch (error) {
      console.error("Error fetching apartment data:", error);
    }
  };
      axiosFetchData()

    },[])

  

  

  return (
    <div className="cards">
      <h1>76 Résultats</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="/Image_Logos/img_room_test.jpg"
              text="900 3 beds Appartment"
              label="Facebook"
              path="/"
            />
            <CardItem
              src="/Image_Logos/img_room_test.jpg"
              text="900 3 beds Appartment"
              label="Centris"
              path="/"
            />
            <CardItem
              src="https://scontent.fymq2-1.fna.fbcdn.net/v/t39.30808-6/438145887_1627342808036890_6667496797886134274_n.jpg?stp=c0.58.526.526a_dst-jpg_p526x296&_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=QaHMY0zQSGIQ7kNvgFyKrwg&_nc_ht=scontent.fymq2-1.fna&oh=00_AfAsuq35NP6tDLG_WjFtAvqkqxYRsV25wbD_BJm9IzYpnQ&oe=6640CC05"
              text="900 3 beds Appartment"
              label="Centris"
              path="/"
            />
          </ul>
          <ul className="cards__items">
          {apartments.map((apartment,index) =>(
                <CardItem
                key={index}
                src={apartment.img}
                text={`${apartment.price}$ ${apartment.title}`}
                path={apartment.url}
                label="Facebook"
                />

            ))}
            
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Card;
