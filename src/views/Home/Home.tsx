import React from 'react'
import Header from '@components/ui/Header'
import Footer from '@components/ui/Footer'
import ImgLoad from '@components/ImgLoad'
import { HomeBox, HomeButton, HomeLeftSide, HomeLine, HomeRightSide, HomeTextOne, HomeTextTwo } from './Home.styled'
import { homeImg } from '@assets/images/home'

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <HomeBox>
        <HomeLeftSide>
          <HomeTextOne>
            В каждом уголке мира ждет открытие новых чудес
          </HomeTextOne>
          <HomeLine />
          <HomeTextTwo>
            Кликните ниже и начните исследовать Мир с главной страницы нашего сайта!
          </HomeTextTwo>
          <HomeButton to='/main'>Вперёд!</HomeButton>
        </HomeLeftSide>
        <HomeRightSide>
          <ImgLoad src={homeImg} alt="home" />
        </HomeRightSide>
      </HomeBox>
      <Footer />
    </>
  )
}

export default Home