import React, { useReducer } from "react";

const initialState = {
  data: [],
  loading: false,
  error: null,
};

function reducer(state, action) {
  // console.log(state, action);

  switch (action.type) {
    case "FETCH_DATA_START":
      return { ...state, loading: true };
    case "FETCH_DATA_SUCCESS":
      return { loading: false, error: null, data: action.payload };
    case "FETCH_DATA_FAILURE":
      return { ...state, loading: false, error: action.payload };
    case "DELETE_DATA":
      return {
        ...state,
        data: state.data.filter((item) => item.id !== action.payload),
      };
    case "ADD_DATA":
      return {...state,data:[...state.data,action.payload]}
  }
}

const UseReducerEx = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchData = async () => {
    dispatch({ type: "FETCH_DATA_START" });

    try {
      const responce = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = await responce.json();
      dispatch({ type: "FETCH_DATA_SUCCESS", payload: data });
      // console.log(data);
    } catch (error) {
      dispatch({ type: "FETCH_DATA_FAILURE", payload: error.message });
    }
  };

  const deleteData = (id) => {
    dispatch({ type: "DELETE_DATA", payload: id });
  };

  const addData=(newData)=>{
    dispatch({type:"ADD_DATA",payload:newData})
  };

  return (
    <div>
      <button onClick={fetchData}>Fetch Data</button>
      {state.loading && <p>Loading...</p>}
      {state.error && <p>Error:{state.error}</p>}
      <ul>
        {state.data.map((item) => {
          return (
            <li key={item.id}>
              {item.title}{" "}
              <button onClick={() => deleteData(item.id)}>Del</button>
            </li>
          );
        })}
      </ul>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          addData({ id: Date.now(), title: e.target.value });
        }}
      >
        <input type="text" name="title" placeholder="Add new item" />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default UseReducerEx;
