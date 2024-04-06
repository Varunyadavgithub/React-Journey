import React, { useState } from 'react'

const withCounter = (OriginalComponent) => {

    const EnhencedComponent=()=>{
        // Logic to increse counter...
        const[count,setCount]=useState(0);
        const incrementCount=()=>{
            setCount(count+1);
        }
        return (
            <OriginalComponent incrementCount={incrementCount} count={count}/>
        )
    }

  return EnhencedComponent;
}

export default withCounter
