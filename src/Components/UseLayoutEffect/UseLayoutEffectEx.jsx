import React, { useEffect, useLayoutEffect } from 'react'

const UseLayoutEffectEx = () => {

  

  useLayoutEffect(()=>{
    console.log("Hello from useLayoutEffect");
  })

  useEffect(()=>{
    console.log("Hello from useEffect");
  })

  return (
    <div>
      
    </div>
  )
}

export default UseLayoutEffectEx
