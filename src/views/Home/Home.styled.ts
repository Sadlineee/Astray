import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { theme } from '@styles/theme'

export const HomeBox = styled.main`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 8vh;
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
    flex-direction: column-reverse;
    margin-top: 0;
    padding: 0 5vw;
  }
`

export const HomeLeftSide = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;

  @media ${theme.media.small} {
    align-items: center;
    width: 100%;
  }     
`

export const HomeTextOne = styled.span`
  width: 90%;
  font-size: 4rem;
  font-weight: 900;
  color: ${theme.colors.white};
  word-wrap: break-word;

  @media ${theme.media.small} {
    text-align: center;
    width: 100%;
    font-size: 2rem;
  }
`

export const HomeLine = styled.hr`
  margin: 2.5rem 0;
  border: 3px solid ${theme.colors.primary};
  border-radius: 50px;
  animation: moving 0.75s linear forwards;
        
  @keyframes moving {
    0% { 
      width: 0% 
    }
    100% { 
      width: 55% 
    }
  }

  @media ${theme.media.small} {
    margin: 1.5rem 0;
    border: 2px solid ${theme.colors.primary};
  }
`

export const HomeTextTwo = styled.span`
  width: 90%;
  font-size: 1.75rem;
  font-weight: 400;
  color: ${theme.colors.white};

  @media ${theme.media.small} {
    text-align: center;
    width: 100%;
    font-size: 1.1rem;
  }
`

export const HomeButton = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  height: 4rem;
  width: 16rem;
  text-decoration: none;
  font-size: 1.75rem;
  font-weight: 500;
  color: ${theme.colors.white};
  background: ${theme.colors.primary};
  transition: 0.2s;
            
  &:hover {
    cursor: pointer;
    opacity: 0.6;
  }

  &:active {
    transform: scale(0.95);
  }

  @media ${theme.media.small} {
    height: 3rem;
    width: 12rem;
    font-size: 1.1rem;
  }
`

export const HomeRightSide = styled.div`
  aspect-ratio: 1 / 1;
  width: 50%;
  
  @media ${theme.media.small} {
    margin: 1rem 0 1.5rem 0;
    width: 75%;
  }
`