
import React, { useState, useContext } from 'react'
import humanTurn from "../helper/turn"
import { store, ACTIONS } from "../Controller"

const Cell = ({ field, coordinates, belongsTo }) => {
    const [shot, setShot] = useState(false);
    const { state, dispatch } = useContext(store);
    const player = state.players.player;
    const ai = state.players.ai;

    const handleShot = () => {
        if ( shot === false){
            dispatch({type: ACTIONS.RESET_Message})
            humanTurn(player, ai, coordinates, dispatch);
            setShot(true)
        }
    }
    
    if(belongsTo === "Human"){
    return (
        
        <div className={`cell ${field.hasShip ? "shipCell" : "waterCell"}`}>
         {field.isHitted && <div className="shotCell">{field.hasShip ? "X" : "•"}</div>}
        </div> 
        
    )} else {
        return (
            <div onClick={handleShot} className={`cell`}>
         {field.isHitted && <div className={`${field.hasShip ? "shipCell" : "waterCell"} shotCell`}>{field.hasShip ? "X" : "•"}</div>}
        </div> 
        )
    }
}


export default Cell
