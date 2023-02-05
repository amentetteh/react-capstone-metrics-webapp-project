import logger from 'redux-logger';
import { configureStore } from '@reduxjs/toolkit';
import countriesReducer from './countries/countriesSlice';
import airPollutionInfosReducer from './airpollution/airPollutionInfosSlice';

const store = configureStore({
  reducer: {
    countries: countriesReducer,
    infos: airPollutionInfosReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
