import './App.css';
import React,{useState} from "react";



function App() {
  const [result,setResult]=useState("");
  const [ans , setAns]=useState(" ");
  function clickHandler(e){
    setResult(result + e.target.value);
  }
  function inputHandler(e){
    setResult(e.target.value)
  }
  function clearHandler(){
    setResult("");
    setAns("");
  }
  function equalHandler(){
    try{
      // eslint-disable-next-line no-eval
      setAns(eval(result))
    }
    catch(e){
      setAns("error")
    }
  }
  function keyHandler(e){
    if(e.key === 'Enter' ){
      equalHandler();
    }
  }

  return (
    <div className="main">
      <div className="app">
          <input type="text" className="input" value={result} onChange={inputHandler} autoFocus onKeyPress={keyHandler}></input>
          
      </div>
      <div className="ansdiv">{ans}</div>
      <div className="container">
      <div className="row">
          <button className="col light" onClick={clearHandler}>C</button>
          <button className="col light"  onClick={clickHandler}>+/-</button>
          <button className="col light" value="%" onClick={clickHandler}>%</button>
          <button className="col dark" value="/" onClick={clickHandler}>÷</button>
      </div>
      <div className="row">
          <button className="col" value="7" onClick={clickHandler}>7</button>
          <button className="col" value="8" onClick={clickHandler}>8</button>
          <button className="col" value="9" onClick={clickHandler}>9</button>
          <button className="col dark" value="*" onClick={clickHandler}>x</button>
      </div>
      <div className="row">
          <button className="col" value="4" onClick={clickHandler}>4</button>
          <button className="col" value="5" onClick={clickHandler}>5</button>
          <button className="col" value="6" onClick={clickHandler}>6</button>
          <button className="col dark"  value="-" onClick={clickHandler}>-</button>
      </div>
      <div className="row">
          <button className="col" value="1" onClick={clickHandler}>1</button>
          <button className="col" value="2" onClick={clickHandler}>2</button>
          <button className="col" value="3" onClick={clickHandler}>3</button>
          <button className="col dark" value="+" onClick={clickHandler}>+</button>
      </div>
      <div className="row">
          <button className="col" value="0" onClick={clickHandler}>0</button>
          <button className="col"  ></button>
          <button className="col" value="." onClick={clickHandler}>.</button>
          <button className="col equal" onClick={equalHandler}>=</button>
      </div>

      </div>  
    </div>
  );
}

export default App;
