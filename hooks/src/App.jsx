
import { useState } from 'react';
import './App.css'
function App() {
  let [count, setCount]=useState(0)
  // let count = 10;
  const valueAdd = () => {
    count = count + 1;
    setCount(count)
  }

  const decreaseValue = () => {
    count = count - 1;
    if (count <= 0) {
      count = 0;
    }
    setCount(count)
    
  }
  return (
    <>
      <h1>value :{count}</h1>
      <button type="button" onClick={valueAdd }>increment : { count}</button> <br /> <br />
      <button type="button" onClick={decreaseValue}>decrement : {count}</button>

    </>
  )
}

export default App
