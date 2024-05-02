import React from 'react'
import CardItem from 'src/components/CardItem'
import 'src/components/Cards.css'



function Card() {
  const {MongoClient} = require("mongodb");

  return (
    <div className="cards">
        <h1>76 Résultats</h1>
        <div className="cards__container">
            <div className="cards__wrapper">
                <ul className='cards__items'>
                <CardItem
                src='/Image_Logos/img_room_test.jpg'
                text="900 3 beds Appartment"
                label='Facebook'
                path='/'
                
                />
                <CardItem
                src='/Image_Logos/img_room_test.jpg'
                text="900 3 beds Appartment"
                label='Centris'
                path='/'
                />    
                <CardItem
                src='/Image_Logos/img_room_test.jpg'
                text="900 3 beds Appartment"
                label='Centris'
                path='/'
                />                                         
                </ul>
                <ul className='cards__items'>
                <CardItem
                src='/Image_Logos/img_room_test.jpg'
                text="900 3 beds Appartment"
                label='Centris'
                path='/'
                />     
                 
                 <CardItem
                src='/Image_Logos/img_room_test.jpg'
                text="900 3 beds Appartment"
                label='Centris'
                path='/'
                />     
                 <CardItem
                src='/Image_Logos/img_room_test.jpg'
                text="900 3 beds Appartment"
                label='Centris'
                path='/'
                />      
                </ul>
                

            </div>
        </div>
      
    </div>
  )
}

export default Card
