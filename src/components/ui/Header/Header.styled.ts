import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { theme } from '@styles/theme'

export const HeaderBox = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 15vw;
  height: 5rem;

  @media ${theme.media.small} {
    padding: 0 5vw;
    height: 4rem;
  }
`

export const AppTitle = styled(Link)`
  text-decoration: none;
  font-family: ${theme.fonts.secondary};
  font-size: 2.5rem;
  font-weight: 400;
  color: ${theme.colors.primary};

  @media ${theme.media.small} {
    font-size: 2rem;
  }
`

export const TelegramLink = styled(Link)`
  aspect-ratio: 1 / 1;
  height: 2rem;
  text-decoration: none;
  font-size: 2rem;
  color: #25A1DE;
  transition: 0.2s;
            
  &:hover {
    cursor: pointer;
    opacity: 0.6;
  }
            
  &:active {
    transform: scale(0.95);
  }
    
  @media ${theme.media.small} {
    height: 1.5rem;
    font-size: 1.5rem;
  }
`