import { AboutAttractionProps } from '@/types/AboutAttractionProps'
import * as LouvreImg from '@assets/images/cities/Paris/attractions/Louvre'

export const LouvreData: AboutAttractionProps[] = [

  { 
    id: 1,
    title: 'Лувр',
    image: [LouvreImg.Louvre_1_Img, LouvreImg.Louvre_2_Img, LouvreImg.Louvre_3_Img, LouvreImg.Louvre_4_Img, LouvreImg.Louvre_5_Img],
    history: 'Изначально Лувр был возведен в качестве крепости в конце XII века при короле Филиппе Августе для защиты Парижа от атак врагов. На протяжении веков он неоднократно перестраивался и расширялся, служив в разное время и королевской резиденцией, и административным зданием. В период Французской революции, в 1793 году Лувр был преобразован в государственный музей, доступный для широкой публики.',
    architecture: 'Архитектурный комплекс Лувра состоит из нескольких величественных сооружений, выстроенных в различных архитектурных стилях от Средневековья до Нового времени, что придаёт ему особое очарование. В 1989 году в центральном дворе (Кур Наполеон) была установлена знаменитая стеклянная пирамида, спроектированная китайско-американским архитектором Йо Мин Пеем. Эта смелая и соверemенная конструкция стала символом Лувра и вызвала значительные обсуждения, но быстро завоевала признание и стала неотъемлемой частью музея.'
  }
]