import { CityCardProps } from '@/types/CityCardProps'
import * as flagImg from '@assets/images/flags'
import { London_Img, Paris_Img, New_York_Img, Rio_de_Janeiro_Img } from '@assets/images/cities'

export const citiesData: CityCardProps[] = [
  
  { 
    id: 1,
    image: London_Img,
    title: 'Лондон',
    country: 'Великобритания',
    flag: flagImg.UK, 
    description: 'Сердце Великобритании: Биг-Бен, Тауэр, бульвары, дворцы и сумрачные аллеи в тумане.'
  },

  { 
    id: 2,
    image: Paris_Img,
    title: 'Париж',
    country: 'Франция',
    flag: flagImg.France,
    description: 'Город любви, моды и искусства, знаменит Эйфелевой башней и Лувром.'
  },

  { 
    id: 3,
    image: New_York_Img,
    title: 'Нью-Йорк',
    country: 'США',
    flag: flagImg.USA,
    description: 'Крупнейший город США с высокими небоскребами и разнообразной культурой.'
  },

  { 
    id: 4,
    image: Rio_de_Janeiro_Img,
    title: 'Рио-де-Жанейро',
    country: 'Бразилия',
    flag: flagImg.Brazil,
    description: 'Город с потрясающими пляжами, захватывающими карнавальными праздниками и горами.'
  }
]