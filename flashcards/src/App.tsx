import { useState } from "react";
import "./App.css";
import Hiragana from "./components/Hiragana";

function App() {
  return (
    <>
      <div className="w-full">
        <div className="sm:w-full md:max-w-md">
          <Hiragana />
        </div>
      </div>
    </>
  );
}

export default App;
