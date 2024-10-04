import { AttractionCardProps } from '@/types/AttractionCardProps'

import { 
  Cloud_Forest_Img, 
  Jewel_Changi_Airport_Img, 
  Marina_Bay_Sands_Img,
  Singapore_Botanic_Gardens_Img,
  Supertree_Grove_Img
} from '@assets/images/cities/Singapore/attractions'

export const SingaporeAttractionsData: AttractionCardProps [] = [

  { 
    id: 1,
    image: Cloud_Forest_Img,
    title: 'Облачный лес',
    translate: 'Cloud Forest',
    rating: 4.8
  },

  { 
    id: 2,
    image: Marina_Bay_Sands_Img,
    title: 'Марина Бей Сендс',
    translate: 'Marina Bay Sands',
    rating: 4.7
  },

  { 
    id: 3,
    image: Supertree_Grove_Img,
    title: 'Роща сверхдеревьев',
    translate: 'Supertree Grove',
    rating: 4.7
  },

  { 
    id: 4,
    image: Jewel_Changi_Airport_Img,
    title: 'Аэропорт Чанги',
    translate: 'Jewel Changi Airport',
    rating: 4.8
  },

  { 
    id: 5,
    image: Singapore_Botanic_Gardens_Img,
    title: 'Сингапурский ботанический сад',
    translate: 'Singapore Botanic Gardens',
    rating: 4.7
  },
]