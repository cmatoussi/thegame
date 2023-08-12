import React from "react";
const NormalCard = ({myCards, setMyCards,}) => {
    const placeCard = (key) => {
        const updatedArray = [...myCards];
        updatedArray[key] = null;
        setMyCards(updatedArray);
        console.log(myCards,key)
      };
    return (
        <div>
            {myCards.map((num,index) => (
                    <button  key={index} onClick={() => placeCard(index)}>{num}</button> 
            ))};
        </div>
    );
};
export default NormalCard;