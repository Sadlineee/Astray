import styled from 'styled-components'
import { theme } from '@styles/theme'

export const ImgLoader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  font-family: Consolas, Menlo, Monaco, monospace;
  font-size: 5rem;
  font-weight: 900;
  color: ${theme.colors.white};

  &:before {
    content: "{";
    display: inline-block;
    animation: pulse 0.4s alternate infinite ease-in-out;
  }

  &:after {
    content: "}";
    display: inline-block;
    animation: pulse 0.4s 0.3s alternate infinite ease-in-out;
  }
    
  @keyframes pulse {
    to {
      transform: scale(0.8);
      opacity: 0.5;
    }
  }

  @media (max-width: 599px) {
    font-size: 3.5rem;
  }
`

export const Img = styled.img`
  object-fit: fill;
  height: 100%;
  width: 100%;
`