import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import { getLocalStorage, updateLocalStorage } from "../utils/localStorageUtils";

const City = ({ city, cities }) => {
  const [currentCities, setCurrentCities] = useState(cities);
  const [updatingCity, setUpdatingCity] = useState(false);
  const [name, setName] = useState(city);
  const [changedName, setChangedName] = useState("");


  const handleUpdate = () => {
    setUpdatingCity(true);
    setChangedName("");
  };

  const handleNotUpdate = () => {
    setUpdatingCity(false);
    setName(name);
  };

  const handleNameChanging = (event) => {
    event.preventDefault();
    setName(changedName);
    console.log(city)
    let ls = localStorage.getItem('counties');
  };

  const handleUpdateNameOfCity = (event) => {
    setChangedName(event.target.value);
    console.log(event.target.value);
  };

  const handleDelete = () => {
    let newCities = currentCities.filter((cities) => cities !== city);
    setCurrentCities(newCities);
    console.log(newCities);
  };

  return (
    <div>
      <h2>{name}</h2>
      {!updatingCity && <button onClick={handleUpdate}>Változtatás</button>}
      {updatingCity && <button onClick={handleNotUpdate}>Mégse</button>}
      <button onClick={handleDelete}>Törlés</button>
      {updatingCity && (
        <form>
          <label>
            Üsd be a város új nevét:
            <input
              type="text"
              value={changedName}
              onChange={handleUpdateNameOfCity}
            ></input>
          </label>
          <button onClick={handleNameChanging}>Változtatás</button>
        </form>
      )}
    </div>
  );
};

City.propTypes = {
  city: PropTypes.string.isRequired,
  cities: PropTypes.array.isRequired,
};

export default City;
