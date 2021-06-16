import React, { useState, useEffect } from "react";

const Calculator = () => {
  
  const [num1, setNum1] = useState("")
  const [num2, setNum2] = useState("")
  const [operator, setOperator] = useState("+")
  const [answer, setAnswer] = useState("")
  const [error, setErrors] = useState("")

  const clear = (e) => {
    e.preventDefault()
    setNum1("")
    setNum2("")
    setOperator("+")
    setAnswer("")
    setErrors("")
  }

  const findAnswer = (e) => {
    e.preventDefault()
    if (num1 === "" || num2 === "") {
      setErrors('Select Two Numbers')
      return
    }
    switch(operator){
      case "+":
        setAnswer(parseInt(num1) + parseInt(num2))
        break
      case "-":
        setAnswer(num1 - num2)
        break
      case "x":
        setAnswer(num1 * num2)
        break
      case "/":
        setAnswer(num1 / num2)
        break
      default:
        setAnswer("")
    }
  }

  useEffect(() => {

  }, [num1, num2, operator, answer])

  return (
  <div className="calculator">
    <div data-testid="name">Calculator</div>

    <div data-testid="display" className="display">{answer}</div>

    <div className="number-inputs">
      <input 
        data-testid="num1" 
        id="num1" 
        type="number"
        value={num1}
        onChange={e => setNum1(e.target.value)}></input>
      <div data-testid="selected-operation">{operator}</div>
      <input 
        data-testid="num2" 
        id="num2" 
        type="number"
        value={num2}
        onChange={e => setNum2(e.target.value)}></input>
    </div>

    <div className="operation-selectors">
      <button data-testid="add" onClick={e => setOperator("+")}>+</button>
      <button data-testid="sub" onClick={e => setOperator("-")}>-</button>
      <button data-testid="mul" onClick={e => setOperator("x")}>x</button>
      <button data-testid="div" onClick={e => setOperator("/")}>/</button>
    </div>

    <div className="options">
      <button data-testid="clear" className="clear" onClick={e => clear(e)}>
      Clear
      </button>
      <button data-testid="calc" onClick={e => findAnswer(e)}>Calculate</button>
    </div>

    <div data-testid="error" id="error" className="error">
      {error ? error : null}
    </div>
  </div>
  );
};

export default Calculator;