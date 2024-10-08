import styled from 'styled-components'
import { theme } from '@styles/theme'

export const AboutAttractionBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 15vw;

  @media ${theme.media.small} {
    padding: 0 5vw;
  }
`

export const AboutAttractionTitle = styled.span`
  margin: 3rem 0;
  text-align: center;
  font-size: 6rem;
  font-weight: 900;
  color: ${theme.colors.white};

  @media ${theme.media.small} {
    margin: 2rem 0;
    font-size: 2.75rem;
  }
`

export const AboutAttractionDescriptionBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1.25rem;
  padding: 3rem;
  box-shadow: -5px 5px 0px rgba(33, 33, 33, 1), -10px 10px 0px rgba(33, 33, 33, 0.7), -15px 15px 0px rgba(33, 33, 33, 0.4), -20px 20px 0px rgba(33, 33, 33, 0.1);

  @media ${theme.media.small} {
    padding: 1.5rem;
  }
`

export const AboutAttractionDescriptionTitle = styled.div`
  font-size: 2rem;
  font-weight: 600;
  color: ${theme.colors.white};

  @media ${theme.media.small} {
    font-size: 1.5rem;
  }
`

export const AboutAttractionDescriptionLine = styled.hr`
  width: 5%;
  margin: 1.5rem 0;
  border: 2px solid ${theme.colors.primary};
  border-radius: 50px;

  @media ${theme.media.small} {
    width: 15%;
    margin: 1rem 0;
    border: 1px solid ${theme.colors.primary};
  }
`

export const AboutAttractionDescriptionText = styled.p`
  font-size: 1.25rem;
  font-weight: 300;
  color: ${theme.colors.white};

  @media ${theme.media.small} {
    font-size: 1rem;
  }
`