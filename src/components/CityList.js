import React from "react";

import CityItem from "./CityItem";

const CityList = (props) => {
  console.log(props.city)
  if (props.city.length === 0) {
    return (
      <div>
        <h2>Nincs város még hozzáadva</h2>
      </div>
    );
  } else {
    return (
      <ul>
        {props.city.map((c) => (
          <CityItem key={c.name} name={c.name} />
        ))}
      </ul>
    );
  }
};

export default CityList;
