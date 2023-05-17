import React, {useState, useEffect} from 'react'

function SearchForm() {
  const [pokemon, setPokemon] = useState('');
  const [searchResults, setSearchResults] = useState([]);


  useEffect(() => {
    const fetchPokemon = async () => {
      if (pokemon.trim() !== '') {
        try {
          const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.toLowerCase()}`);
          const data = await response.json();
          setSearchResults(data);
        } catch (error) {
          console.error('Error fetching Pokemon:', error);
          setSearchResults([]);
        }
      } 
      // else {
      //   setSearchResults([]);
      // }
    };

    fetchPokemon();
  }, [pokemon]);
  

  // Function to handle search input changes
  const handleInputChange = (event) => {
    setPokemon(event.target.value);
  };

  // Function to handle search form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
  
  }
    

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={pokemon} onChange={handleInputChange} placeholder="Search Pokemon" />
        <button type="submit">Search</button>
      </form>
      <ul>
        {searchResults.map((pokemon) => (
          <li key={pokemon.id}>
            <h3>{pokemon.name}</h3>
            <img src={pokemon.sprites.front_default} alt={pokemon.name} />
          </li>
        ))}
      </ul>
    
    </div>
  );
}

export default SearchForm