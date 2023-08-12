import React, {useState} from 'react';
import './App.css';
import AscendingCard from './components/AscendingCard';
import DescendingCard from './components/DescendingCard';
import PlayerCards from './components/PlayerCards';
import TheDeck from './components/TheDeck';
function App() {
  const unique = new Set();
  const newDeck = []
  const [ascendingVal, setAscendingVal]= useState(0)
  const [descendingVal,setDescendingVal] = useState(100);
  const [currentCard, setCurrentCard]= useState(null);
  const [placed,setPlaced] = useState(0)
  const [didDraw,setDidDraw]= useState(false);
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
    return (
      <div className="App">
          <h1 className="App-title">Welcome to The Game!</h1>
          <h3> score: {(98-placed)}</h3>
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
            <AscendingCard
            ascendingVal={ascendingVal}
            setAscendingVal={setAscendingVal}
            currentCard={currentCard}
            setCurrentCard={setCurrentCard}
            placed={placed}
            setPlaced={setPlaced}
            deck={deck}
            />
            <DescendingCard
            descendingVal={descendingVal}
            setDescendingVal={setDescendingVal}
            currentCard={currentCard}
            setCurrentCard={setCurrentCard}
            placed={placed}
            setPlaced={setPlaced}
            />
            <div className="box"> current card : {currentCard}</div>
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
    );
};
export default App;