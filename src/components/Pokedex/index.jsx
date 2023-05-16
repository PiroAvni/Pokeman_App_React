import Pokecard from "../Pokecard";
// import {pokemon} from "../../data/pokemon.json";
import React, { useState, useEffect } from 'react'
import "./pokedex.css"

function Pokedex() {
const [pokemon, setPokemon] = useState('');
const [searchResults, setSearchResults] = useState([]);
//console.log('line 9 pokedex', searchResults)

useEffect(() => {
  const fetchPokemon = async () => {
    if (pokemon.trim() !== '') {
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.toLowerCase()}`);
        const data = await response.json();
        //console.log('line 17 pokedex',data);
        setSearchResults([data]);
      } catch (error) {
        console.error('Error fetching Pokemon:', error);
        setSearchResults([]);
      }
    } 
    else {
      setSearchResults([]);
    }
  };

  fetchPokemon();
}, [pokemon]);

//console.log('line 31', searchResults)
// Function to handle search input changes
const handleInputChange = (event) => {
  setPokemon(event.target.value);
};

// Function to handle search form submission
const handleSubmit = async (e) => {
  e.preventDefault();
}
  

return (
  <>

    <form  className="form" onSubmit={handleSubmit}>
      <input type="text" value={pokemon} onChange={handleInputChange} placeholder="Search Pokemon" />
      <button type="submit">Search</button>
    </form>
   
    <div className="card-container">
        {searchResults.map((pokemon, idx) =>{
          //console.log(pokemon)
  
        return(
            <Pokecard key={idx} pokemon ={pokemon}/>
        )
    })}
    </div>
   </>
  )
}

export default Pokedex;