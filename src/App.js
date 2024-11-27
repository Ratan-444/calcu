import React, { useState } from "react";
import "./App.css"; // Add styles if necessary

const App = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleInput = (e) => {
    setInput(input + e.target.value);
  };

  const clearInput = () => {
    setInput("");
    setResult("");
  };

  const calculateResult = () => {
    try {
      // Safely evaluate the input using Function constructor
      const evalResult = Function(`"use strict"; return (${input})`)();
      setResult(evalResult);
    } catch (error) {
      setResult("Error");
    }
  };

  return (
    <div className="App">
      <h1>Simple Calculator</h1>
      <div className="calculator">
        <input
          type="text"
          value={input}
          placeholder="Enter calculation"
          readOnly
        />
        <div className="result">Result: {result}</div>
        <div className="buttons">
          <div className="digits">
            {["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "."].map(
              (digit) => (
                <button key={digit} value={digit} onClick={handleInput}>
                  {digit}
                </button>
              )
            )}
          </div>
          <div className="operators">
            {["+", "-", "*", "/"].map((operator) => (
              <button key={operator} value={operator} onClick={handleInput}>
                {operator}
              </button>
            ))}
          </div>
          <div className="actions">
            <button onClick={clearInput}>Clear</button>
            <button onClick={calculateResult}>=</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
