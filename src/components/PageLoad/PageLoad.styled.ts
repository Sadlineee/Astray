import styled from 'styled-components'
import { theme } from '@styles/theme'

export const PageLoadBg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 85vh;
`

export const PageLoader = styled.div`
  aspect-ratio: 1 / 1;
  height: 2.5rem;
  border: 3px solid;
  border-color: ${theme.colors.bg} ${theme.colors.primary};
  border-radius: 50%;
  animation: rotation 1s infinite;

  @keyframes rotation {
    to { 
      transform: rotate(.5turn) 
    }
  }
`