import React from "react"
export default function Form({isLoggedIN, setIsLoggedIn})
{

  return<div>
    <h1>Parent Componenet</h1>
    <label for="username">Username:</label>
    <input id="username" type="text"></input><br/><br/>
    <label for="password">Password:</label>
    <input id="password" type="password"></input><br/><br/>
    <button onClick={()=>{
    setIsLoggedIn(!isLoggedIN)
  }}>Login</button>
  </div> 
}
