import React from "react";
const TheDeck = ({deck, setDeck, myCards, setMyCards,placed,setPlaced, didDraw, setDidDraw}) => {
    function draw() {
        var nulls = 0
        for (let i = 0; i < 8; i++) {
            if (myCards[i]===null){
                nulls+=1;
            }
        }
        if ((deck.length!==0)&&((nulls>=2)||(didDraw ===true))){
            const updatedArray = [...myCards];
            for (let i = 0; i < 8; i++) {
                if (updatedArray[i]=== null){
                    const num = deck[0]
                    const newDeck = deck.filter((_, i) => i !== 0);
                    setDeck(newDeck);
                    updatedArray[i]= num;
                    setMyCards(updatedArray);
                    setDidDraw(true);
                    break;
                }       
            }
        }
      }
    return (
        <div className="deck">
           <div className="deck-body"> 
            <button className="transparent-button" onClick={draw} >draw</button>
            </div>
        </div>

    );
};
export default TheDeck;