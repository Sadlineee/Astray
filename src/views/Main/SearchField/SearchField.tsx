import React from 'react'
import { InputText } from './SearchField.styled'
import { SearchFieldProps } from '@/types/SearchFieldProps'

const SearchField: React.FC<SearchFieldProps> = ({ searchValue, onSearchValueChange }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSearchValueChange(e.target.value)
  }

  return (
    <InputText
      type="text"
      maxLength={40}
      placeholder="Введите город или страну"
      value={searchValue}
      onChange={handleChange}
    />
  )
}

export default SearchField