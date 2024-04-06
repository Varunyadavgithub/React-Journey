// import React, { useEffect, useState } from "react";
import UseFetch from "./UseFetch";

const CustomHook = () => {
  
  const [users] = UseFetch();
  console.log(users);

  return (
    <div>
      <h1>Users List</h1>
      <ul>
        {users.map((user) => {
          return <li key={user.id}>
            {user.id}
            <a href={user.html_url}>{user.login}</a>
          </li>;
        })}
      </ul>
    </div>
  );
};

export default CustomHook;
