// React
import React from 'react';
// Components
import Header from '../Header/Header';
import ContestDetails from '../ContestDetails/ContestDetails';
import Categories from '../Categories/Categories';
import PhotoList from '../PhotoList/PhotoList';
import Guidelines from '../Guidelines/Guidelines';
// Styles
import './App.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <ContestDetails />
      <Categories />
      <PhotoList />
      <Guidelines />
    </div>
  );
}

export default App;