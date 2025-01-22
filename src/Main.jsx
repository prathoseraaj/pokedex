import React, { useState } from 'react'

const Main = () => {
    const [pokemon,setPokemon] = useState('pikachu');

  async function getpokedata() {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    const data = await response.json();
    console.log(data);

  }  
  return (
    <div className='pokedex'>
        <div className='card'>
            <input type="text" placeholder='Pokemon Name' />
            <button>search</button>
            
        </div>
    </div>
  )
}

export default Main