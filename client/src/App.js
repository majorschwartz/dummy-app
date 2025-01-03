import React, { useState, useEffect } from "react";

const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT;

const App = () => {
    const [number, setNumber] = useState(0);

    const handleGenerate = () => {
        fetch(`${API_ENDPOINT}/hello`)
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
