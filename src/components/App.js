
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [isLoggedIn,setIsLoggedIn] = useState(false);
  return (
    <div>
      <h1>Parent Componenet</h1>
      {!isLoggedIn ? <Form isLoggedIN={isLoggedIn} setIsLoggedIn = {setIsLoggedIn}></Form> : <p>You are logged in!</p> }
      
    </div>
  )
}

function Form({isLoggedIN, setIsLoggedIn})
{
  return<div>   
    <label for="username">Username:</label>
    <input id="username" type="text"></input><br/><br/>
    <label for="password">Password:</label>
    <input id="password" type="password"></input><br/><br/>
    <button onClick={()=>{
    setIsLoggedIn(!isLoggedIN)
  }}>Login</button>
  </div> 
}

export default App


