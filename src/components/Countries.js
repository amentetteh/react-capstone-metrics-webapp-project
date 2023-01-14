import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { fetchCountries } from '../redux/countries/countriesSlice';

const Countries = () => {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries.countries);
  // const { id } = useParams();
  // const reg = id ? id.toLowerCase() : 'africa';
  const [region, setRegion] = useState('africa');
  useEffect(() => {
    if (countries.length === 0) {
      dispatch(fetchCountries(region));
    }
  }, [dispatch, countries.length, countries.refresh, region]);

  const handleRegionChange = (e) => {
    e.preventDefault();
    setRegion(e.target.value.toLowerCase());
  };

  return (
    <div className="country-container">
      {countries.loading && <div className="loading" />}
      {!countries.loading && countries.error && (
        <div className="error">
          Error:
          {countries.error}
        </div>
      )}
      {!countries.loading && countries.length && (
        <>
          <header>
            {/* <img src={banner} alt="banner" /> */}
            <div className="search-field">
              <select className="searchField" name="selected" onChange={handleRegionChange} defaultValue={region}>
                <option value="Asia"> Asia</option>
                <option value="Oceania">Oceania </option>
                <option value="Europe"> Europe </option>
                <option value="Americas"> Americas</option>
                <option value="Africa"> Africa</option>
              </select>
              <FontAwesomeIcon className="App-backtohome" icon={faSearch} onClick={() => { dispatch(fetchCountries(region)); }} />
            </div>
          </header>
          <ul className="country-list">
            {countries.map((country) => (
              <li className="country-item" key={nanoid()}>
                <NavLink
                  to={`/pollution/${country.latlng};${
                    country.name.common
                  };${country.altSpellings[0].toLowerCase()};${country.population}`}
                >
                  {country.name.common}
                  {country.capital}
                  {country.languages.eng}
                  <img src={country.flags.png} alt="Country Flag" />
                </NavLink>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};
export default Countries;
