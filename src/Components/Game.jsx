import React,{useState} from 'react';
import Board from './Board';
import './Game.css'
import {xando} from "../Logic"

const Game = () => {
    const[board,setboard] = useState(Array(9).fill(null))
    const[xIsNext,setXIsNext] = useState(true)
    const winner= xando(board)

    const handleClick = (index)=>{
        const bordCopy= [...board]
        if (winner|| bordCopy[index]){
            return
        }
        bordCopy[index] = xIsNext?'X':'O'
        setboard(bordCopy)
        setXIsNext(!xIsNext)


    }
    const startNewGame=()=>{
        return(
            <button className='start__btn' onClick={() => setboard(Array(9).fill(null))}>Сlear</button>
        )
    }
    function reset(){
        return <p>So far no one has won</p>
        
    }

    return (
        <div className='wrapper'>
            <p className='text'>Tic-Tac-Toe Game</p>
            <p className='game'>Now move at{xIsNext?  ' X' : ' O'}</p>
            {startNewGame()}
            <Board click={handleClick} board={board}  />
            <p className='game'>
                {winner? 'Winner is'+winner : reset()}
                
            </p> 
            
            
            
        </div>
    );
};

export default Game;