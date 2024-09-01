import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { theme } from '@/styles/theme'

export const CitiesBox = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin: 2rem 0;

  @media (max-width: 599px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

export const CityCard = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  text-decoration: none;
  box-shadow: -5px 5px 0px rgba(33, 33, 33, 1), -10px 10px 0px rgba(33, 33, 33, 0.7), -15px 15px 0px rgba(33, 33, 33, 0.4), -20px 20px 0px rgba(33, 33, 33, 0.1);

  &:hover {
    cursor: auto;
  }
`

export const CityImg = styled.div`
  aspect-ratio: 1 / 1;
  height: 15rem;
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);

  @media (max-width: 599px) {
    height: 11rem;
  }
`

export const CityTitle = styled.span`
  margin-top: 2.25rem;
  font-size: 2rem;
  font-weight: 500;
  color: ${theme.colors.white};

  @media (max-width: 599px) {
    margin-top: 1.75rem;
    font-size: 1.5rem;
  }
`

export const CityCountry = styled.span`
  margin-top: 0.5rem;
  font-size: 1.25rem;
  font-weight: 300;
  color: ${theme.colors.secondaryLight};

  @media (max-width: 599px) {
    font-size: 1rem;
  }
`

export const CityFlag = styled.img`
  margin: 1.5rem 0;
  aspect-ratio: 1 / 1;
  height: 2.25rem;

   @media (max-width: 599px) {
    margin: 1rem 0;
    height: 1.75rem;
  }
`

export const CityDescription = styled.p`
  height: 5rem;
  width: 70%;
  text-align: center;
  font-size: 1.1rem;
  font-weight: 300;
  color: ${theme.colors.white};

  @media (max-width: 599px) {
    font-size: 0.9rem;
  }
`

export const CityButton = styled.button`
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

  @media (max-width: 599px) {
    margin: 0.75rem 0 0.5rem 0;
    font-size: 0.9rem;
  }
`