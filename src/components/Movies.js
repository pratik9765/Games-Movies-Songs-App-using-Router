import React from 'react';
import MovieCard from './MovieCard';

const Movies = (props) => {
    let MovieData = props.MoviesData;
  return (
    <div className= "w-full mt-9">
      <div className='w-[80%]  flex flex-row flex-wrap mx-auto gap-16'>
        {
          MovieData.map((MovieData)=>{
            return(
              <MovieCard key={MovieData.index}
              MovieData={MovieData}></MovieCard>
            )

          })
        }
      </div>
    </div>
  )
}

export default Movies