import { useState, useEffect } from "react";
import "../style.css";

const HUMAN = 1; // X
const AI = 2;    // O

const empty = () => [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];

const TicTacToe = ({ hideMessage }) => {
  const [board, setBoard] = useState(empty());
  const [isPlayerTurn, setIsPlayerTurn] = useState(true);
  const [message, setMessage] = useState("Player 1's Turn!");
  const [gameOver, setGameOver] = useState(false);

  const resetGame = () => {
    setBoard(empty);
    setIsPlayerTurn(true);
    setMessage("Player 1's Turn!");
    setGameOver(false);
  };

  // Listen for reset from Projects.js
  useEffect(() => {
    const handler = () => resetGame();
    window.addEventListener("reset-tictactoe", handler);
    return () => window.removeEventListener("reset-tictactoe", handler);
  }, []);
  // ---------- helpers ----------
  const winnerOf = (b) => {
    // rows
    for (let r = 0; r < 3; r++) {
      if (b[r][0] && b[r][0] === b[r][1] && b[r][1] === b[r][2]) return b[r][0];
    }
    // cols
    for (let c = 0; c < 3; c++) {
      if (b[0][c] && b[0][c] === b[1][c] && b[1][c] === b[2][c]) return b[0][c];
    }
    // diags
    if (b[0][0] && b[0][0] === b[1][1] && b[1][1] === b[2][2]) return b[0][0];
    if (b[0][2] && b[0][2] === b[1][1] && b[1][1] === b[2][0]) return b[0][2];
    return null;
  };

  const movesLeft = (b) => b.some((row) => row.some((v) => v === 0));

  // Minimax: returns score from AI's perspective
  const minimax = (b, depth, isMax) => {
    const w = winnerOf(b);
    if (w === AI) return 10 - depth;     // prefer faster wins
    if (w === HUMAN) return depth - 10;  // prefer slower losses
    if (!movesLeft(b)) return 0;         // tie

    if (isMax) {
      let best = -Infinity;
      for (let r = 0; r < 3; r++) {
        for (let c = 0; c < 3; c++) {
          if (b[r][c] === 0) {
            b[r][c] = AI;
            best = Math.max(best, minimax(b, depth + 1, false));
            b[r][c] = 0;
          }
        }
      }
      return best;
    } else {
      let best = Infinity;
      for (let r = 0; r < 3; r++) {
        for (let c = 0; c < 3; c++) {
          if (b[r][c] === 0) {
            b[r][c] = HUMAN;
            best = Math.min(best, minimax(b, depth + 1, true));
            b[r][c] = 0;
          }
        }
      }
      return best;
    }
  };

  const bestAIMove = (b) => {
    let bestScore = -Infinity;
    let move = null;

    for (let r = 0; r < 3; r++) {
      for (let c = 0; c < 3; c++) {
        if (b[r][c] === 0) {
          b[r][c] = AI;
          const score = minimax(b, 0, false);
          b[r][c] = 0;

          // tie-breaker: prefer center, then corners, then edges (optional polish)
          const pref =
            (r === 1 && c === 1 ? 0.001 : (r % 2 === 0 && c % 2 === 0 ? 0.0005 : 0));
          if (score + pref > bestScore) {
            bestScore = score + pref;
            move = { r, c };
          }
        }
      }
    }
    return move;
  };

  // ---------- interactions ----------
  const handleClick = (r, c) => {
    if (gameOver || !isPlayerTurn || board[r][c] !== 0) return;

    const next = board.map((row) => [...row]);
    next[r][c] = HUMAN;
    setBoard(next);

    const w = winnerOf(next);
    if (w === HUMAN) {
      setMessage("Player 1 Wins!");
      setGameOver(true);
      return;
    }
    if (!movesLeft(next)) {
      setMessage("It's a Tie!");
      setGameOver(true);
      return;
    }

    setIsPlayerTurn(false);
    setMessage("AI's Turn...");
    setTimeout(() => aiTurn(next), 450);
  };

  const aiTurn = (current) => {
    const b = current.map((row) => [...row]);
    const move = bestAIMove(b);
    if (!move) return; // safety

    b[move.r][move.c] = AI;
    setBoard(b);

    const w = winnerOf(b);
    if (w === AI) {
      setMessage("AI Wins!");
      setGameOver(true);
      return;
    }
    if (!movesLeft(b)) {
      setMessage("It's a Tie!");
      setGameOver(true);
      return;
    }

    setIsPlayerTurn(true);
    setMessage("Player 1's Turn!");
  };

  // ---------- render ----------
  return (
    <div className="tic-tac-toe">
      {!hideMessage && <p className="message">{message}</p>}  
      <div className="tic-tac-grid">
        {board.map((row, r) =>
          row.map((cell, c) => (
            <button
              key={`${r}-${c}`}
              className="tic-tac-cell"
              onClick={() => handleClick(r, c)}
            >
              {cell === HUMAN ? "X" : cell === AI ? "O" : ""}
            </button>
          ))
        )}
      </div>
    </div>
  );
};

export default TicTacToe;
