import styled from 'styled-components'
import { theme } from '@styles/theme'

export const MainBox = styled.main`
  display: flex;
  flex-direction: column;
  padding: 0 15vw;
  animation: mount 0.75s ease-out;

  @keyframes mount {
    0% { 
      opacity: 0 
    }
    100% { 
      opacity: 1 
    }
  }

  @media ${theme.media.small} {
    padding: 0 5vw;
  }
`

export const MainTopSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  @media ${theme.media.small} {
    flex-direction:column-reverse;
  }
`

export const MainLeftSide = styled.div`
  display: flex;
  flex-direction: column;
  width: 52%;

  @media ${theme.media.small} {
    align-items: center;
    width: 100%;
  }
`

export const MainText = styled.span`
  width: 90%;
  font-size: 4rem;
  font-weight: 900;
  color: ${theme.colors.white};

  @media (max-width: 599px) {
    text-align: center;
    font-size: 1.75rem;
  }
`

export const MainRightSide = styled.div`
  width: 48%;

  @media ${theme.media.small} {
    width: 100%;
  }
`

export const Circle = styled.svg`
  aspect-ratio: 1 / 1;
  width: 100%;
  animation: rotation 60s linear infinite;

  @keyframes rotation {
    0% { 
      transform: rotate(0) 
    }
    100% { 
      transform: rotate(360deg) 
    }
  }

  @media ${theme.media.small} {
    height: 18rem;
  }
`

export const CircleText = styled.text`
  font-size: 0.6rem;
  font-weight: 300;
  letter-spacing: 2.25px;
  fill: ${theme.colors.primary};
`