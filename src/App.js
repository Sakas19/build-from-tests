import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import UserInput from './components/UserInput';
import PokemonVote from './components/PokemonVote';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <UserInput className="UserInput" />
      <PokemonVote className="PokemonVote" />
      <Footer className="Footer" /> 
    </div>
  );
}

export default App;


