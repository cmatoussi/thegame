import React from "react";
const PlayerCards = ({myCards, setMyCards,currentCard,setCurrentCard, setDidDraw}) => {
    const placeCard = (key) => {
        if(currentCard ===null){
        const updatedArray = [...myCards];
        setCurrentCard(updatedArray[key])
        updatedArray[key] = null;
        setMyCards(updatedArray);
        setDidDraw(false);
        }
      };
    return (
        <div className="player-cards">
            {myCards.map((num,index) => (
            <div className="normal-card">
                <div className="card-body">
                    <button className="transparent-button" key={index} onClick={() => placeCard(index)}>{num}</button> 
                </div>
            </div> 
            ))}
        </div>
    );
};
export default PlayerCards;