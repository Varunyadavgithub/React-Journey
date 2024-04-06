import React, { useState } from "react"
const App = () => {
  const [count, setCount]=useState(0);
  // console.log(useState("hello"))
  // console.log(count)
  // console.log(setCount)
  const incres=()=>{
    setCount(count+1);
  }
  const decres=()=>{
    setCount(count-1);
  }
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={decres}>-</button>
      <hr />
      <button onClick={incres}>+</button>
    </div>
  )
}
export default App
