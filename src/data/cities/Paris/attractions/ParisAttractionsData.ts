import { AttractionCardProps } from '@/types/AttractionCardProps'

import { 
  Arc_de_Triomphe_Img, 
  Jardin_des_Tuileries_Img, 
  Louvre_Img, 
  Place_des_Vosges_Img, 
  Sainte_Chapelle_Img, 
  Tour_Eiffel_Img 
} from '@assets/images/cities/Paris/attractions'

export const ParisAttractionsData: AttractionCardProps [] = [

  { 
    id: 1,
    image: Tour_Eiffel_Img,
    title: 'Эйфелева башня',
    translate: 'Tour Eiffel',
    rating: 4.7
  },

  { 
    id: 2,
    image: Louvre_Img,
    title: 'Лувр',
    translate: 'Musée du Louvre',
    rating: 4.7
  },

  { 
    id: 3,
    image: Arc_de_Triomphe_Img,
    title: 'Триумфальная арка',
    translate: 'Arc de triomphe de l’Étoile',
    rating: 4.7
  },

  { 
    id: 4,
    image: Sainte_Chapelle_Img,
    title: 'Сент-Шапель',
    translate: 'Sainte-Chapelle',
    rating: 4.6
  },

  { 
    id: 5,
    image: Jardin_des_Tuileries_Img,
    title: 'Сад Тюильри',
    translate: 'Jardin des Tuileries',
    rating: 4.6
  },

  { 
    id: 6,
    image: Place_des_Vosges_Img,
    title: 'Площадь Вогезов',
    translate: 'Place des Vosges',
    rating: 4.6
  }
]