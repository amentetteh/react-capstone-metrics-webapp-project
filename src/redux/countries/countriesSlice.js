/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const url = 'https://restcountries.com/v3.1/region';

const initialState = {
  loading: false,
  countries: [],
  error: '',
  refresh: false,
};

export const fetchCountries = createAsyncThunk('countries/fetchCountries', async (region) => {
  const response = await fetch(`${url}/${region}`);
  const data = await response.json();
  return data;
});

const countriesSlice = createSlice({
  name: 'countries',
  initialState,
  extraReducers: {
    [fetchCountries.pending]: (state) => {
      state.loading = true;
    },
    [fetchCountries.fulfilled]: (state, action) => {
      state.countries = action.payload;
      state.loading = false;
    },
    [fetchCountries.rejected]: (state) => {
      state.loading = false;
    },
  },
});

export default countriesSlice.reducer;
