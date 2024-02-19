import { useEffect, useState } from "react";
import "./styles.css";

const Cell = ({ value, onClick }) => (
    <button onClick={onClick} className="cell">
        {value}
    </button>
);

const TicTacToe = () => {
    const [cells, setCells] = useState(Array(9).fill(""));
    const [isXTurn, setIsXTurn] = useState(true);
    const [status, setStatus] = useState("");

    const winConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [1, 4, 7],
        [0, 3, 6],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    const getWinner = () => {
        for (let i = 0; i < winConditions.length; i++) {
            const [x, y, z] = winConditions[i];

            if (cells[x] && cells[x] === cells[y] && cells[x] === cells[z]) {
                return cells[x];
            }
        }
        return null;
    };

    const handleClick = (index) => {
        if (getWinner() || cells[index] !== "") return;

        const updatedCells = [...cells];
        updatedCells[index] = isXTurn ? "X" : "O";
        setIsXTurn(!isXTurn);
        setCells(updatedCells);
    };

    const handleRestart = () => {
        setIsXTurn(true);
        setCells(Array(9).fill(""));
    };

    useEffect(() => {
        const winner = getWinner();
        const isDraw = !cells.includes("");

        if (winner) {
            setStatus(`Winner is ${winner}. Please restart the game`);
        } else if (isDraw) {
            setStatus("It's a draw. Please restart the game");
        } else {
            setStatus(`Next player: ${isXTurn ? "X" : "O"}`);
        }
    }, [cells, isXTurn]);

    return (
        <div className="tic-tac-toe-container">
            <h1>Tic Tac Toe</h1>
            {[0, 3, 6].map((start, row) => (
                <div key={row} className="tic-tac-toe-row">
                    {[0, 1, 2].map((col) => (
                        <Cell
                            key={start + col}
                            value={cells[start + col]}
                            onClick={() => handleClick(start + col)}
                        />
                    ))}
                </div>
            ))}
            <h1>{status}</h1>
            <button onClick={handleRestart}>Restart</button>
        </div>
    );
};

export default TicTacToe;
