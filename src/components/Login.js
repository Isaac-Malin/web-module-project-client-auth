import React from "react";
import { useState } from "react";
import { useNavigate } from 'react-router-dom'
import axios from "axios";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate()

  const [cred, setCreds] = useState({
    username: "",
    password: ""
  });

  const handleChanges = (e) => {
    setCreds({
      ...cred,
      [e.target.name]: e.target.value
    })
  };

  const handleSumbit = (e) => {
    e.preventDefault()
    axios
      .post('http://localhost:9000/api/login', cred)
      .then(res => {
        localStorage.setItem('token', res.data.token)
        navigate('/friends')
      })
      .catch(err => {
        console.log(err);
      })
  }

  return (
    <>
      <form className="login-form" onSubmit={handleSumbit}>
        <label className="credential-label" htmlFor="username">
          USERNAME
        </label>
        <br />
        <input 
          className="credentials" 
          type="text"
          name="username"
          onChange={handleChanges}
        />
        <br />
        <label className="credential-label" htmlFor="password">
          PASSWORD
        </label>
        <br />
        <input 
          className="credentials" 
          type="password" 
          name="password"
          onChange={handleChanges}
        />
        <br />
        <button>Submit</button>
      </form>
    </>
  );
};

export default Login;
