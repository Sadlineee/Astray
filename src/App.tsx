import React, { ReactNode, Suspense, lazy } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import GlobalStyles from '@styles/global'
import ScrollToTop from '@components/ScrollToTop'
import PageLoad from '@components/PageLoad'

import { 
  LondonAttractionsData,
  ParisAttractionsData,  
  NewYorkAttractionsData, 
  RioDeJaneiroAttractionsData, 
  PragueAttractionsData,
  AmsterdamAttractionsData,
  RomeAttractionsData
} from '@data/cities'

import { 
  BuckinghamPalaceData,
  TowerBridgeData, 
  BritishMuseumData,
  PalaceOfWestminsterData,
  TowerOfLondonData,
  HydeParkData,
  LondonEyeData,
  NationalGalleryData,
  HarrodsData,
  SkyGardenData,
  TheShardData,
  WestminsterAbbeyData
} from '@data/cities/London/attractions'

import { 
  TourEiffelData,
  LouvreData,  
  ArcDeTriompheData, 
  SainteChapelleData
} from '@data/cities/Paris/attractions'

import { 
  StatueOfLibertyData, 
  TimesSquareData,
  BrooklynBridgeData,
  CentralParkData,
  EmpireStateBuildingData,
  GrandCentralTerminalData,
  MetropolitanMuseumOfArtData
} from '@data/cities/New_York/attractions'

import { 
  ChristTheRedeemerData, 
  CopacabanaBeachData 
} from '@data/cities/Rio_de_Janeiro/attractions'

import { 
  CharlesBridgeData, 
  OldTownSquareData, 
  PragueCastleData 
} from '@data/cities/Prague/attractions'

import { 
  DeWallenData,
  RijksmuseumData, 
  VondelparkData
} from '@data/cities/Amsterdam/attractions'

import { 
  ColosseumData, 
  PantheonData
} from './data/cities/Rome/attractions'

const Home = lazy(() => import('@views/Home'))
const Main = lazy(() => import('@views/Main'))
const City = lazy(() => import('@views/City'))
const Attraction = lazy(() => import('@views/Attraction'))

const LazyLoad: React.FC<{ children: ReactNode }> = ({ children }) => (
  <Suspense fallback={<PageLoad />}>
    {children}
  </Suspense>
)

const cityRoutes = [
  { path: '/main/1', component: <City attractionsData={LondonAttractionsData} cityId={1} /> },
  { path: '/main/2', component: <City attractionsData={ParisAttractionsData} cityId={2} /> },
  { path: '/main/3', component: <City attractionsData={NewYorkAttractionsData} cityId={3} /> },
  { path: '/main/4', component: <City attractionsData={RioDeJaneiroAttractionsData} cityId={4} /> },
  { path: '/main/5', component: <City attractionsData={PragueAttractionsData} cityId={5} /> },
  { path: '/main/6', component: <City attractionsData={AmsterdamAttractionsData} cityId={6} /> },
  { path: '/main/7', component: <City attractionsData={RomeAttractionsData} cityId={7} /> }
]

const attractionRoutes = [
  { path: '/main/1/1', component: <Attraction data={BuckinghamPalaceData} /> },
  { path: '/main/1/2', component: <Attraction data={TowerBridgeData} /> },
  { path: '/main/1/3', component: <Attraction data={BritishMuseumData} /> },
  { path: '/main/1/4', component: <Attraction data={PalaceOfWestminsterData} /> },
  { path: '/main/1/5', component: <Attraction data={TowerOfLondonData} /> },
  { path: '/main/1/6', component: <Attraction data={HydeParkData} /> },
  { path: '/main/1/7', component: <Attraction data={LondonEyeData} /> },
  { path: '/main/1/8', component: <Attraction data={NationalGalleryData} /> },
  { path: '/main/1/9', component: <Attraction data={HarrodsData} /> },
  { path: '/main/1/10', component: <Attraction data={SkyGardenData} /> },
  { path: '/main/1/11', component: <Attraction data={TheShardData} /> },
  { path: '/main/1/12', component: <Attraction data={WestminsterAbbeyData} /> },

  { path: '/main/2/1', component: <Attraction data={TourEiffelData} /> },
  { path: '/main/2/2', component: <Attraction data={LouvreData} /> },
  { path: '/main/2/3', component: <Attraction data={ArcDeTriompheData} /> },
  { path: '/main/2/4', component: <Attraction data={SainteChapelleData} /> },

  { path: '/main/3/1', component: <Attraction data={StatueOfLibertyData} /> },
  { path: '/main/3/2', component: <Attraction data={TimesSquareData} /> },
  { path: '/main/3/3', component: <Attraction data={BrooklynBridgeData} /> },
  { path: '/main/3/4', component: <Attraction data={CentralParkData} /> },
  { path: '/main/3/5', component: <Attraction data={EmpireStateBuildingData} /> },
  { path: '/main/3/6', component: <Attraction data={GrandCentralTerminalData} /> },
  { path: '/main/3/7', component: <Attraction data={MetropolitanMuseumOfArtData} /> },

  { path: '/main/4/1', component: <Attraction data={ChristTheRedeemerData} /> },
  { path: '/main/4/2', component: <Attraction data={CopacabanaBeachData} /> },

  { path: '/main/5/1', component: <Attraction data={CharlesBridgeData} /> },
  { path: '/main/5/2', component: <Attraction data={OldTownSquareData} /> },
  { path: '/main/5/3', component: <Attraction data={PragueCastleData} /> },

  { path: '/main/6/1', component: <Attraction data={RijksmuseumData} /> },
  { path: '/main/6/2', component: <Attraction data={VondelparkData} /> },
  { path: '/main/6/3', component: <Attraction data={DeWallenData} /> },

  { path: '/main/7/1', component: <Attraction data={ColosseumData} /> },
  { path: '/main/7/2', component: <Attraction data={PantheonData} /> }
]

const App: React.FC = () => {
  return (
    <Router>
      <GlobalStyles />
      <ScrollToTop />
      <Routes>
        <Route path='/astray' element={<LazyLoad><Home /></LazyLoad>} />
        <Route path='/main' element={<LazyLoad><Main /></LazyLoad>} />

        {cityRoutes.map(({ path, component }) => (
          <Route key={path} path={path} element={<LazyLoad>{component}</LazyLoad>} />
        ))}

        {attractionRoutes.map(({ path, component }) => (
          <Route key={path} path={path} element={<LazyLoad>{component}</LazyLoad>} />
        ))}

      </Routes>
    </Router>
  )
}

export default App