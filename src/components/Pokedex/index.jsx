import Pokecard from "../Pokecard";
// import {pokemon} from "../../data/pokemon.json";
import React, { useState, useEffect } from 'react'
import "./pokedex.css"

function Pokedex() {
const [pokemon, setPokemon]= useState([])

useEffect(() => {
  async function getPokemon() {
    try {
      const result = await fetch("https://pokeapi.co/api/v2/pokemon");
      const data = await result.json();
      console.log(data.results.url)
      console.log({data})

      setPokemon(data.results);
    } catch (error) {
      console.log(error.message);
    }
  }
  getPokemon();
}, []);

// console.log(pokemon.results)
  return (
   <>
   
    {/* {pokemon.results.length ? ( */}
    <div className="card-container">
{pokemon.map((pokemon, idx) =>{
  
        return(
            <Pokecard key={idx} pokemon ={pokemon}/>
        )
    })}
   </div>
    {/* ) : ("No Pokemons") */}
    {/* } */}
    
   </>
  )
}

export default Pokedex