import React, { useState, useEffect } from "react";

const App = () => {
    const [number, setNumber] = useState(0);

    const handleGenerate = () => {
        fetch("http://127.0.0.1:5000/hello")
            .then((response) => response.json())
            .then((data) => setNumber(data));
    }

    useEffect(() => {
        handleGenerate();
    }, []);

    return (
        <div className="App">
            <h1>Dummy Application</h1>
            <p>Random number: {number}</p>
            <button onClick={handleGenerate}>Generate</button>
        </div>
    );
}

export default App;
