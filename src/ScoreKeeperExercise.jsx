import { useState } from 'react';

export default function ScoreKeeperExercise({ numPlayers = 3, target = 5 }) {
    // Initialize scores for each player
    const [scores, setScores] = useState(Array(numPlayers).fill(0));
    const [gameOver, setGameOver] = useState(false);
    const [winner, setWinner] = useState(null);

    // Function to increase score for a specific player
    const increaseScore = (index) => {
        if (gameOver) return; //sotp if game is over

        setScores((prevScores) => {
            const newScores = prevScores.map((score, i) => (i === index ? score + 1 : score))
            if (newScores[index] >= target) {
                setGameOver(true);
                setWinner(index);
            }
            return newScores;
        });
    };

     //update all elements and make them all 0
     const reset = () => {
        setScores(Array(numPlayers).fill(0));
        setGameOver(false);
        setWinner(null);
    }

    return (
        <div>
            <ul>
                {scores.map((score, index) => (
                    <li key={index}>
                        Player {index + 1}: {score}/{target}
                        <button onClick={() => increaseScore(index)}>+1</button>
                        {winner === index && <span> - WINNER!</span>}
                    </li>
                ))}
            </ul>
            <button onClick={reset}>Reset</button>
        </div>
    );
}