import Pokecard from "../Pokecard";
import {pokemon} from "../../data/pokemon.json";
import React from 'react'
import "./pokedex.css"

function Pokedex() {
  return (
   <>
   <div className="card-container">
    {pokemon.map((pokemon, idx) =>{
        return(
            <Pokecard key={idx} pokemon ={pokemon}/>
        )
    })}
   </div>
   </>
  )
}

export default Pokedex