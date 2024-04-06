import React, { useEffect, useState } from "react";

const UseEffect = () => {
  const [clicked, setClicked] = useState();
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("We r in use State");

    // Clean up
     return(
        ()=>{
            console.log("return of use State")
        }
     )
  }, [clicked, count]);

  return (
    <div>
      <button
        onClick={() => {
          setClicked("Subscribe");
        }}
      >
        Subscribe
      </button>
      <br />
      <hr />
      <button
        onClick={() => {
          setClicked("To");
        }}
      >
        To
      </button>
      <br />
      <hr />
      <button
        onClick={() => {
          setClicked("DropXoUT");
        }}
      >
        DropXoUT
      </button>
      <h1>{clicked}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increment
      </button>
      <h1>{count}</h1>
    </div>
  );
};

export default UseEffect;
