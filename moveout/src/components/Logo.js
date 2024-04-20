import React from 'react'

function Logo(titre,image) {
  return (
    <div>
        <img src={image} alt="Logo" />
        <text>{titre}</text>
      
    </div>
  )
}

export default Logo
