
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <div className="app">
      <h1>{isLoggedIn ? "Welcome, User!" : "Please Log In"}</h1>
      {!isLoggedIn && <LoginForm onLogin={handleLogin} />}
    </div>
  );
};

export default App;


