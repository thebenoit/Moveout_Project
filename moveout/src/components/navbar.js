import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import MoveoutLogo from './Logo'
import {Button} from './Button.js'
import './navbar.css'

function Navbar() {
const [click,setClick] = useState(false)
const [button, setButton] = useState(true);

const handleClick = () => setClick(!click)
const closeMobileMenu = () => setClick(false)

const showButton = () => {
    if(window.innerWidth <= 960) {
        setButton(false);
    } else {
        setButton(true);
    }
};
window.addEventListener('resize', showButton);
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
        {button && <Button buttonStyles='btn--outline'> Sign Up</Button>}
       </div>


       </nav>
             
        
       
    </>
  )
}

export default Navbar
