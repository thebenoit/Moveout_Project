import React from 'react'
import {Button} from './Button'
import './HeroSection.css'


function HeroSection() {
  return (
    <div className='hero-container'>
        <video src="./videos/mtlStreet.mp4" autoPlay loop muted/>
        <h1> Tu cherches un Appartement Abordable?</h1>
        <p>Appuie sur le bouton ci-dessous</p>
        <div className='hero-btns'>
        <Button
        typeButton={'btn'}
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
