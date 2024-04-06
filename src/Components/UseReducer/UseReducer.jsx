import React, { useReducer } from 'react'


// reducer is a pure function
const reducer=(state,action)=>{
    // console.log(state,action);
    if(action.type=="inc"){
        return {count:state.count+1}
    }
    else if(action.type=="dec"){
        return {count:state.count-1};
    }else{
        throw new Error('Unsupported action Type');
    }
}

const UseReducer = () => {
    const [state,dispatch]=useReducer(reducer,{count:0});


    const handleInc=()=>{
        dispatch({type:"inc"});    
    }
    const handleDec=()=>{
        dispatch({type:"dec"})
    }
  return (
    <div>
      <h1>{state.count}</h1>
      <button onClick={handleDec}>-</button>
      <button onClick={handleInc}>+</button>
    </div>
  )
}

export default UseReducer
