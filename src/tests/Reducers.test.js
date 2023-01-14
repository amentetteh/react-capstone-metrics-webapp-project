import store from '../redux/configureStore';
import { getAirPollutionInfos } from '../redux/airpollution/airPollutionInfosSlice';

const mockedAQI = {
  coord: {
    lon: 22,
    lat: 22,
  },
  list: [
    {
      main: {
        aqi: 5,
      },
      components: {
        co: 236.99,
        no: 0.03,
        no2: 0.1,
        o3: 90.84,
        so2: 0.08,
        pm2_5: 103.75,
        pm10: 678.32,
        nh3: 0.08,
      },
      dt: 1646902800,
    },
  ],
};

const mockedCities = [
  {
    name: {
      common: 'Montenegro',
      official: 'Montenegro',
    },
    latlng: [23, 242],
    continents: ['Europe'],
  },
  {
    name: {
      common: 'Tokelau',
      official: 'Tokelau',
    },
    latlng: [23, 242],
    continents: ['Asia'],
  },
  {
    name: {
      common: 'Cuba',
      official: 'Republic of Cuba',
    },
    latlng: [23, 242],
    continents: ['Africa'],
  },
  {
    name: {
      common: 'Guadeloupe',
      official: 'Guadeloupe',
    },
    latlng: [23, 242],
    continents: ['Oceania'],
  },
  {
    name: {
      common: 'Guadeloupe',
      official: 'Guadeloupe',
    },
    latlng: [23, 242],
    continents: ['South America'],
  },
  {
    name: {
      common: 'Guadeloupe',
      official: 'Guadeloupe',
    },
    latlng: [23, 242],
    continents: ['North America'],
  },
];

describe('Test reducers ', () => {
  test('Test Pollution', () => {
    store.dispatch(getAirPollutionInfos(mockedAQI));
    expect(store.getState().infos.infos).toBeTruthy();
  });
  test('Test Country', () => {
    store.dispatch(getAirPollutionInfos(mockedCities));
    expect(store.getState().countries.countries).toBeTruthy();
  });
});
