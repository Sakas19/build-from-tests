import React from 'react';

function CalculateWinner({ votes }) {
  const maxVotes = Math.max(...Object.values(votes)); 

  const winners = Object.keys(votes)
    .filter((pokemon) => votes[pokemon] === maxVotes);

  if (winners.length === 0) {
    return <h2>Start Voting!</h2>;
  } else if (winners.length === 1) {
    const winnerName = getWinnerName(winners[0]);
    return <h2>{`${winnerName} is in the lead with ${maxVotes} votes!`}</h2>;
  } else {
    const winnerNames = winners.map((pokemon) => getWinnerName(pokemon));
    const tiedPokemon = winnerNames.join(' and ');
    return <h2>{`It's a tie between ${tiedPokemon} with ${maxVotes} votes each!`}</h2>;
  }
}

function getWinnerName(pokemon) {
  const pokemonNames = {
    bulbasaur: 'Bulbasaur',
    charmander: 'Charmander',
    squirtle: 'Squirtle',
  };
  return pokemonNames[pokemon];
}

export default CalculateWinner;

