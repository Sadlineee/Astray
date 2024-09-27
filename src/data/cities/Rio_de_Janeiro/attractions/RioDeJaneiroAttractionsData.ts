import { AttractionCardProps } from '@/types/AttractionCardProps'

import { 
  Christ_the_Redeemer_Img, 
  Copacabana_Beach_Img 
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
  }
]