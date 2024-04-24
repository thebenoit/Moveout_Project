import React from 'react'
import { faTruck } from '@fortawesome/free-solid-svg-icons';
//import "../../App.css"
import Cards from '../Card'
import MovingLogo from '../Logo'

function Demenagement() {
    const imageSrc = (
        <FontAwesomeIcon icon={faTruck} style={{ color: "#ffffff" }} />
    );

    /*"/Image_Logos/Xmark Classic Solid Icon _ Font Awesome_files";*/
  return (
    <div className='demenagement'>
        <MovingLogo
        titre={"Moveout"}
        imageSrc={imageSrc} 
        />



    
      
    </div>
  )
}

export default Demenagement
