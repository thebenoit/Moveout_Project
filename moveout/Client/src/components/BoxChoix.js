import React, {useState}  from 'react'

function BoxChoix() {

        //maximum prix à choisir
        const [MaximumPrix, setMaximumPrix] = useState()
        //minimum prix à choisir
        const [MiniimumPrix, setMinimumPrix] = useState()
        //maximum bedroom à choisir
        const [Maximumbedroom, setMaximumBedroom] = useState()




  return (
    <div className="Box">
        <h1>Button</h1>
        
        <form className="BoxChoixForm">

            <label>Maximum prix</label>
            <input type='number'> </input>

            <label>Minimum prix</label>
            <input type='number'></input>

            <label>Maximmum bedrooms</label>
            <input type='number' ></input>

        </form>


      
    </div>
  )
}

export default BoxChoix
