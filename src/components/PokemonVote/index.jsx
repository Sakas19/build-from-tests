import React, { useState } from 'react';
import CalculateWinner from '../CalculateWinner';
import PokemonInput from '../PokemonInputField';

function PokemonVote() {
  const [pokemonNames, setPokemonNames] = useState({
    bulbasaur: 'Bulbasaur',
    charmander: 'Charmander',
    squirtle: 'Squirtle',
  });

  const [votes, setVotes] = useState({
    bulbasaur: 0,
    charmander: 0,
    squirtle: 0,
  });

  const handleVote = (pokemon) => {
    setVotes((prevVotes) => ({
      ...prevVotes,
      [pokemon]: prevVotes[pokemon] + 1,
    }));
  };

  const handleNameChange = (pokemon, newName) => {
    setPokemonNames((prevNames) => ({
      ...prevNames,
      [pokemon]: newName,
    }));
  };

  return (
    <div>
      <CalculateWinner votes={votes} />
      {Object.keys(pokemonNames).map((pokemon) => (
        <div key={pokemon}>
          <h3>{pokemonNames[pokemon]}</h3>
          <p data-testid={`${pokemon}-vote`}>Votes: {votes[pokemon]}</p>
          <button onClick={() => handleVote(pokemon)}>Vote {pokemonNames[pokemon]}</button>
          <PokemonInput
            onNameChange={(newName) => handleNameChange(pokemon, newName)}
            pokemonName={pokemonNames[pokemon]}
          />
        </div>
      ))}
    </div>
  );
}

export default PokemonVote;





