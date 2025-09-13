import React, { useState } from "react";
import './Calculator.css'; 

 function Calculator() {
  const [display, setDisplay] = useState("");

  const appendValue = (value) => {
    setDisplay((prev) => prev + value);
  };

  const clearDisplay = () => {
    setDisplay("");
  };

  const calculateResult = () => {
    try {
      
      setDisplay(eval(display).toString());
    } catch (e) {
      alert("Invalid Expression");
    }
  };

  return (
    <div className="calculator">
      <input type="text" value={display} readOnly />
      <div className="buttons">
        <button onClick={clearDisplay}>C</button>
        <button onClick={() => appendValue("/")}>/</button>
        <button onClick={() => appendValue("*")}>*</button>
        <button onClick={() => appendValue("-")}>-</button>
        <button onClick={() => appendValue("7")}>7</button>
        <button onClick={() => appendValue("8")}>8</button>
        <button onClick={() => appendValue("9")}>9</button>
        <button onClick={() => appendValue("+")}>+</button>
        <button onClick={() => appendValue("4")}>4</button>
        <button onClick={() => appendValue("5")}>5</button>
        <button onClick={() => appendValue("6")}>6</button>
        <button onClick={calculateResult}>=</button>
        <button onClick={() => appendValue("1")}>1</button>
        <button onClick={() => appendValue("2")}>2</button>
        <button onClick={() => appendValue("3")}>3</button>
        <button onClick={() => appendValue("0")}>0</button>
        <button onClick={() => appendValue(".")}>.</button>
      </div>
    </div>
  );
}
    
export default Calculator