import React from 'react'

const MovieCard = (props) => {
    let MovieData= props.MovieData;
  return (
    <div className='w-full'>
        <div className='bg-sky-100 w-full items-center rounded-xl '>
        <p className='m-3 pt-3 font-semibold text-3xl max-[550px]:text-xl'>{MovieData.name}</p>
        <img className='items-center mx-auto' src={MovieData.Image} alt="" />
        <p className='m-3 pb-5 max-[550px]:text-sm'>{MovieData.overview}</p>
        </div>
    </div>
  )
}

export default MovieCard