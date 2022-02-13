import { useState, useEffect, Fragment } from "react";

import countiesJSON from "./counties.json";
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
  const [newCityName, setNewCityName] = useState("");

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
    return (
      <Fragment>
        {cities.map((city) => (
          <City 
            key={city} 
            counties={counties} 
            setCounties={setCounties} 
            currentCounty={currentCounty} 
            city={city} 
          />
        ))}
        <form>
          <h2>Egy új város:</h2>
          <input type="text" value={newCityName} onChange={({ target }) => setNewCityName(target.value)} />
          <button onClick={handleNewCity}>Hozzáadás</button>
        </form>
      </Fragment>
    );
  };

  const handleNewCity = (event) => {
    const newCounties = {...counties};
    const { cities } = newCounties[currentCounty];
    event.preventDefault();
    cities.push(newCityName);
    

    updateLocalStorage("counties", counties);
    setCounties(newCounties);
    setNewCityName('');
  }

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
          Válasszon
        </option>
        {Object.keys(counties).map((county) => (
          <option key={county} value={county}>
            {county}
          </option>
        ))}
      </select>
      <button onClick={handleSubmit} disabled={disableButton}>
        submit
      </button>
      {showCities && renderCities()}
    </div>
  );
}

export default App;
