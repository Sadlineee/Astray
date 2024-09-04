import React, { ReactNode, Suspense, lazy } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import GlobalStyles from '@styles/global'
import ScrollToTop from '@components/ScrollToTop'
import PageLoad from '@components/PageLoad'

import { 
  LondonAttractionsData,
  ParisAttractionsData,  
  NewYorkAttractionsData, 
  RioDeJaneiroAttractionsData 
} from '@data/cities'

const Home = lazy(() => import('@views/Home'))
const Main = lazy(() => import('@views/Main'))
const City = lazy(() => import('@views/City'))

const LazyLoad: React.FC<{ children: ReactNode }> = ({ children }) => (
  <Suspense fallback={<PageLoad />}>
    {children}
  </Suspense>
)

const cityRoutes = [
  { path: '/main/1', component: <City attractionsData={LondonAttractionsData} cityId={1} /> },
  { path: '/main/2', component: <City attractionsData={ParisAttractionsData} cityId={2} /> },
  { path: '/main/3', component: <City attractionsData={NewYorkAttractionsData} cityId={3} /> },
  { path: '/main/4', component: <City attractionsData={RioDeJaneiroAttractionsData} cityId={4} /> }
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

      </Routes>
    </Router>
  )
}

export default App