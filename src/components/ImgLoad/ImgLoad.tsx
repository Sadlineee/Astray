import React, { useState } from 'react'
import { Img, ImgLoader } from './ImgLoad.styles'
import { ImgProps } from '@/types/ImgProps'

const ImgLoad: React.FC<ImgProps> = React.memo(({ src, alt }) => {
  const [loading, setLoading] = useState<boolean>(true)

  const handleLoad = () => {
    setLoading(false)
  }

  return (
    <>
      {loading && <ImgLoader /> }
      <Img
        src={src}
        alt={alt}
        onLoad={handleLoad}
        style={{ display: loading ? 'none' : 'block' }}
      />
    </>
  )
})

export default ImgLoad