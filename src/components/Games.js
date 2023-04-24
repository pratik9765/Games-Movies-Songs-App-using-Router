import GamesCard from "./GamesCard"

const Games = (props) => {

  const GameData =props.GamesData;


  return (
    <div className='w-full mt-9'>
      <div className='w-[80%]  flex flex-row flex-wrap mx-auto gap-16'>
      {
        GameData.map((GameData) => {
          return(
            <GamesCard  key={GameData.index} 
            GameData = {GameData} >
            </GamesCard>
          )

        })
      }
      </div>
  
          

    </div>
  )
}

export default Games