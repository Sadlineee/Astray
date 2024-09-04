import React from 'react' 
import Header from '@components/ui/Header' 
import Footer from '@components/ui/Footer' 
import AboutAttraction from './AboutAttraction'
import ImgScroll from './ImgScroll'
import { AttractionBox } from './Attraction.styled'
import { AboutAttractionProps } from '@/types/AboutAttractionProps' 

const Attraction: React.FC<{ data: AboutAttractionProps[] }> = ({ data }) => { 
  return ( 
    <> 
      <Header /> 
      <AttractionBox> 
        {data.map((el) => (
          <>
            <ImgScroll key={el.id} el={el} /> 
            <AboutAttraction key={el.id} el={el} />
          </> 
        ))} 
      </AttractionBox> 
      <Footer /> 
    </> 
  )
}

export default Attraction