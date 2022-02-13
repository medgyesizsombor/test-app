import React, { useState } from "react";

import Select from "react-select";
import counties from "../counties.json";
import Counties from "./Counties";

const CountySelector = () => {
  const [selectedCounty, setSelectedCounty] = useState(null);
  const [selectedCountyId, setSelectedCountyId] = useState(null);

  const options = [
    { value: 0, label: "Bács-Kiskun megye" },
    { value: 1, label: "Zala megye" },
    { value: 2, label: "Vanilla" },
  ];

  const changeHandler = (props) => {
    //console.log(random.counties[0].cities[0].name); //Bács-Kiskun : ["name": "kecskemét"]
    //console.log(random.counties.find((c) => c.cities === "Kecskemét"));
    //array2 = array.filter((c) => c[0] === props.label);
    setSelectedCounty(props.label);
    setSelectedCountyId(props.value);
    console.log(selectedCountyId);
  };

  return (
    <div>
      <h1>{selectedCounty}</h1>
      <Select
        options={options}
        placeholder="Válasszon!"
        defaultValue={options.label}
        onChange={changeHandler}
      />
      {selectedCounty && <Counties county={counties.counties[selectedCountyId].cities} />}
    </div>
  );
};

export default CountySelector;
