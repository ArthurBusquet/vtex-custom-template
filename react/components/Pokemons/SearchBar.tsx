import React from 'react'

interface SearchBarProps {
  setSearchTerm: (searchTerm: string) => void
}
const SearchBar = ({ setSearchTerm }: SearchBarProps) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value)
  }

  return (
    <div>
      <input type="text" onChange={(e) => handleInputChange(e)}></input>
    </div>
  )
}

export default SearchBar
