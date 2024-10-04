import { AttractionCardProps } from '@/types/AttractionCardProps'

import { 
  Christ_the_Redeemer_Img, 
  Copacabana_Beach_Img, 
  Escadaria_Selaron_Img,
  Parque_Lage_Img,
  Sugarloaf_Mountain_Img
} from '@assets/images/cities/Rio_de_Janeiro/attractions'

export const RioDeJaneiroAttractionsData: AttractionCardProps [] = [

  { 
    id: 1,
    image: Christ_the_Redeemer_Img,
    title: 'Статуя Христа-Искупителя',
    translate: 'Christ the Redeemer',
    rating: 4.8
  },

  { 
    id: 2,
    image: Copacabana_Beach_Img,
    title: 'Пляж Копакабана',
    translate: 'Copacabana Beach',
    rating: 4.5
  },

  { 
    id: 3,
    image: Escadaria_Selaron_Img,
    title: 'Лестница Селарона',
    translate: 'Escadaria Selarón',
    rating: 4.6
  },

  { 
    id: 4,
    image: Parque_Lage_Img,
    title: 'Парк Энрике Лаге',
    translate: 'Parque Lage',
    rating: 4.6
  },

  { 
    id: 5,
    image: Sugarloaf_Mountain_Img,
    title: 'Сахарная голова',
    translate: 'Sugarloaf Mountain',
    rating: 4.5
  }
]