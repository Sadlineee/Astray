import { AttractionCardProps } from '@/types/AttractionCardProps'

import { 
  Brooklyn_Bridge_Img, 
  Central_Park_Img, 
  Empire_State_Building_Img, 
  Grand_Central_Terminal_Img, 
  Statue_of_Liberty_Img, 
  Times_Square_Img 
} from '@assets/images/cities/New_York/attractions'

export const NewYorkAttractionsData: AttractionCardProps [] = [

  { 
    id: 1,
    image: Statue_of_Liberty_Img,
    title: 'Стaтуя Свободы',
    translate: 'Statue of Liberty',
    rating: 4.7
  },

  { 
    id: 2,
    image: Times_Square_Img,
    title: 'Таймс-сквер',
    translate: 'Times Square',
    rating: 4.7
  },

  { 
    id: 3,
    image: Brooklyn_Bridge_Img,
    title: 'Бруклинский мост',
    translate: 'Brooklyn Bridge',
    rating: 4.8
  },

  { 
    id: 4,
    image: Central_Park_Img,
    title: 'Центральный парк',
    translate: 'Central Park',
    rating: 4.8
  },

  { 
    id: 5,
    image: Empire_State_Building_Img,
    title: 'Эмпайр-стейт-билдинг',
    translate: 'Empire State Building',
    rating: 4.7
  },

  { 
    id: 6,
    image: Grand_Central_Terminal_Img,
    title: 'Центральный вокзал',
    translate: 'Grand Central Terminal',
    rating: 4.7
  }
]