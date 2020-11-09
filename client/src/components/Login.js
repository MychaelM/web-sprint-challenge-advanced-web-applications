import React, { useState } from "react";
import axios from 'axios';

const Login = (props) => {
  const [formData, setFormData] = useState({
    username: "",
    password: ""
  });

  const changeHandler = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  };

  const login = (e) => {
    e.preventDefault();
    axios
      .post(`http://localhost:5000/api/login`, { username: 'Lambda School', password: 'i<3Lambd4' })
      .then(res => {
        console.log(res);
        localStorage.setItem("token", res.data.payload);
        props.history.push("/bubblespage");
      })
      .catch(err => {
        console.log(err);
      });
    setFormData({
      username: "",
      password: ""
    })
  }
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <form onSubmit={login}>
        {/* <label htmlFor="username">Username: </label> */}
        <input 
        type="text"
        name="username"
        id="username"
        placeholder="Username"
        value={formData.username}
        onChange={changeHandler}
        />
      <br/>

      {/* <label htmlFor="password">Password: </label> */}
        <input 
        type="password"
        name="password"
        id="password"
        placeholder="Password"
        value={formData.password}
        onChange={changeHandler}
        />
      <br/>

      <button>Login</button>
      </form>
    </>
  );
};

export default Login;
