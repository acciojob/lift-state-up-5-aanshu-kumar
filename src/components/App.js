import React from "react";
import { useState } from "react";
import LoginForm from "./LoginForm.js";
import "./../styles/App.css";

const App = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);
  return (
    <div id="parent-component" className="app-container">
      <h1 className="app-title">Parent Component</h1>
      <LoginForm isLoggedIn={isLoggedIn} setLoggedIn={setLoggedIn} />
    </div>
  );
};

export default App;
