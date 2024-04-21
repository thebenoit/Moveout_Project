import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import MoveoutLogo from './Logo'

function Navbar() {
const [click,setClick] = useState(false)

const handleClick = () => setClick(!click)
const closeMobileMenu = () => setClick(false)
const imageSrc = '/Image_Logos/moveoutLogo2.svg'
  return (
    <>
       <nav className='navbar'>

       <div className='navbar-container'>
      

            <MoveoutLogo
                titre={"Moveout"}
                imageSrc={imageSrc}

            />
        <div className='Menu-Icon' onClick={handleClick}>
           <i className={click ? 'fa-solid fa-xmark' : 'fas fa-bars'}/>
            
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
         <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
            </Link>
            
            
            

           
        </li>   
        <li><Link to='/' className='nav-links' onClick={closeMobileMenu}>
               Déménager
            </Link></li>
        <li><Link to='/' className='nav-links' onClick={closeMobileMenu}>
                About us
            </Link></li>
        <li>
        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Sign Up
            </Link>
        </li>
        
        </ul>
       </div>


       </nav>
             
        
       
    </>
  )
}

export default Navbar
