import React, { useEffect, useRef } from 'react'

const UseRefDOM = () => {
    const inputEl=useRef(null);

    const handleFocus=()=>{
        inputEl.current.style.backgroundColor='blue';
    }
    const handleBlur=()=>{ 
        inputEl.current.style.backgroundColor='red';
    }

  return (
    <div>
      <input ref={inputEl} type="text" onFocus={handleFocus} onBlur={handleBlur}/>
    </div>
  )
}

export default UseRefDOM
