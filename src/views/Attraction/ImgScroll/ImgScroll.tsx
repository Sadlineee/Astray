import React from 'react'
import ImgLoad from '@components/ImgLoad'
import { ImgScrollBox, ImgScrollElement } from './ImgScroll.styled'
import { AboutAttractionProps } from '@/types/AboutAttractionProps'

const ImgScroll: React.FC<{ el: AboutAttractionProps }> = ({ el }) => {
  return (
    <ImgScrollBox key={el.id}> 
      {[...el.image, ...el.image].map((img, index) => ( 
        <ImgScrollElement key={`${el.id}-${index}`}> 
          <ImgLoad src={img} alt="attraction" /> 
        </ImgScrollElement> 
      ))} 
    </ImgScrollBox>
  )
}

export default ImgScroll