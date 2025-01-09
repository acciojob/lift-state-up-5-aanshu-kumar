
import React, { useState } from "react";
import './../styles/App.css';
import Form from "./Form"

const App = () => {
  const [isLoggedIn,setIsLoggedIn] = useState(false);
  return (
    <div>
      <h1>Parent Componenet</h1>
      {!isLoggedIn ? <Form isLoggedIN={isLoggedIn} setIsLoggedIn = {setIsLoggedIn}></Form> : <p>You are logged in!</p> }
      
    </div>
  )
}

export default App


