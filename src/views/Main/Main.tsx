import React, { useCallback, useMemo, useState } from 'react'
import Header from '@components/ui/Header'
import Footer from '@components/ui/Footer'
import SearchField from './SearchField'
import CitiesList from './CitiesList'
import { Circle, CircleText, MainBox, MainLeftSide, MainRightSide, MainText, MainTopSection } from './Main.styled'
import { citiesData } from '@data/cities/citiesData'

const Main: React.FC = () => {
  const [searchValue, setSearchValue] = useState<string>('')

  const searchValueChange = useCallback((value: string) => {
    setSearchValue(value)
  }, [])

  const sortCitiesData = useMemo(() => 
    citiesData.filter(city => 
      city.title.toLowerCase().includes(searchValue.toLowerCase()) || 
      city.country.toLowerCase().includes(searchValue.toLowerCase())
    ), [searchValue]
  )

  return (
    <>
      <Header />
      <MainBox>
        <MainTopSection>
          <MainLeftSide>
            <MainText>
              Исследуйте, мечтайте, открывайте мир с новой стороны!
            </MainText>
            <SearchField searchValue={searchValue} onSearchValueChange={searchValueChange} />
          </MainLeftSide>
          <MainRightSide>
            <Circle viewBox="0 0 100 100">
              <path id="text-path" d="M20,50a30,30 0 1,1 60,0a30,30 0 1,1 -60,0" fill="transparent" />
              <CircleText>
                <textPath href="#text-path">TRAVELING MEANS DEVELOPING</textPath>
              </CircleText>
            </Circle>
          </MainRightSide>
        </MainTopSection>
        <CitiesList sortCitiesData={sortCitiesData} />
      </MainBox>
      <Footer />
    </>
  )
}

export default Main