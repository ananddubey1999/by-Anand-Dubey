import React, { useState } from "react";
import LoginPage from "./LoginPage";
import TableComponent from "./TableComponent";
import Navbar from "./Navbar";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <div>
      <Navbar/>
      {isLoggedIn ? (
        
        <TableComponent />
      ) : (
        <LoginPage handleLogin={handleLogin} />
      )}
    </div>
  );
};

export default App;
