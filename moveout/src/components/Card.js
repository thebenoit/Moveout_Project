import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function Card() {
  return (
    <div className="cards">
        <h1>76 Résultats</h1>
        <div className="cards__container">
            <div className="cards__wrapper">
                <ul className='cards__items'>
                <CardItem/>
                <CardItem/>
                <CardItem/>
                
                
                </ul>

            </div>
        </div>
      
    </div>
  )
}

export default Card
