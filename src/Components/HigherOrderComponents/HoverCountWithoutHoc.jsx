import React, { useState } from 'react'

const HoverCountWithoutHoc = () => {
  // Logic to increse Counter...
    const[count,setCount]=useState(0);
    const incrementCount=()=>{
        setCount(count+1);
    }
  return (
    <div>
      <button onMouseOver={incrementCount}>Hover {count}</button>
    </div>
  )
}

export default HoverCountWithoutHoc
