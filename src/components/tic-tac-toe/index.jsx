import {useState} from "react";
import "./styles.css";


const Cell = ({value, onClick}) => {

    return <button onClick={onClick} className={"cell"}>{value}</button>
}
const TicTacToe = () => {
    const [cells, setCells] = useState(Array(9).fill(""));
    const [isXTurn, setIsXTurn] = useState(true);

    const handleClick = (getCurrentCell) => {
        let cpyCells = [...cells];
        cpyCells[getCurrentCell] = isXTurn ? "X" : "O";
        setIsXTurn(!isXTurn);
        setCells(cpyCells);
    }
    console.log(cells);

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
        </div>
    )
};

export default TicTacToe;