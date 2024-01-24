import React, { useEffect, useState } from "react";
import './Tictac.css';
import pattern from "./pattern";


export default function Tictac(){
    const intial =['','','','','','','','','']
    const [board, setBoard] = useState([...intial])
    const [player, setPlayer]= useState('x')
    const [lastIdx, setLastidx]= useState(-1)

    const changeTile=(idx)=>{
        if( board[idx] !=='') return
        setLastidx(idx);
        setBoard( board=>{
            return board.map((val, i)=>{
                if(i===idx) return player;
                return val ;
            })
        })
       setPlayer(player=== 'x'? 'o': 'x')
    };
       const checkWin =()=>{
        if(lastIdx <0) return;
        const checkArr = pattern[lastIdx]
        const prevPlayer= player ==='x'? 'o': 'x';
        checkArr.forEach(arr=> {
            if(board[arr[0]]=== prevPlayer && board[arr[1]]=== prevPlayer && board[arr[2]]=== prevPlayer){
                alert(`${prevPlayer} won the game`)
                reset();
            }}
    );
       };
       const reset= ()=>{
        setBoard([...intial])
        setPlayer("x");
        setLastidx(-1)
       }
       useEffect(()=>{checkWin();},[board]);
   

    return(
        <>
        
        <div className="board"> {
            board.map( (sq,i) => {
                return<div className="board__tiles" onClick={() => changeTile(i)}>{sq}</div>
            })
        }</div>
        <p>Current Player is: {player}</p>
       <button onClick={reset}>Reset</button>
        </>
    )
}