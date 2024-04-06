// import React from 'react'
import { useEffect, useState } from 'react';

const UseFetch = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://api.github.com/users')
        .then(response => response.json())
        .then(data => setUsers(data))
        .catch(error => console.error(error));
    }, []);

  return [users];
}

export default UseFetch
