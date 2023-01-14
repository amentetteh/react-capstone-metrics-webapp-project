import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const GET_AQI_INFOS = 'react-capstone-metrics-webapp-project/redux/airpollution/GET_AQI_INFOS';
const url = 'http://api.openweathermap.org/data/2.5/air_pollution?';
const initialState = {
  loading: false,
  infos: [],
  error: '',
  refresh: false,
};

export const getAirPollutionInfos = createAsyncThunk(GET_AQI_INFOS, async (geocoord) => {
  const response = await fetch(`${url}lat=${geocoord[0]}&lon=${geocoord[1]}&appid=${process.env.REACT_APP_TOKEN}`);
  const dt = await response.json();
  const formatedData = {
    aqi: dt.list[0].main.aqi,
    data: dt.list[0].components,
  };
  return formatedData;
});

const airPollutionInfosSlice = createSlice({
  name: 'infos',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getAirPollutionInfos.fulfilled, (state, action) => ({
      ...state,
      infos: action.payload,
      loading: false,
    }));
    builder.addCase(getAirPollutionInfos.rejected, (state, action) => ({
      ...state,
      loading: false,
      error: action.error.message,
    }));
    builder.addCase(getAirPollutionInfos.pending, (state) => ({
      ...state,
      loading: true,
    }));
  },
});
export default airPollutionInfosSlice.reducer;
