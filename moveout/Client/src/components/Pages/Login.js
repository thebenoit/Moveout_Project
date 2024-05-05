import React from 'react'
import {Button} from '../Button'
import {useState} from "react"



function Login() {

    const [email, setEmail] = useState('');
    const [nom, setNom] = useState('');
    const [prenom, setPrenom] = useState('');
    const [tel, setTel] = useState('');




    const handleSubmit = (e) =>{
        e.preventDefault()

    }
  return (
    <>
        <h1>Login</h1>

        <form className="contactForm">
            <label>Nom</label>
            <input type='text' id="nom" name="nom" value={nom} onChange={(e) => setNom(e.target.value)}></input>

            <label>Prénom</label>
            <input type='text' id="prenom" name="prenom" value={prenom} onChange={(e) => setPrenom(e.target.value)}></input>

            <label>Tél:</label>
            <input type='telephone' id="telephone" name="telephone" value={tel} onChange={(e) => setTel(e.target.value)}></input>

            <label>email:</label>
            <input type='email' id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)}></input>

            <button type="submit" onClick={handleSubmit}>Submit</button>



        </form>
      
    </>
  )
}

export default Login
