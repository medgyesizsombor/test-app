import React from "react";

import CityList from "./CityList";
import "./Counties.css";

const Counties = (props) => {
  console.log(props.county);
  /*let array = Object.entries(counties);
  let array2 = array.filter(p => p[0] === props.county)
  console.log(array2[1])*/
  return (
      <CityList city={props.county} />
  );
};

export default Counties;
