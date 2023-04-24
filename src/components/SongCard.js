import React from 'react'

const SongCard = (props) => {
    let SongData = props.SongData;
  return (
    <div className='w-full'>
          <div className='bg-sky-100 w-full items-center rounded-xl '>
        <p className='m-3 pt-3 font-semibold text-3xl max-[550px]:text-xl'>{SongData.name}</p>
        <img className='items-center mx-auto' src={SongData.Image} alt="" />
        <p className='m-3 pb-5 max-[550px]:text-sm'>{SongData.overview}</p>
        </div>
    </div>
  )
}

export default SongCard