import React, {useState} from "react";


function App() {
    const [user, setUser] = useState('');
    const [randomNumber, setRandomNumber] = useState(0);

    const generateRandomNumber = () => {
        const randomNum = Math.floor(Math.random() * 100) + 1;
        setRandomNumber(randomNum);
    };

    return (
        <div>
            <button onClick={generateRandomNumber}>Random Sayı Üret</button>
            {randomNumber}
        </div>
    );
}

export default App;
