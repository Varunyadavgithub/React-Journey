import React from 'react'
import { useRef } from 'react'

const UserRefE3 = () => {
    const focusPoint=useRef(null);

    const handleAction=()=>{
        focusPoint.current.value="My self Varun Yadav.";
        focusPoint.current.style.color='blue';

        focusPoint.current.focus();
    }
  return (
    <div>
      <button onClick={handleAction}>Action</button>
      <p>Click on the Action to focus and populate the text.</p>
      <textarea ref={focusPoint}/>
    </div>
  )
}

export default UserRefE3
