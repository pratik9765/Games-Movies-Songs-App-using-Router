import React from 'react'

const Card = (props) => {
    let GameData = props.GameData;
  return (
    <div >
        <div className='bg-sky-100 w-full items-center rounded-xl '>
        <p className='m-3 pt-3 font-semibold text-3xl max-[550px]:text-xl'>{GameData.name}</p>
        <img className='items-center mx-auto' src={GameData.Image} alt="" />
        <p className='m-3 pb-5 max-[550px]:text-sm'>{GameData.overview}</p>
        </div>
       
    </div>
  )
}

export default Card