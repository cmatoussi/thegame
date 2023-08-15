import React from "react";
import { IoArrowDown} from "react-icons/io5";
import { IoArrowUp } from "react-icons/io5";


const CenterCard = ({topVal,setTopVal,currentCard, setCurrentCard,placed,setPlaced,setGameOver,setWon, isAscending}) => {
    const disorder=(((isAscending===true) && (currentCard < topVal)) || ((isAscending ===false) && (currentCard > topVal)));
    function update() {
        if (placed===98){
            setGameOver(true);
            setWon(true);
        }
        if (currentCard!==null){
            if ((disorder) && (Math.abs(currentCard - topVal) !== 10)){
                setGameOver(true);
                setWon(false);
            }
            else {
            setTopVal(currentCard);
            setCurrentCard(null);
            setPlaced(placed+1);
            }
        }
    }
    return (
        <div className="card">
        <div className="iconup">
        {isAscending ? (
            <IoArrowUp  color="red" size="40px"/>
        ):(
            <IoArrowDown color="blue" size="40px"/>
        )}
        </div>
            <div className="card-body"> 
            <button className="transparent-button" onClick={update}>{topVal}</button>
        </div>
        <div className="icondown">
        {isAscending ? (
            <IoArrowUp  color="red" size="40px"/>
        ):(
            <IoArrowDown color="blue" size="40px"/>
        )}
        </div>
        </div> 
    );
};
export default CenterCard;