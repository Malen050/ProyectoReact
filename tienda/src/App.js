import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/navBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import React from 'react';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer saludo={"Bienvenidos"} />
    </div>
  
  
  );
}

export default App;
