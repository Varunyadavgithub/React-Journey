import React, { useState } from 'react'
import './form.css'
const FormValidation = () => {
  const [name,setName]=useState('');
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const [confirmPassword,setConfirmPassword]=useState('');
  const [age,setAge]=useState('');
  const [gender,setGender]=useState('');
  const [errors,setErrors]=useState('');


  const validateForm=()=>{
    const errors={};

    // for name
    if(!name){
      errors.name='Name is required';
    }

    // for email
    if(!email){
      errors.email='Email is required';
    }
    else if(!/\S+@\S+\.\S+/.test(email)){
      errors.email='Email is invalid';
    }

    // for password
    if(!password){
      errors.password='Password is required';
    }
    else if(password.length<6){
      errors.password='Password must be 6 digits';
    }
    // for confirm password
    if(!confirmPassword){
      errors.confirmPassword='Confirm password is required';
    }
    else if(password!==confirmPassword){
      errors.confirmPassword='Password do not match';
    }
    // fro age
    if(!age){
      errors.age='Age is required';
    }
    else if(isNaN(age) || age<18){
      errors.age='Age must be a number and at least 18'
    }
    // for gender
    if(!gender){
      errors.gender='Gender is required';
    }

    console.log(errors);
    return errors;
  }

  function handleSubmit(e){
    e.preventDefault();

    const ValidationErrors=validateForm();

    // check if any error is happend of not 
    if(Object.keys(ValidationErrors).length>0){
      setErrors(ValidationErrors);
    }
    else{
      console.log("Form submited")
    }
  }

  return (
    <div className='container'>
      <h1>Form Validation</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
          <span>{errors.name}</span>
        </div>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
          <span>{errors.email}</span>
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
          <span>{errors.password}</span>
        </div>
        <div>
          <label>Confirm Password:</label>
          <input type="password" value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)}/>
          <span>{errors.confirmPassword}</span>
        </div>
        <div>
          <label>Age:</label>
          <input type="text" value={age} onChange={(e)=>setAge(e.target.value)}/>
          <span>{errors.age}</span>
        </div>
        <div>
          <label>Gender:</label>
          <select value={gender} onChange={(e)=>setGender(e.target.value)}>
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select><span>{errors.gender}</span>
        </div>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default FormValidation
