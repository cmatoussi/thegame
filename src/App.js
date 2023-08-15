import React, {useState} from 'react';
import './App.css';
import PlayerCards from './components/PlayerCards';
import TheDeck from './components/TheDeck';
import GameOver from './components/GameOver';
import CenterCard from './components/CenterCard';
function App() {
  const unique = new Set();
  const newDeck = []
  const [ascendingVal1, setAscendingVal1]= useState(0);
  const [ascendingVal2, setAscendingVal2]= useState(0);
  const [descendingVal1,setDescendingVal1] = useState(100);
  const [descendingVal2,setDescendingVal2] = useState(100);
  const [currentCard, setCurrentCard]= useState(null);
  const [gameOver, setGameOver] = useState(false); 
  const [placed,setPlaced] = useState(0)
  const [didDraw,setDidDraw]= useState(false);
  const [won,setWon]= useState(false);
  //game set up
  var firstCards = [Array(8).fill(null)]
  while (newDeck.length !==98){
    const num = Math.floor(Math.random() * 99) + 1;
    if (unique.has(num)){
      continue;
    }
    unique.add(num);
    newDeck.push(num);
  }
  for (let i = 0; i < 8; i++) {
    firstCards[i] = newDeck.pop(0);
  }
  const [deck,setDeck] = useState(newDeck);
  const [myCards, setMyCards] = useState(firstCards);
  //game
    return (
      <div className="App">
        {gameOver ? (
        <GameOver 
        won={won}
        placed={placed}
        /> 
      ) : (
        <div>
          <h1 className="App-title">Welcome to The Game!</h1>
          <div>{didDraw}</div>
          <div className="center-play">
            <TheDeck
              deck={deck}
              setDeck={setDeck}
              myCards={myCards}
              setMyCards={setMyCards}
              placed={placed}
              setPlaced={setPlaced}
              didDraw={didDraw}
              setDidDraw={setDidDraw}
            />
            <CenterCard
            topVal={ascendingVal1}
            setTopVal={setAscendingVal1}
            currentCard={currentCard}
            setCurrentCard={setCurrentCard}
            placed={placed}
            setPlaced={setPlaced}
            deck={deck}
            setGameOver={setGameOver}
            setWon={setWon}
            isAscending={true}
            />
            <CenterCard
            topVal={ascendingVal2}
            setTopVal={setAscendingVal2}
            currentCard={currentCard}
            setCurrentCard={setCurrentCard}
            placed={placed}
            setPlaced={setPlaced}
            deck={deck}
            setGameOver={setGameOver}
            setWon={setWon}
            isAscending={true}
            />
            <CenterCard
            topVal={descendingVal1}
            setTopVal={setDescendingVal1}
            currentCard={currentCard}
            setCurrentCard={setCurrentCard}
            placed={placed}
            setPlaced={setPlaced}
            deck={deck}
            setGameOver={setGameOver}
            setWon={setWon}
            isAscending={false}
            />
            <CenterCard
            topVal={descendingVal2}
            setTopVal={setDescendingVal2}
            currentCard={currentCard}
            setCurrentCard={setCurrentCard}
            placed={placed}
            setPlaced={setPlaced}
            setGameOver={setGameOver}
            setWon={setWon}
            isAscending={false}
            />
            <h3> score : {(98-placed)}</h3>
            <h3 className="box"> card : {currentCard}</h3>
          </div>
          <div className="player-cards">
              <PlayerCards 
              myCards={myCards}
              setMyCards={setMyCards}
              currentCard={currentCard}
              setCurrentCard={setCurrentCard}
              setDidDraw={setDidDraw}
              />
          </div>
          </div>
      )}
      </div>
    );
};
export default App;