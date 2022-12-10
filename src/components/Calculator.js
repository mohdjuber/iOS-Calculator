import React from "react";
import { useState } from "react";
import "./style.css";
const Calculator = () => {
  const [num, setNum] = useState(0);
  const [operator, setOperator] = useState();
  const [oldNum, setOldNum] = useState(0);

  const inputNum = (e) => {
    let input = e.target.value;
    num === 0 ? setNum(input) : setNum(num + input);
  };
  const clear = () => setNum(0);
  const changeOperator = () => (num > 0 ? setNum(-num) : setNum(Math.abs(num)));

  const percent = () =>
  setNum(num / 100 );

  const handleOperator = (e) => {
    let operatorInput = e.target.value;
    setOperator(operatorInput);
    setOldNum(num);
    setNum(0);
  };

  const calculate = () => {
    if (operator === "/") {
      setNum(parseFloat(oldNum) / parseFloat(num));
    } else if (operator === "X") {
      setNum(parseFloat(oldNum) * parseFloat(num));
    } else if (operator === "-") {
      setNum(parseFloat(oldNum) - parseFloat(num));
    } else if (operator === "+") {
      setNum(parseFloat(oldNum) + parseFloat(num));
    }
  };

  return (
    <div className="box">
      <h1 className="result">{num}</h1>
      <button onClick={clear} value="AC">
        AC
      </button>
      <button className="" onClick={changeOperator} value="-/+">
        -/+
      </button>
      <button className="" onClick={percent} value="%">
        %
      </button>
      <button className="orangebtn" onClick={handleOperator} value="/">
        /
      </button>
      <button className="leftbtn" onClick={inputNum} value="1">
        1
      </button>
      <button className="leftbtn" onClick={inputNum} value="2">
        2
      </button>
      <button className="leftbtn" onClick={inputNum} value="3">
        3
      </button>
      <button className="orangebtn" onClick={handleOperator} value="X">
        X
      </button>
      <button className="leftbtn" onClick={inputNum} value="4">
        4
      </button>
      <button className="leftbtn" onClick={inputNum} value="5">
        5
      </button>
      <button className="leftbtn" onClick={inputNum} value="6">
        6
      </button>
      <button className="orangebtn" onClick={handleOperator} value="-">
        -
      </button>
      <button className="leftbtn" onClick={inputNum} value="7">
        7
      </button>
      <button className="leftbtn" onClick={inputNum} value="8">
        8
      </button>
      <button className="leftbtn" onClick={inputNum} value="9">
        9
      </button>
      <button className="orangebtn" onClick={handleOperator} value={"+"}>
        +
      </button>
      <button className="hiddenbtn"> + </button>
      <button className="leftbtn" onClick={inputNum} value="0">
        0
      </button>
      <button className="leftbtn" onClick={inputNum} value=".">
        ,
      </button>
      <button className="orangebtn" onClick={calculate}>
        =
      </button>
    </div>
  );
};
export default Calculator;
