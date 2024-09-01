import { createGlobalStyle } from 'styled-components'
import { theme } from './theme'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    min-height: 100vh;
    font-family: ${theme.fonts.primary};
    background: ${theme.colors.bg};
    
    &::-webkit-scrollbar {
      width: 0.5rem;
    }

    &::-webkit-scrollbar-track {
      background-color: ${theme.colors.bg};
    }

    &::-webkit-scrollbar-thumb {
      background-color: ${theme.colors.white};
    }
  }
`