import { AboutAttractionProps } from '@/types/AboutAttractionProps'
import * as BritishMuseumImg from '@assets/images/cities/London/attractions/British_Museum'

export const BritishMuseumData: AboutAttractionProps[] = [

  { 
    id: 1,
    title: 'Британский музей',
    image: [BritishMuseumImg.British_Museum_1_Img, BritishMuseumImg.British_Museum_2_Img, BritishMuseumImg.British_Museum_3_Img, BritishMuseumImg.British_Museum_4_Img, BritishMuseumImg.British_Museum_5_Img],
    history: 'Британский музей был основан на базе коллекции сэра Ганса Слоана, врача и натуралиста, который завещал свою огромную коллекцию нации. Первая версия музея открылась для публики 15 января 1759 года в особняке Монтегю-хаус. Впоследствии, из-за стремительного роста коллекции, здание музея несколько раз перестраивалось, и нынешнее здание, спроектированное архитектором сэром Робертом Смарти, было завершено в середине 19 века.',
    architecture: 'Архитектурный ансамбль музея представляет собой образец неоклассической архитектуры. Особенно выделяются монументальный фасад с колоннами и купол Большого двора, также известного как Двор имени Королевы Елизаветы II, который был открыт в 2000 году. Этот впечатляющий крытый атриум, спроектированный архитекторами Норманом Фостером и партнерством «Foster and Partners», является крупнейшим крытым общественным пространством в Европе.'
  }
]