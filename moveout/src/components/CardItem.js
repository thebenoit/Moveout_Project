import React from 'react'
import {Link} from 'react-router-dom'

function CardItem(props) {
  return (
    <>
      <li className="cards__item">
        <Link className="cards__item__link"
              to={props.path}  >
            <figure className="cards__item__pic-wrap"
            data-category={props.label}>
                <img
                className='cards__item__img' 
                src="https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/436453890_1839723259782515_1461538725754611133_n.jpg?stp=c90.0.540.540a_dst-jpg_p180x540&_nc_cat=101&ccb=1-7&_nc_sid=247b10&_nc_ohc=N_YnPwDwoOQAb4UI6G_&_nc_ht=scontent.fymq2-1.fna&oh=00_AfAZuZrD-t_ocVG2qdKgoyo8N0y8XRx2_-_Jm0JDc7bfHw&oe=662DFCC2" 
                alt="Travel Image"
                />

            </figure>
            <div className='cards__item__info'>
                <h5 className="cards__item__text">
                900$ 2 Beds 1 Bath - Apartment
                </h5>

            </div>
        </Link>
      </li>
    </>
  )
}

export default CardItem
