import React from "react";
import { IoArrowDown} from "react-icons/io5";

const DescendingCard = ({descendingVal,setDescendingVal,currentCard, setCurrentCard,placed,setPlaced}) => {
    function update() {
        if (placed===98){
            window.alert('you won :)!');
        }
        if (currentCard!==null){
            if ((currentCard > descendingVal) && (Math.abs(currentCard - descendingVal) !== 10)){
                const score = 98-placed;
                window.alert(`you lost :/ your score is : ${score}`);
            }
            else {
            setDescendingVal(currentCard);
            setCurrentCard(null);
            setPlaced(placed+1);
            }
        }
    }
    return (
        <div className="card">
        <div className="iconup">
        <IoArrowDown  color="blue" size="40px"/>
        </div>
        <div className="card-body"> 
            <button className="transparent-button" onClick={update}>{descendingVal}</button>
        </div>
        <div className="icondown">
        <IoArrowDown color="blue" size="40px"/>
        </div>
        </div> 
    );
};
export default DescendingCard;