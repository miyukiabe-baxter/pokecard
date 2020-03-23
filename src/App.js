import React from "react";
import Pokegame from "./components/Pokegame";
import "./App.css";
import NumberGame from "./components/NumberGame";

function App() {
  return (
    <div className="App">
      <NumberGame maxNum={10} />
      <Pokegame />
    </div>
  );
}

export default App;
