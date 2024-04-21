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
            <Link to='/' className='nav-links-mobile' onClick={closeMobileMenu}>
                Home
            </Link>
            
            
            

           
        </li>   
        <li className='nav-item' ><Link to='/demenagement' className='nav-links-mobile' onClick={closeMobileMenu}>
               Déménager
            </Link></li>
        <li className='nav-item'><Link to='/about-us' className='nav-links-mobile' onClick={closeMobileMenu}>
                About us
            </Link></li>
        <li className='nav-item'>
        <Link to='/sign-up' className='nav-links-mobile' onClick={closeMobileMenu}>
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
