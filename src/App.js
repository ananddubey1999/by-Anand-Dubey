import React, { useState } from "react";
import LoginPage from "./LoginPage";
import Navbar from "./Navbar";
import CardListComponent from "./CardListComponent";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <div>
      <Navbar/>
      {isLoggedIn ? (
        
        <CardListComponent />
      ) : (
        <LoginPage handleLogin={handleLogin} />
      )}
    </div>
  );
};

export default App;
