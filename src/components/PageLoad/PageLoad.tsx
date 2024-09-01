import React from 'react'
import { PageLoader, PageLoadBg } from './PageLoad.styled'

const PageLoad: React.FC = () => {
  return (
    <PageLoadBg>
      <PageLoader />
    </PageLoadBg>
  )
}

export default PageLoad