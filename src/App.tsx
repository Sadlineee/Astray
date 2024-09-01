import React, { ReactNode, Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import GlobalStyles from '@styles/global'
import ScrollToTop from '@components/ScrollToTop'
import PageLoad from '@components/PageLoad'

const Home = React.lazy(() => import('@views/Home'))
// const Main = React.lazy(() => import('@views/Main/Main'))

const LazyLoad: React.FC<{ children: ReactNode }> = ({ children }) => ( 
  <Suspense fallback={ <PageLoad /> }> 
    {children} 
  </Suspense> 
) 

const App: React.FC = () => {
  return(
    <Router>
      <GlobalStyles />
      <ScrollToTop />
      <Routes>
        <Route path='/astray' element={<LazyLoad><Home /></LazyLoad>} />
        {/* <Route path='/main' element={<LazyLoad><Main /></LazyLoad>} /> */}
      </Routes>
    </Router>
  )
}

export default App