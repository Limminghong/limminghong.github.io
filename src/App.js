import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Main from "./components/main.jsx";
import NavBar from "./components/navbar.jsx";

function App() {
  return (
    <div>
      <NavBar />
      <Main />
    </div>
  );
}

export default App;
