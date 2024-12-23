import React, { useEffect, useState } from 'react'
import PokemonsList from './PokemonsList'
import SearchBar from './SearchBar'

export interface Pokemon {
  name: string
  url: string
}

const Pokemons = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([])
  const [searchTerm, setSearchTerm] = useState('')

  const getPokemonsList = async () => {
    const response = await fetch('/_v/pokemons/list')

    const { pokemons } = await response.json()

    setPokemons(pokemons)
  }

  useEffect(() => {
    getPokemonsList()
  }, [])

  const filteredPokemons = pokemons.filter((pokemon) => {
    return pokemon.name.includes(searchTerm)
  })

  if (!pokemons.length) return <></>
  return (
    <>
      <SearchBar setSearchTerm={setSearchTerm} />
      <PokemonsList pokemons={filteredPokemons} />
    </>
  )
}

export default Pokemons
