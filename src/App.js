import React from "react";
import Pokegame from "./components/Pokegame";
import "./App.css";

function App() {
  return (
    <div className="App">
      {console.log("inside App")}
      <Pokegame />
    </div>
  );
}

export default App;
