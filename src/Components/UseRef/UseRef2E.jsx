import React, { useEffect, useRef, useState } from 'react'

const UseRef2E = () => {
    // const [count,setCount]=useState(0);
    const count=useRef(0);

    useEffect(()=>{
        console.log("The component have been rendered");
    })

    const handle=()=>{
        // setCount(count+1);
        count.current=count.current+1;
        console.log(`Clicked ${count.current} times`);
    }
  return (
    <div>
        <button onClick={handle}>Click Me</button>
    </div>
  )
}

export default UseRef2E
