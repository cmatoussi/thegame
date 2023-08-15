
import React from 'react';
import { GiTrophyCup} from "react-icons/gi";
import { GiDeadHead} from "react-icons/gi";

function GameOver({won,placed}) {
  const handleRefreshClick = () => {
    window.location.reload();
  }
  return (
  <div>
    {won ? (
      <div>
      <h3>Congratulations!</h3>
      <GiTrophyCup  color="gold" size="150px"/>
      <h3>You won!</h3>
      </div>
      ) : (
      <div>
      <h3>Game Over!</h3>
      <GiDeadHead size="100px"/>
      <p>score: {98-placed}</p>
      </div>
    )}
  <button className='play-again' onClick={handleRefreshClick}>Play again</button>
  </div>
  )
}

export default GameOver;