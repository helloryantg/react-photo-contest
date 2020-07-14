// React
import React from 'react';
// Components
import Header from '../Header/Header';
import Categories from '../Categories/Categories';
import PhotoList from '../PhotoList/PhotoList';
// Styles
import './App.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <Categories />
      <PhotoList />
    </div>
  );
}

export default App;