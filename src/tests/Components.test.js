import React from 'react';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../redux/configureStore';
import Header from '../components/Header';
import Countries from '../components/Countries';
import Details from '../components/Details';

describe('React components tests', () => {
  it('Header component should render properly', () => {
    const header = render(
      <React.StrictMode>
        <Router>
          <Provider store={store}>
            <Header />
          </Provider>
        </Router>
      </React.StrictMode>,
    );
    expect(header).toMatchSnapshot();
  });
  test('Header component test', () => {
    render(
      <Router>
        <Provider store={store}>
          <Header />
        </Provider>
      </Router>,
    );
    const headerElement = screen.getByTestId('app-title');
    expect(headerElement).toHaveTextContent('Air Quality');
  });
  it('Detail component should render properly', () => {
    const details = render(
      <React.StrictMode>
        <Router>
          <Provider store={store}>
            <Details />
          </Provider>
        </Router>
      </React.StrictMode>,
    );
    expect(details).toMatchSnapshot();
  });
  it('Countries component should render properly', () => {
    const countries = render(
      <React.StrictMode>
        <Router>
          <Provider store={store}>
            <Countries />
          </Provider>
        </Router>
      </React.StrictMode>,
    );
    expect(countries).toMatchSnapshot();
  });
});
