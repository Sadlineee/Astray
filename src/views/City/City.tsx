import React from 'react'
import Header from '@components/ui/Header'
import Footer from '@components/ui/Footer'
import AttractionCard from './AttractionCard'
import { CityBox } from './City.styled'
import { AttractionCardProps } from '@/types/AttractionCardProps'

const City: React.FC<{ attractionsData: AttractionCardProps[], cityId: number }> = ({ attractionsData, cityId }) => {
  return (
    <>
      <Header />
      <CityBox>
        {attractionsData.map((el) => (
          <AttractionCard key={el.id} el={el} cityId={cityId} />
        ))}
      </CityBox>
      <Footer />
    </>
  )
}

export default City