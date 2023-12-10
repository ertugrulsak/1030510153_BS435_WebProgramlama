import React, {useState} from "react";
import "./game.css";

function App() {

    const [randomNumber, setRandomNumber] = useState(0);

    const generateRandomNumber = () => {
        const randomNum = Math.floor(Math.random() * 100) + 1;
        setRandomNumber(randomNum);
    };

    return (
        <div className="game-container">
            <button className="random-button" onClick={generateRandomNumber}>Random Sayı Üret</button> <br/>
            <p className="show-number">{randomNumber}</p>
        </div>
    );
}

export default App;
