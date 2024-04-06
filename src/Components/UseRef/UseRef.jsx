import React, { useEffect, useState } from 'react'
import { useRef } from 'react'

const UseRef = () => {
  // syntex :-
  // const reference = useRef(5)
  // console.log(reference)
  
  const [userInput,setUserInput]=useState("");
  // const [render,setRender]=useState(0);
  const renders=useRef(0);

  // useEffect(()=>{
  //   setRender(render+1);
  // })
  useEffect(()=>{
    renders.current=renders.current+1;
  })

  return (
    <div>
      <input type="text" value={userInput} onChange={(e)=>{setUserInput(e.target.value)}}/>
      <p>The component rendered {renders.current} time</p>
    </div>
  )
}

export default UseRef
