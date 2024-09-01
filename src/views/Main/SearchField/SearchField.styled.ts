import styled from 'styled-components'
import { theme } from '@/styles/theme'

export const InputText = styled.input`
  text-align: center;
  margin-top: 4rem;
  padding: 0.5rem;
  height: 4rem;
  width: 20rem;
  font-family: ${theme.fonts.primary};
  font-size: 1.25rem;
  font-weight: 300;
  color: ${theme.colors.white};
  background: none;
  border: 1px solid ${theme.colors.secondaryLight};
  box-shadow: -5px -5px 0 ${theme.colors.primary};

  &::placeholder {
    color: ${theme.colors.white};
  }

  &:focus {
    outline: none;

    &::placeholder {
      opacity: 0;
    }
  }

  @media (max-width: 599px) {
    margin-top: 3rem;
    height: 3rem;
    width: 15rem;
    font-size: 1rem;
  }
`