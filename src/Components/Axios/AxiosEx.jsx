import React, { useEffect, useState } from "react";
import axios from "axios";

const AxiosEx = () => {
  const [data, setData] = useState([]);
  const [name, setName] = useState("");

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => setData(response.data))
      .catch((error) => {
        console.log("Error while fetching Data: ");
      });
  }, []);

  function handleChange(e) {
    setName(e.target.value);
  }
  const newItem = { id: Date.now(), title: name, body: name };
  function handleSubmit(e) {
    e.preventDefault();

    axios
      .post("https://jsonplaceholder.typicode.com/posts", newItem)
      .then((response) => setData([...data, response.data]))
      .catch((error) => {
        console.log("Error while adding data", error);
      });
      setName(" ")
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={name} onChange={handleChange} />
        <button type="submit">Add</button>
      </form>
      {data.map((item) => (
        <div key={item.id}>{item.title}</div>
      ))}
    </div>
  );
};

export default AxiosEx;
