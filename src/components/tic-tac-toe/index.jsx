import {useEffect, useState} from "react";
import "./styles.css";
// 1 2 3
// 4 5 6


const Cell = ({value, onClick}) => {

    return <button onClick={onClick} className={"cell"}>{value}</button>
}
const TicTacToe = () => {
    const [cells, setCells] = useState(Array(9).fill(""));
    const [isXTurn, setIsXTurn] = useState(true);
    const [status, setStatus] = useState("");

    const getWinner = (cells) => {
        const winConditions = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
            [1, 4, 7], [0, 3, 6], [2, 5, 8], // columns
            [0, 4, 8], [2, 4, 6] // diagonals
        ];

        for (let i = 0; i < winConditions.length; i++) {
            const [x, y, z] = winConditions[i];

            if (cells[x] && cells[x] === cells[y] && cells[x] === cells[z]) {
                return cells[x];
            }
        }
        return null;
    }
    const handleClick = (getCurrentCell) => {
        let cpyCells = [...cells];
        if (getWinner(cpyCells) || cpyCells[getCurrentCell] !== "") return;
        cpyCells[getCurrentCell] = isXTurn ? "X" : "O";
        setIsXTurn(!isXTurn);
        setCells(cpyCells);
    }

    const handleRestart = () => {
        setIsXTurn(true);
        setCells(Array(9).fill(""));
    }

    useEffect(() => {
        // if (!getWinner(cells) && cells.every((item) => item !== "")) {
        //     setStatus(`This is a draw ! Please restart the game`);
        // } else if (getWinner(cells)) {
        //     setStatus(`Winner is ${getWinner(cells)}. Please restart the game`);
        // } else {
        //     setStatus(`Next player is ${isXTurn ? "X" : "O"}`);
        // }
        if (getWinner(cells)) {
            setStatus(`Winner is ${getWinner(cells)}. Please restart the game`);
        } else if (!cells.includes("")) {
            setStatus("It's a draw. Please restart the game");
        } else {
            setStatus(`Next player: ${isXTurn ? "X" : "O"}`);
        }

    }, [cells, isXTurn]);

    return (
        <div className={"tic-tac-toe-container"}>
            <h1>Tic Tac Toe</h1>
            <div className={"tic-tac-toe-row"}>
                <Cell value={cells[0]} onClick={() => handleClick(0)} />
                <Cell value={cells[1]} onClick={() => handleClick(1)} />
                <Cell value={cells[2]} onClick={() => handleClick(2)} />
            </div>
            <div className={"tic-tac-toe-row"}>
                <Cell value={cells[3]} onClick={() => handleClick(3)} />
                <Cell value={cells[4]} onClick={() => handleClick(4)} />
                <Cell value={cells[5]} onClick={() => handleClick(5)} />
            </div>
            <div className={"tic-tac-toe-row"}>
                <Cell value={cells[6]} onClick={() => handleClick(6)} />
                <Cell value={cells[7]} onClick={() => handleClick(7)} />
                <Cell value={cells[8]} onClick={() => handleClick(8)} />
            </div>
            <h1>{status}</h1>
            <button onClick={handleRestart}>Restart</button>
        </div>
    )
};

export default TicTacToe;