import React from "react";

const CityItem = (props) => {
  console.log(props.name);
  return(
  <li >
    <div >
      <h2>{props.name.toString()}</h2>
    </div>
    <div>
      <button>MÓDOSÍTÁS</button>
      <button >TÖRLÉS</button>
    </div>
  </li>);
};

export default CityItem;
