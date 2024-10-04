import { AttractionCardProps } from '@/types/AttractionCardProps'

import { 
  De_Wallen_Img,
  Rijksmuseum_Img,
  Van_Gogh_Museum_Img,
  Vondelpark_Img
} from '@assets/images/cities/Amsterdam/attractions'

export const AmsterdamAttractionsData: AttractionCardProps [] = [

  { 
    id: 1,
    image: Rijksmuseum_Img,
    title: 'Рейксмузеум',
    translate: 'Rijksmuseum',
    rating: 4.7
  },

  { 
    id: 2,
    image: Vondelpark_Img,
    title: 'Парк Вондела',
    translate: 'Vondelpark',
    rating: 4.7
  },

  { 
    id: 3,
    image: De_Wallen_Img,
    title: 'Де Валлен',
    translate: 'De Wallen',
    rating: 4.0
  },

  { 
    id: 4,
    image: Van_Gogh_Museum_Img,
    title: 'Музей Ван Гога',
    translate: 'Van Gogh Museum',
    rating: 4.6
  }
]