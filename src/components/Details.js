import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getAirPollutionInfos } from '../redux/airpollution/airPollutionInfosSlice';
import airRiskRate from '../Util/Util';

function Details() {
  const dispatch = useDispatch();
  const params = useParams();
  const { infos, loading } = useSelector((state) => state.infos);
  const paramsArray = params.id.split(';');
  const cord = paramsArray[0].split(',');
  const countryName = paramsArray[1];
  const countryCode = paramsArray[2];
  const countryFlag = `https://flagcdn.com/w320/${countryCode}.png`;
  const countryPopulation = paramsArray[3];
  const { aqi, data } = infos;
  const airQuality = airRiskRate(aqi);
  useEffect(() => {
    if (infos.length === 0) {
      dispatch(getAirPollutionInfos(cord));
    }
  }, [dispatch, infos]);// eslint-disable-line react-hooks/exhaustive-deps
  return (
    <>
      {loading && <div className="loading" />}
      {!loading && data && (
      <>
        <div className="pd-details">
          <div className="hero">
            <img src={countryFlag} alt="Flag" />
            <h2>
              Country :
              {countryName}
            </h2>
            <h2>
              Population :
              {countryPopulation}
            </h2>
          </div>
          <div className="details">
            <h2>
              Air Pollution Details:
            </h2>
            <ul>
              <li>
                <span> Carbon monoxide (CO) </span>
                <span>{ data.co }</span>
              </li>
              <li>
                <span>
                  Ammonia ( NH
                  <sub>3</sub>
                  )
                </span>
                <span>{ data.nh3 }</span>
              </li>
              <li>
                <span>
                  Nitrogen monoxide (NO)
                </span>
                <span>{ data.no }</span>
              </li>
              <li>
                <span>
                  Nitrogen dioxide (NO
                  <sub>2</sub>
                  )
                </span>
                <span>{ data.no2 }</span>
              </li>
              <li>
                <span>
                  Ozone (O
                  <sub>3</sub>
                  )
                </span>
                <span>{ data.pm2_5 }</span>
              </li>
              <li>
                <span>
                  {' '}
                  Fine particles matter(PM2_5)
                  {' '}
                </span>
                <span>{ data.pm10 }</span>
              </li>
              <li>
                <span>
                  {' '}
                  Coarse particulate matter (PM_10)
                  {' '}
                </span>
                <span>{ data.pm10 }</span>
              </li>
              <li>
                <span>
                  {' '}
                  Sulphur dioxide (SO2)
                  {' '}
                </span>
                <span>{ data.so2 }</span>
              </li>
            </ul>
            <span>{ airQuality }</span>
          </div>
        </div>
      </>
      )}
    </>
  );
}

export default Details;
