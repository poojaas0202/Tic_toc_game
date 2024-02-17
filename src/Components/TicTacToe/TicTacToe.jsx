import React, { useState } from 'react';
import "../TicTacToe/TicTacToe.css";
import circle_icon from "../Assets/circle.png";
import cross_icon from "../Assets/cross.png";

const TicTacToe = () => {
  const [count, setCount] = useState(0);
  const [data, setData] = useState(Array(9).fill(""));
  const [winner, setWinner] = useState(null);

  const toggle = (num) => {
    if (data[num] !== "" || winner || count >= 9) return; // Check if box already filled, game over, or there's a winner
    const newData = [...data];
    newData[num] = count % 2 === 0 ? "x" : "o"; // Alternate between 'x' and 'o'
    setData(newData);
    setCount(count + 1);
    checkWin(newData);
  };

  const checkWin = (currentData) => {
    const winConditions = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
      [0, 4, 8], [2, 4, 6] // Diagonals
    ];

    for (let condition of winConditions) {
      const [a, b, c] = condition;
      if (currentData[a] && currentData[a] === currentData[b] && currentData[b] === currentData[c]) {
        setWinner(currentData[a]); // Set the winner
        return;
      }
    }
  };

  const handleBoxClick = (num) => {
    if (winner || data[num] !== "") return; // If someone has won or box is already filled, do nothing
    toggle(num);
  };

  const handleReset = () => {
    setData(Array(9).fill(""));
    setWinner(null);
    setCount(0);
  };

  return (
    <div className='container'>
      <h1 className='title'>Tic Tac Toe Game in <span>React</span></h1>
      <div className='board'>
        <div className='row1'>
          <div className='boxes' onClick={() => handleBoxClick(0)}>{data[0] === "x" && <img src={cross_icon} alt="cross" className="icon" />}{data[0] === "o" && <img src={circle_icon} alt="circle" className="icon" />}</div>
          <div className='boxes' onClick={() => handleBoxClick(1)}>{data[1] === "x" && <img src={cross_icon} alt="cross" className="icon" />}{data[1] === "o" && <img src={circle_icon} alt="circle" className="icon" />}</div>
          <div className='boxes' onClick={() => handleBoxClick(2)}>{data[2] === "x" && <img src={cross_icon} alt="cross" className="icon" />}{data[2] === "o" && <img src={circle_icon} alt="circle" className="icon" />}</div>
        </div>
        <div className='row2'>
          <div className='boxes' onClick={() => handleBoxClick(3)}>{data[3] === "x" && <img src={cross_icon} alt="cross" className="icon" />}{data[3] === "o" && <img src={circle_icon} alt="circle" className="icon" />}</div>
          <div className='boxes' onClick={() => handleBoxClick(4)}>{data[4] === "x" && <img src={cross_icon} alt="cross" className="icon" />}{data[4] === "o" && <img src={circle_icon} alt="circle" className="icon" />}</div>
          <div className='boxes' onClick={() => handleBoxClick(5)}>{data[5] === "x" && <img src={cross_icon} alt="cross" className="icon" />}{data[5] === "o" && <img src={circle_icon} alt="circle" className="icon" />}</div>
        </div>
        <div className='row3'>
          <div className='boxes' onClick={() => handleBoxClick(6)}>{data[6] === "x" && <img src={cross_icon} alt="cross" className="icon" />}{data[6] === "o" && <img src={circle_icon} alt="circle" className="icon" />}</div>
          <div className='boxes' onClick={() => handleBoxClick(7)}>{data[7] === "x" && <img src={cross_icon} alt="cross" className="icon" />}{data[7] === "o" && <img src={circle_icon} alt="circle" className="icon" />}</div>
          <div className='boxes' onClick={() => handleBoxClick(8)}>{data[8] === "x" && <img src={cross_icon} alt="cross" className="icon" />}{data[8] === "o" && <img src={circle_icon} alt="circle" className="icon" />}</div>
        </div>
      </div>
      {winner && <div className="message">CONGRATULATIONS {winner.toUpperCase()} WON!</div>}
      <button className='reset' onClick={handleReset}>Reset</button>
    </div>
  );
};

export default TicTacToe;
