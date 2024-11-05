import "./App.css";
import React, { useState } from "react";

const App = () => {
  const [input, setInput] = useState("");

  const handleButtonClick = (value) => {
    if (value === "C") {
      setInput("");
    } else if (value === "=") {
      try {
        setInput(eval(input).toString());
      } catch (error) {
        setInput("Error");
      }
    } else if (value === "<") {
      setInput(input.slice(0, -1));
    } else if (value === "sin") {
      setInput(Math.sin(toRadians(parseFloat(input))).toString());
    } else if (value === "cos") {
      setInput(Math.cos(toRadians(parseFloat(input))).toString());
    } else if (value === "tan") {
      setInput(Math.tan(toRadians(parseFloat(input))).toString());
    } else if (value === "sqrt") {
      setInput(Math.sqrt(parseFloat(input)).toString());
    } else if (value === "log") {
      setInput(Math.log10(parseFloat(input)).toString());
    } else if (value === "ln") {
      setInput(Math.log(parseFloat(input)).toString());
    } else if (value === "^") {
      setInput(input + "**");  // Using JavaScript exponentiation operator
    } else {
      setInput(input + value);
    }
  };

  // Helper function to convert degrees to radians
  const toRadians = (angle) => angle * (Math.PI / 180);

  return (
    <div className="container">
      <div className="calc">
        <h1 id="input">{input}</h1>
        <div>
          <button onClick={() => handleButtonClick("C")}>C</button>
          <button onClick={() => handleButtonClick("<")}>&lt;</button>
          <button onClick={() => handleButtonClick("%")}>%</button>
          <button onClick={() => handleButtonClick("/")}>/</button>
        </div>
        <div>
          <button onClick={() => handleButtonClick("7")}>7</button>
          <button onClick={() => handleButtonClick("8")}>8</button>
          <button onClick={() => handleButtonClick("9")}>9</button>
          <button onClick={() => handleButtonClick("*")}>*</button>
        </div>
        <div>
          <button onClick={() => handleButtonClick("4")}>4</button>
          <button onClick={() => handleButtonClick("5")}>5</button>
          <button onClick={() => handleButtonClick("6")}>6</button>
          <button onClick={() => handleButtonClick("-")}>-</button>
        </div>
        <div>
          <button onClick={() => handleButtonClick("1")}>1</button>
          <button onClick={() => handleButtonClick("2")}>2</button>
          <button onClick={() => handleButtonClick("3")}>3</button>
          <button onClick={() => handleButtonClick("+")}>+</button>
        </div>
        <div>
          <button onClick={() => handleButtonClick("0")}>0</button>
          <button onClick={() => handleButtonClick("00")}>00</button>
          <button onClick={() => handleButtonClick(".")}>.</button>
          <button onClick={() => handleButtonClick("=")}>=</button>
        </div>
        {/* Scientific calculator buttons */}
        <div>
          <button onClick={() => handleButtonClick("sin")}>sin</button>
          <button onClick={() => handleButtonClick("cos")}>cos</button>
          <button onClick={() => handleButtonClick("tan")}>tan</button>
          <button onClick={() => handleButtonClick("sqrt")}>√</button>
        </div>
        <div>
          <button onClick={() => handleButtonClick("log")}>log</button>
          <button onClick={() => handleButtonClick("ln")}>ln</button>
          <button onClick={() => handleButtonClick("^")}>^</button>
          <button onClick={() => handleButtonClick("(")}>(</button>
          <button onClick={() => handleButtonClick(")")}>)</button>
        </div>
      </div>
    </div>
  );
};

export default App;


