import React from 'react'
import { Link } from "react-router-dom";
import 'src/components/Footer.css'

function Footer() {
  return (
    <div className='footer-container'>
       <section className="footer-socials">
       <Link
       to="/demenagement"
       className="footer-links"
        >
        <i class="fa-brands fa-instagram"></i>
        </Link>
        <Link
       to="https://www.tiktok.com/@moveout_mtl"
       className="footer-links"
        >
        <i class="fa-brands fa-tiktok"></i>
        </Link>

       </section>

      
    </div>
  )
}

export default Footer
