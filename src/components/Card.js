import React from 'react'

const Card = (props) => {
    let GameData = props.GameData;
  return (
    <div >
        <div >
        <p>{GameData.name}</p>
        <img src={GameData.Image} alt="" />
        <p>{GameData.overview}</p>
        </div>
       
    </div>
  )
}

export default Card