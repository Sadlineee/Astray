import React from 'react'
import ImgLoad from '@components/ImgLoad'
import { CitiesBox, CityButton, CityCard, CityCountry, CityDescription, CityFlag, CityImg, CityTitle } from './CitiesList.styled'
import { SortCitiesProps } from '@/types/SortCitiesProps'

const CitiesList: React.FC<SortCitiesProps> = React.memo(({ sortCitiesData }) => {
  return (
    <CitiesBox>
      {sortCitiesData.map((el) => (
        <CityCard to={`${el.id}`} key={el.id}>
          <CityImg>
            <ImgLoad src={el.image} alt="city" />
          </CityImg>
          <CityTitle>{el.title}</CityTitle>
          <CityCountry>{el.country}</CityCountry>
          <CityFlag src={el.flag} alt="city flag" />
          <CityDescription>{el.description}</CityDescription>
          <CityButton>ПЕРЕЙТИ</CityButton>
        </CityCard>
      ))}
    </CitiesBox>
  )
})

export default CitiesList