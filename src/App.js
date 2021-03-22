import React from "react";
import "./stylesheets/App.css";
import "./stylesheets/Calculator.css";
import "./components/Hook";

// comment in the below line if you'd prefer to use hooks for this project
// import Calculator from './components/Hook';
import Calculator from "./components/Class";

const App = () => {
  return (
    <div className="App">
      <header>
        <img src="logo-full.png" className="logo" alt="App Academy" />
        <p>Exit Exam: React</p>
      </header>
      <Calculator />
      <footer>
        <p>Review the instructions in the README.</p>
      </footer>
    </div>
  );
};

export default App;