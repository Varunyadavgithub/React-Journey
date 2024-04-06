import React, { useState, useMemo, useCallback } from "react";

const UseMemo = () => {
  const [count, setCount] = useState(0);

  const result = useCallback(function slowFunction() {
    let sum = 0;
    for (let i = 0; i <= 100000; i++) {
      sum += i;
    }
    console.log("Hello i m slow function");
    return sum;
  }, []);

  return (
    <div>
      <h1>{count}</h1>
      <br />
      <button onClick={() => setCount(count + 1)}>Click Me</button>
      <hr />
      {console.log(result())}
    </div>
  );
};

export default UseMemo;
