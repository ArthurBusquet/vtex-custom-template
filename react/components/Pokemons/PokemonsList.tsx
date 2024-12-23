import React from 'react'
import { Pokemon } from '.'

interface PokemonProps {
  pokemons: Pokemon[]
}

const PokemonsList = ({ pokemons }: PokemonProps) => {
  return (
    <div>
      {pokemons.map((pokemon) => {
        return (
          <>
            <span>{pokemon.name}</span>
            <br />
            <br />
            <br />
          </>
        )
      })}
    </div>
  )
}

export default PokemonsList
