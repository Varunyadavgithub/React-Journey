import React, { useState } from "react";

const Form = () => {
  // const[name,setName]=useState("")
  // const[email,setEmail]=useState("")
  // const[password,setPassword]=useState("")

  const [formdata, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleInput=(e)=>{
        const {name,value}=e.target;
        setFormData({...formdata,[name]:value
        })
  }

//   const handleName = (e) => {
//     console.log(e.target.value);
//     setName(e.target.value);
//   };
//   const handleEmail = (e) => {
//     console.log(e.target.value);
//     setEmail(e.target.value);
//   };
//   const handlePassword = (e) => {
//     console.log(e.target.value);
//     setPassword(e.target.value);
//   };

    const handleSubmit=(e)=>{
        e.preventDefault();
    }
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={formdata.name} onClick={handleInput} />
      </label>
      <label>
        Email:
        <input type="text" name="email" value={formdata.email} onClick={handleInput} />
      </label>
      <label>
        Password:
        <input type="text" name="password" value={formdata.password} onClick={handleInput} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
