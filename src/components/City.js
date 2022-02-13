import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";
import { updateLocalStorage } from "../utils/localStorageUtils";

const City = ({ city, counties, setCounties, currentCounty }) => {
  const [name, setName] = useState(city);
  const [cityText, setCityText] = useState(true);

  const handleCancel = (event) => {
    event.preventDefault();
    setCityText(true);
    setName(city);
  };

  const handleCityUpdate = (event) => {
    event.preventDefault();
    console.log(name, "name");
    if (!name) return;
    const newCounties = { ...counties };

    const newCities = newCounties[currentCounty].cities.map((c) => {
      console.log(c);
      if (c === city) {
        return name;
      }
      return c;
    });

    newCounties[currentCounty].cities = newCities;

    setCounties(newCounties);
    updateLocalStorage("counties", newCounties);
    setCityText(true);
  };

  //Form submission canceled because the form is not connected

  const handleDelete = () => {
    const newCounties = { ...counties };
    const newCities = newCounties[currentCounty].cities.filter(
      (c) => c !== city
    );

    newCounties[currentCounty].cities = newCities;

    setCounties(newCounties);
    updateLocalStorage("counties", newCounties);
    setCityText(true);
  };

  return (
    <div>
      {cityText && <h2 onClick={() => setCityText(false)}>{city}</h2>}
      {!cityText && (
        <>
          <input
            type="text"
            value={name}
            onChange={({ target }) => setName(target.value)}
            placeholder={city}
          ></input>
          <button onClick={handleDelete}>Törlés</button>
          <button onClick={handleCityUpdate}>Módosít</button>
          <button onClick={handleCancel}>Mégsem</button>
        </>
      )}
    </div>
  );
};

City.propTypes = {
  city: PropTypes.string.isRequired,
  counties: PropTypes.object.isRequired,
  setCounties: PropTypes.func.isRequired,
  currentCounty: PropTypes.string.isRequired,
};

export default City;
