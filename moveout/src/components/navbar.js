import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import MoveoutLogo from './Logo'

function navbar() {
    //const [click,setClick] = useState(false)
const imageSrc = '/Image_Logos/moveoutLogo2.svg'
  return (
    <>
       <nav className='navbar'>

       <div className='navbar-container'>
       <Link to='/' className='navbar-logo'>
                TRVL <i className='fab fa-typo3'/>
            </Link>

            <MoveoutLogo
                titre={"Moveout"}
                imageSrc={imageSrc}

            />
        <div className='Menu-Icon'>
           {/**<i className={click ? 'fas fa-time' : 'fas fa-bars'}/>*/}
            
        </div>

       </div>


       </nav>
             
        
       
    </>
  )
}

export default navbar
