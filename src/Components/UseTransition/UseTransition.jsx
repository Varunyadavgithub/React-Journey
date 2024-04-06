import React, { useState, useTransition } from "react";

const UseTransition = () => {
  const [name, setName] = useState("");
  const [lists, setLists] = useState([]);

  const [isPanding, startTransition] = useTransition();

  const LIST_SIZE = 2000;

  const handleChange = (e) => {
    const { value } = e.target;
    setName(value);

    startTransition(() => {
      const dataList = [];
      for (let i = 0; i < LIST_SIZE; i++) {
        dataList.push(value);
      }
      setLists(dataList);
    });
  };

  return (
    <div>
      <input type="text" value={name} onChange={handleChange} key="input" />
      {
        isPanding?(<div>Loading...</div>):lists.map((list, index) => {
            return <div key={index}> {list}</div>;
        })
      }
    </div>
  );
};

export default UseTransition;
