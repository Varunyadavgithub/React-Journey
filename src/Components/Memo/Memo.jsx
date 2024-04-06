import React, { useState } from 'react'
import NewComp from '../NewComp';

const Memo = () => {

    const[count,setCount]=useState(0);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={()=>{setCount(count+1)}}>Click Me</button>
      <hr />
      <NewComp newCount={count}/>
    </div>
  )
}

export default Memo
