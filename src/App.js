import React, { useState, useEffect } from "react";

import countiesJSON from "./test.json";
import {
  getLocalStrorage,
  updateLocalStorage,
} from "./utils/localStorageUtils";
import City from "./components/City";

function App() {
  const [currentCounty, setCurrentCounty] = useState("");
  const [showCities, setShowCities] = useState(false);
  const [counties, setCounties] = useState({});
  const [disableButton, setDisableButton] = useState(true);

  useEffect(() => {
    let countiesLS = getLocalStrorage("counties");
    if (!countiesLS) {
      updateLocalStorage("counties", countiesJSON);
      countiesLS = getLocalStrorage("counties");
    }

    setCounties(countiesLS);
  }, []);

  const renderCities = () => {
    const { cities } = counties[currentCounty];
    return cities.map((city) => <City cities={cities} key={city} city={city} />);
  };

  const handleSelect = (event) => {
    setShowCities(false);
    if (event.target.value) {
      setCurrentCounty(event.target.value);
      setDisableButton(false);
    } else {
      setDisableButton(true);
    }
  };

  const handleSubmit = () => {
    setShowCities(true);
  };

  return (
    <div>
      <h2>Let's get started!</h2>
      <select
        selected={currentCounty}
        value={currentCounty}
        onChange={handleSelect}
      >
        <option disabled value="">
          Válassz
        </option>
        {Object.keys(counties).map((county) => (
          <option key={county} value={county}>
            {county}
          </option>
        ))}
      </select>
      <button onClick={handleSubmit} disabled={disableButton}>submit</button>
      {showCities && renderCities()}
    </div>
  );
}


export default App;
