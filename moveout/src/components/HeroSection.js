import React from 'react'
import {Button} from './Button'
import './HeroSection.css'


function HeroSection() {
  return (
    <div className='hero-container'>
        <video src="./videos/mtlStreet.mp4" autoPlay loop muted/>
        <h1>Trouves des appartements abordables à montréal</h1>
        <p></p>
        <div className='her0-btns'>
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
