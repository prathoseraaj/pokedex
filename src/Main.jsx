import React, { useState } from 'react'

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
            <input type="text" placeholder='Pokemon Name' />
            <button onClick={getpokedata}>search</button>
            
        </div>
    </div>
  )
}

export default Main