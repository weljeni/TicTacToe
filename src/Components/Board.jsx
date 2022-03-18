import React from 'react';
import "./Board.css"
import Squre from './Squre';

const Board = ({board,click}) => {
    return (
        <div className='board'>
           {
               board.map((squre,i)=>(
                   <Squre 
                   key={i} 
                   value={squre} 
                   onClick={()=>click(i)}/>

               ))

               

              
           }
        </div>
    );
};

export default Board;