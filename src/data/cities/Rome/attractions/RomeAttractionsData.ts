import { AttractionCardProps } from '@/types/AttractionCardProps'

import { 
  Colosseum_Img, 
  Foro_Romano_Img, 
  Pantheon_Img,
  Piazza_Navona_Img
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
  },

  { 
    id: 3,
    image: Foro_Romano_Img,
    title: 'Римский форум',
    translate: 'Foro Romano',
    rating: 4.7
  },

  { 
    id: 4,
    image: Piazza_Navona_Img,
    title: 'Пьяцца Навона',
    translate: 'Piazza Navona',
    rating: 4.7
  }
]