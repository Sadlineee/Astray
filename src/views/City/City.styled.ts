import styled from 'styled-components'
import { theme } from '@/styles/theme'

export const CityBox = styled.main`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
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
    grid-template-columns: repeat(1, 1fr);
    padding: 0 5vw;
  }
`