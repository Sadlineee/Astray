import React from 'react'
import { 
  AboutAttractionAddress, 
  AboutAttractionBox, 
  AboutAttractionSectionBox, 
  AboutAttractionSectionLine, 
  AboutAttractionSectionText, 
  AboutAttractionSectionTitle, 
  AboutAttractionTitle, 
  AboutAttractionWebsite 
} from './AboutAttraction.styled'
import { AboutAttractionProps } from '@/types/AboutAttractionProps'

const AboutAttraction: React.FC<{ el: AboutAttractionProps }> = ({ el }) => {
  const sections = [
    { title: "Описание", content: el.description },
    { title: "История", content: el.history },
    { title: "Архитектура", content: el.view },
    { title: "Дополнительно", content: el.other }
  ]

  return (
    <AboutAttractionBox key={el.id}>
      <AboutAttractionTitle>{el.title}</AboutAttractionTitle> 
      <AboutAttractionAddress>{el.address}</AboutAttractionAddress> 
      {el.link && ( 
        <AboutAttractionWebsite to={el.link}>Visit official website</AboutAttractionWebsite> 
      )}
      {sections.map(({ title, content }) => (
        <AboutAttractionSectionBox key={title}>
          <AboutAttractionSectionTitle>{title}</AboutAttractionSectionTitle> 
          <AboutAttractionSectionLine /> 
          <AboutAttractionSectionText>{content}</AboutAttractionSectionText> 
        </AboutAttractionSectionBox>
      ))}
    </AboutAttractionBox>
  )
}

export default AboutAttraction