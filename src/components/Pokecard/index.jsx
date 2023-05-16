import React from "react";

import "./pokecard.css"

function Pokecard({pokemon}, idx) {
  console.log("pokemon 6", pokemon.name);
  console.log("pokemon 7", pokemon.sprites.front_default);

  return (
    <>
    <div className="pokedex-card" key={idx}>
      <h3>{pokemon.name}</h3>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />

      <p>Type: {pokemon.type}</p>
    </div>
    </>
  );
}

export default Pokecard;
