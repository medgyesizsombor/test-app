import React, { useState } from "react";
import PropTypes from "prop-types";

import { updateLocalStorage } from "../utils/localStorageUtils";
import "./City.css";

const City = ({ city, counties, setCounties, currentCounty }) => {
  const [name, setName] = useState(city);
  const [cityAsText, setCityAsText] = useState(true);

  const handleCancelUpdate = (event) => {
    event.preventDefault();
    setCityAsText(true);
    setName(city);
  };

  const handleCityUpdate = (event) => {
    event.preventDefault();
    if (!name) return;
    const newCounties = { ...counties };

    const newCities = newCounties[currentCounty].cities.map((c) => {
      if (c === city) {
        return name;
      }
      return c;
    });

    newCounties[currentCounty].cities = newCities;

    setCounties(newCounties);
    updateLocalStorage("counties", newCounties);
    setCityAsText(true);
  };

  const handleDelete = () => {
    const newCounties = { ...counties };
    const newCities = newCounties[currentCounty].cities.filter(
      (c) => c !== city
    );

    newCounties[currentCounty].cities = newCities;

    setCounties(newCounties);
    updateLocalStorage("counties", newCounties);
    setCityAsText(true);
  };

  return (
    <div className="city-container">
      {cityAsText && <p onClick={() => setCityAsText(false)}>{city}</p>}

      {!cityAsText && (
        <>
          <input
            className="city-container__input"
            type="text"
            value={name}
            onChange={({ target }) => setName(target.value)}
            placeholder={city}
          ></input>
          <div>
            <button
              className="button--default button--danger"
              onClick={handleDelete}
            >
              Törlés
            </button>
            <button
              className="button--default button--inverse"
              onClick={handleCityUpdate}
            >
              Módosít
            </button>
            <button
              className="button--default button--cancel"
              onClick={handleCancelUpdate}
            >
              Mégsem
            </button>
          </div>
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
