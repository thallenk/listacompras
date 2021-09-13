import React, { useState } from "react";
import { useSelector, useDispatch} from 'react-redux'
import { subtract, sum } from "../store/Calculator/Calculator.action";

function Calculator() {
    const dispatch = useDispatch()
    const result = useSelector(state => state.calculator)

    const [a, setA] = useState()
    const[b, setB] = useState()

  return (
    <>
      <input 
      type="number" 
      placeholder="a"
      value={a}
      onChange={(e) => setA(Number(e.target.value))} />

      <input 
      type="number"
      placeholder="b"
      value={b}
      onChange={(e) => setB(Number(e.target.value))} />
      <button
      onClick={()=> dispatch(sum(a,b))}>somar</button>
      <button
      onClick={()=> dispatch(subtract(a,b))}>subtrair</button>

      <div>{result}</div>
    </>
  );
}


export default Calculator
