import { CityProps } from '@/types/CityProps'
import * as flagImg from '@assets/images/flags'

import LondonImg from '@assets/images/cities/London/attractions/Palace_of_Westminster/3.jpg'
import ParisImg from '@assets/images/cities/Paris/attractions/Tour_Eiffel/3.jpg'
import NewYorkImg from '@assets/images/cities/New_York/attractions/Statue_of_Liberty/3.jpg'
import RioDeJaneiroImg from '@assets/images/cities/Rio_de_Janeiro/Christ_the_Redeemer/2.jpg'

export const citiesData: CityProps[] = [
  
  { 
    id: 1,
    image: LondonImg,
    title: 'Лондон',
    country: 'Великобритания',
    flag: flagImg.UK, 
    description: 'Сердце Великобритании: Биг-Бен, Тауэр, бульвары, дворцы и сумрачные аллеи в тумане.'
  },

  { 
    id: 2,
    image: ParisImg,
    title: 'Париж',
    country: 'Франция',
    flag: flagImg.France,
    description: 'Город любви, моды и искусства, знаменит Эйфелевой башней и Лувром.'
  },

  { 
    id: 3,
    image: NewYorkImg,
    title: 'Нью-Йорк',
    country: 'США',
    flag: flagImg.USA,
    description: 'Крупнейший город США с высокими небоскребами и разнообразной культурой.'
  },

  { 
    id: 4,
    image: RioDeJaneiroImg,
    title: 'Рио-де-Жанейро',
    country: 'Бразилия',
    flag: flagImg.Brazil,
    description: 'Город с потрясающими пляжами, захватывающими карнавальными праздниками и горами.'
  }
]