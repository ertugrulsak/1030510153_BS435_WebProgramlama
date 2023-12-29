import React, { useState } from "react";
import "./game.css";

function App() {
    const [randomNumber, setRandomNumber] = useState(generateRandomNumber());
    const [userInput, setUserInput] = useState("");
    const [message, setMessage] = useState("");
    const [test , setTest] = useState(1);

    function generateRandomNumber() {
        return Math.floor(Math.random() * 100) + 1;
    }

    const handleInputChange = (event) => {
        setUserInput(event.target.value);
    };

    const handleGuess = () => {
        const userGuess = parseInt(userInput, 10);

        if (isNaN(userGuess)) {
            setMessage("Geçerli bir sayı girin.");
        } else {
            setTest((prevTest) => prevTest + 1);

            if (userGuess === randomNumber) {
                setMessage(`Tebrikler! Doğru tahmin ettiniz.Toplam ${test+1} denemede bildiniz.`);
            } else if (userGuess < randomNumber) {
                setMessage("Daha yüksek bir sayı girin.");
            } else {
                setMessage("Daha düşük bir sayı girin.");
            }
        }
    };

    const handleRestart = () => {
        setRandomNumber(generateRandomNumber());
        setUserInput("");
        setMessage("");
        setTest(0);
    };

    return (
        <div className="game-container">
            <h3>SAYI TAHMİN OYUNU</h3>

            <input
                className="form-field"
                type="text"
                value={userInput}
                onChange={handleInputChange}
                placeholder="Sayı tahmininizi girin"
            />

            <h3>{message}</h3>
            <button className="random-button" onClick={handleGuess}>Tahmin et</button>
            <button className="random-button" onClick={handleRestart}>Yeniden Başlat</button>

            <br />
            {/*<p className="show-number">{randomNumber}</p>*/}
        </div>
    );
}

export default App;
