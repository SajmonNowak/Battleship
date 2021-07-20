import React from 'react'
import GameoverModal from './style/GameoverModal'
import { ACTIONS } from '../Controller';

const GameoverWindow = ({ winner, dispatch }) => {

    const restartGame = () => {
        dispatch({
            type: ACTIONS.RESTART_GAME
        })
    }

    return (
        <GameoverModal>
            <div>{winner} wins</div>
            <button onClick={restartGame}>Restart</button>
        </GameoverModal>
            
    )
}

export default GameoverWindow
