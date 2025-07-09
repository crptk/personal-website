import React, { useEffect } from 'react';
import './TicTacToe.css'; // create this and copy game-related styles

const TicTacToe = () => {
  useEffect(() => {
    // All your game.js logic goes here inside useEffect
  }, []);

  return (
    <div className="gameContainer">
      <h3 id="turn">Player 1 turn!</h3>
      <div className="gameGrid">
        {Array.from({ length: 9 }).map((_, i) => (
          <div className="cell" key={i}></div>
        ))}
      </div>
    </div>
  );
};

export default TicTacToe;
