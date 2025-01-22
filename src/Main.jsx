import React, { useState } from 'react'
import './App.css';

const Main = () => {
    const [pokemon,setPokemon] = useState('pikachu');
    const [pokemondata, setPokemondata] = useState(null);

  async function getpokedata() {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    const data = await response.json();
    console.log(data);

    setPokemondata({
        name: data.name,
        image: data.sprites.front_default,
        abilities: data.abilities.map((ability) => ability.ability.name).join(', '),
        types: data.types.map((type) => type.type.name).join(', '),
    })

  }  
  return (
    <div className='pokedex'>
        <div className='card'>
            <input type="text" placeholder='Pokemon Name'
                   onChange={(e) => setPokemon(e.target.value.toLowerCase())}  />
            <button onClick={getpokedata}>search</button>
        </div>
        {pokemondata && (
        <div className="pokemon-card">
            <h2>{pokemondata.name}</h2>
            <img src={pokemondata.image} alt={pokemondata.name} />
            <p>
                <strong>Abilities:</strong> {pokemondata.abilities}
            </p>
            <p>
                <strong>Types:</strong> {pokemondata.types}
            </p>
        </div>)}
    </div>
  )
}

export default Main