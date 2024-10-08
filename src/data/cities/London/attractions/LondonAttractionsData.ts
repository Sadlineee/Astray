import { AttractionCardProps } from '@/types/AttractionCardProps'

import { 
  British_Museum_Img,
  Buckingham_Palace_Img,
  Harrods_Img,
  Hyde_Park_Img,
  London_Eye_Img,
  National_Gallery_Img,
  Palace_of_Westminster_Img,
  Sky_Garden_Img,
  The_Shard_Img,
  Tower_Bridge_Img,
  Tower_of_London_Img,
  Westminster_Abbey_Img,
} from '@assets/images/cities/London/attractions'

export const LondonAttractionsData: AttractionCardProps [] = [

  { 
    id: 1,
    image: Buckingham_Palace_Img,
    title: 'Букингемский дворец',
    translate: 'Buckingham Palace',
    rating: 4.5
  },

  { 
    id: 2,
    image: Tower_Bridge_Img,
    title: 'Тауэрский мост',
    translate: 'Tower Bridge',
    rating: 4.8
  },

  { 
    id: 3,
    image: British_Museum_Img,
    title: 'Британский музей',
    translate: 'British Museum',
    rating: 4.7
  },

  { 
    id: 4,
    image: Palace_of_Westminster_Img,
    title: 'Вестминстерский дворец',
    translate: 'Palace of Westminster',
    rating: 4.6
  },

  { 
    id: 5,
    image: Tower_of_London_Img,
    title: 'Лондонский Тауэр',
    translate: 'Tower of London',
    rating: 4.6
  },

  { 
    id: 6,
    image: Hyde_Park_Img,
    title: 'Гайд-парк',
    translate: 'Hyde Park',
    rating: 4.7
  },

  { 
    id: 7,
    image: London_Eye_Img,
    title: 'Лондонский глаз',
    translate: 'London Eye',
    rating: 4.5
  },

  {
    id: 8,
    image: National_Gallery_Img,
    title: 'Национальная галерея',
    translate: 'National Gallery',
    rating: 4.8
  },

  {
    id: 9,
    image: Harrods_Img,
    title: 'Харродс',
    translate: 'Harrods',
    rating: 4.4
  },

  {
    id: 10,
    image: Sky_Garden_Img,
    title: 'Скай Гарден',
    translate: 'Sky Garden',
    rating: 4.6
  },

  {
    id: 11,
    image: The_Shard_Img,
    title: 'Шард',
    translate: 'The Shard',
    rating: 4.6
  },

  {
    id: 12,
    image: Westminster_Abbey_Img,
    title: 'Вестминстерское аббатство',
    translate: 'Westminster Abbey',
    rating: 4.6
  }
]