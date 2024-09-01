import styled from 'styled-components'
import { theme } from '@styles/theme'

export const FooterBox = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 8rem;
`

export const FooterText = styled.span`
  font-size: 1rem;
  font-weight: 400;
  color: ${theme.colors.secondaryLight};

  @media ${theme.media.small} {
    font-size: 0.8rem;
  }
`