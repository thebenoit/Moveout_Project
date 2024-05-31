import React from 'react'
import { Link } from "react-router-dom";
import '../components/Footer.css'

function Footer() {
  return (
    <div className='footer-container'>
       <section className="footer-socials">
       <Link
       to="https://www.instagram.com/moveout_mtl?igsh=MTI1amg1amk2YzV6cw%3D%3D&utm_source=qr"
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
       
      <p className="footer-sign">© Moveout</p>
      
    </div>
  )
}

export default Footer
