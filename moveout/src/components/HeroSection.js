import React from 'react'
import {Button} from './Button'
import './HeroSection.css'


function HeroSection() {
  return (
    <div className='hero-container'>
        <video src="./videos/mtlStreet.mp4" autoPlay loop muted/>
        <h1>Appartements Abordable?</h1>
        <p>Trouves des Appartements abordable à montréal</p>
        <div className='hero-btns'>
        <Button
        className='btns'
        buttonStyle='btn--outline'
        buttonSize='btn--large'
        >
            Trouver Un Appartement!

        </Button>
        </div>
      
    </div>
  )
}

export default HeroSection
