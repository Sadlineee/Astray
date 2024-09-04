import styled from 'styled-components'
import { theme } from '@styles/theme'

export const ImgScrollBox = styled.div`
  display: flex;
  flex-direction: row;
  width: calc(50vh * 10);
  animation: scroll 25s linear infinite;

  @keyframes scroll {
    0% { 
      transform: translateX(0) 
    }
    100% { 
      transform: translateX(calc(-50vh * 5)) 
    }
  }

  @media ${theme.media.small} {
    width: calc(35vh * 10);

    @keyframes scroll {
      0% { 
        transform: translateX(0) 
      }
      100% { 
        transform: translateX(calc(-35vh * 5)) 
      }
    }
  }
`

export const ImgScrollElement = styled.div`
  aspect-ratio: 1 / 1;
  height: 50vh;

  @media ${theme.media.small} {
    height: 35vh;
  }
`