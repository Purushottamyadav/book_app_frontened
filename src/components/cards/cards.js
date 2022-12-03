import React from 'react'
import "./cards.css"
const Cards = () => {
  return (
    <>
    <div className='card-container'>
      <div className='image-container'>
       <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3S-5Z0zwKCY6jKolW5naQojapyk68yHFGHw&usqp=CAU' alt='books'/>
      </div>
      <div style={{color:"vilot"}}>The hunger of games</div>
      <div style={{color:"black"}}>alex pauls</div>
      <div style={{color:"black"}}>Popular</div>
    </div>

    </>
  )
}

export default Cards
