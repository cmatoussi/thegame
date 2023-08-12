import React from "react";
import { IoArrowUp } from "react-icons/io5";

const AscendingCard = ({ascendingVal, setAscendingVal,currentCard, setCurrentCard,placed, setPlaced}) => {
    function update() {
        if (placed===98){
            window.alert('you won :)!');
        }
        if (currentCard!==null){
            if ((currentCard < ascendingVal) && (Math.abs(currentCard - ascendingVal) !== 10)){
                const score = 98-placed;
                window.alert(`you lost :/ your score is : ${score}`);            }
            else{
            setAscendingVal(currentCard)
            setCurrentCard(null)
            setPlaced(placed+1)
            }
        }
    }
    return (
        <div className="card">
        <div className="iconup">
        <IoArrowUp  color="red" size="40px"/>
        </div>
        <div className="card-body">
            <button className="transparent-button" onClick={update}>{ascendingVal}</button>
        </div>
        <div className="icondown">
        <IoArrowUp color="red" size="40px"/>
        </div>
        </div> 
    );
};
export default AscendingCard;