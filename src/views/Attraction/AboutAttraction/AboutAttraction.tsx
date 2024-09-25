import React from 'react'
import { 
  AboutAttractionBox, 
  AboutAttractionDescriptionBox, 
  AboutAttractionDescriptionLine, 
  AboutAttractionDescriptionText, 
  AboutAttractionDescriptionTitle, 
  AboutAttractionTitle, 
} from './AboutAttraction.styled'
import { AboutAttractionProps } from '@/types/AboutAttractionProps'

const AboutAttraction: React.FC<{ el: AboutAttractionProps }> = ({ el }) => {
  const sections = [
    { title: "История", content: el.history },
    { title: "Архитектура", content: el.architecture }
  ]

  return (
    <AboutAttractionBox key={el.id}>
      <AboutAttractionTitle>{el.title}</AboutAttractionTitle> 
      {sections.map(({ title, content }) => (
        <AboutAttractionDescriptionBox key={title}>
          <AboutAttractionDescriptionTitle>{title}</AboutAttractionDescriptionTitle> 
          <AboutAttractionDescriptionLine /> 
          <AboutAttractionDescriptionText>{content}</AboutAttractionDescriptionText> 
        </AboutAttractionDescriptionBox>
      ))}
    </AboutAttractionBox>
  )
}

export default AboutAttraction