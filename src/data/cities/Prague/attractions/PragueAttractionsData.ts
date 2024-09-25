import { AttractionCardProps } from '@/types/AttractionCardProps'

import { 
  Charles_Bridge_Img,
  Old_Town_Square_Img, 
  Prague_Castle_Img
} from '@/assets/images/cities/Prague/attractions'

export const PragueAttractionsData: AttractionCardProps [] = [

  { 
    id: 1,
    image: Charles_Bridge_Img,
    title: 'Карлов мост',
    translate: 'Charles Bridge',
    rating: 4.8
  },

  { 
    id: 2,
    image: Old_Town_Square_Img,
    title: 'Староместская площадь',
    translate: 'Old Town Square',
    rating: 4.8
  },

  { 
    id: 3,
    image: Prague_Castle_Img,
    title: 'Пражский Град',
    translate: 'Prague Castle',
    rating: 4.7
  }
]