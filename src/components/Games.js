import React, { useState } from 'react'
import { GamesData } from '../data';
import Card from "../components/Card"

const Games = (props) => {

  const GameData =props.GamesData;
  const [index,setIndex] = useState(0);


  return (
    <div className='w-full mt-9'>
      <div className='w-[70%] flex flex-row items-center justify-center mx-auto gap-16'>
      {
        GameData.map((GameData) => {
          return(
            <Card  key={GameData.index} 
            GameData = {GameData} >
            </Card>
          )

        })
      }
      </div>
  
          

    </div>
  )
}

export default Games