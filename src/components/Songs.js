import React from 'react'
import Songcard from './SongCard'
import SongCard from './SongCard';

const Songs = (props) => {
  let SongData = props.SongsData;
  return (
    <div className='w-full mt-9'>
      <div className='w-[80%]  flex flex-row flex-wrap mx-auto gap-16'>
        {
          SongData.map((SongData)=>{
            return(
              <SongCard SongData={SongData}></SongCard>
            )
          })
        }
      </div>

      
    </div>
  )
}

export default Songs