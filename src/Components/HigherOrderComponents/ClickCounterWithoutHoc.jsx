import React, { useState } from 'react'

const ClickCounterWithoutHoc = () => {
  // Logic to increse counter...
    const[count,setCount]=useState(0);
    const incrementCount=()=>{
        setCount(count+1);
    }
  return (
    <div>
      <button onClick={incrementCount}>Clicked {count}</button>
    </div>
  )
}

export default ClickCounterWithoutHoc
