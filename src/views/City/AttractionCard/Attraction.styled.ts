import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { theme } from '@styles/theme'
import { IoMdStar } from 'react-icons/io'

export const AttractionBox = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  text-decoration: none;
  box-shadow: -5px 5px 0px rgba(33, 33, 33, 1), -10px 10px 0px rgba(33, 33, 33, 0.7), -15px 15px 0px rgba(33, 33, 33, 0.4), -20px 20px 0px rgba(33, 33, 33, 0.1);
  transition: 0.2s;

  &:hover {
    cursor: auto;
  }

  &:focus {
    outline: none;
  }
`

export const AttractionImg = styled.div`
  aspect-ratio: 1 / 1;
  height: 15rem;
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);

  @media ${theme.media.small} {
    height: 11rem;
  }
`

export const AttractionTitle = styled.span`
  width: 80%;
  margin-top: 1.5rem;
  text-align: center;
  font-size: 1.75rem;
  font-weight: 700;
  color: ${theme.colors.white};

  @media ${theme.media.small} {
    width: 90%;
    margin-top: 1.25rem;
    font-size: 1.5rem;
  }
`

export const AttractionTranslate = styled.span`
  margin-top: 0.5rem;
  text-align: center;
  font-size: 1.25rem;
  font-weight: 300;
  color: ${theme.colors.secondaryLight};

  @media ${theme.media.small} {
    font-size: 1rem;
  }
`

export const AttractionLine = styled.hr`
  margin: 2rem 0;
  width: 15%;
  border: 2px solid ${theme.colors.primary};
  border-radius: 50px;

  @media ${theme.media.small} {
    margin: 1.5rem 0;
  }
`

export const AttractionRating = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;
  font-size: 1.5rem;
  font-weight: 400;
  color: ${theme.colors.white};

  @media ${theme.media.small} {
    font-size: 1.25rem;
  }
`

export const StarIcon = styled(IoMdStar)`
  font-size: 1.25rem;
  color: #F7C923;
`

export const AttractionButton = styled.button`
  margin: 2.25rem 0 0.5rem 0;
  font-size: 1rem;
  color: ${theme.colors.secondaryLight};
  background: none;
  border: none;
  transition: 0.2s;

  &:hover {
    cursor: pointer;
    opacity: 0.6;
  }

  &:active {
    transform: scale(0.95);
  }

  @media ${theme.media.small} {
    margin: 2rem 0 0.5rem 0;
    font-size: 0.9rem;
  }
`