import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import './stylesheets/main.scss';
import Countries from './components/Countries';
import Details from './components/Details';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Countries />} />
          <Route path="/About" element={<Countries />} />
          <Route path="/References" element={<Countries />} />
          <Route path="/pollution/:id" element={<Details />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
