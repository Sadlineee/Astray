import React from 'react'
import ImgLoad from '@components/ImgLoad'
import { AttractionBox, AttractionButton, AttractionImg, AttractionLine, AttractionRating, AttractionTitle, AttractionTranslate, StarIcon } from './Attraction.styled'
import { AttractionCardProps } from '@/types/AttractionCardProps'

const AttractionCard: React.FC<{ el: AttractionCardProps, cityId: number }> = ({ el, cityId }) => {
  return (
    <AttractionBox to={`/main/${cityId}/${el.id}`} key={el.id}> 
      <AttractionImg> 
        <ImgLoad src={el.image} alt="attraction" /> 
      </AttractionImg> 
      <AttractionTitle>{el.title}</AttractionTitle> 
      <AttractionTranslate>{el.translate}</AttractionTranslate> 
      <AttractionLine /> 
      <AttractionRating> 
        {el.rating} 
        <StarIcon /> 
      </AttractionRating> 
      <AttractionButton>ПЕРЕЙТИ</AttractionButton> 
    </AttractionBox>
  )
}

export default AttractionCard