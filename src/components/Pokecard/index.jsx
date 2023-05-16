import React from "react";

import "./pokecard.css"

function Pokecard({pokemon}, idx) {
  console.log("pokemon", pokemon.name);

  return (
    <>
    <div className="pokedex-card" key={idx}>
      <h3>{pokemon.name}</h3>
      <img src={pokemon.image} alt={pokemon.name} />

      <p>Type: {pokemon.type}</p>
    </div>
    </>
  );
}

export default Pokecard;
