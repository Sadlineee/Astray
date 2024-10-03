import { AttractionCardProps } from '@/types/AttractionCardProps'

import { 
  Colosseum_Img, 
  Pantheon_Img
} from '@assets/images/cities/Rome/attractions'

export const RomeAttractionsData: AttractionCardProps [] = [

  { 
    id: 1,
    image: Colosseum_Img,
    title: 'Колизей',
    translate: 'Colosseum',
    rating: 4.7
  },

  { 
    id: 2,
    image: Pantheon_Img,
    title: 'Пантеон',
    translate: 'Pantheon',
    rating: 4.8
  }
]