import React from "react";

import Cities from "./components/Cities";
import CountySelector from "./components/CountySelector";

function App() {
  let array = [];
  let array2 = [];


  return (
    <div>
      <h2>Let's get started!</h2>
      <div>
        <Cities />

        <CountySelector />
      </div>
    </div>
  );
}

export default App;
