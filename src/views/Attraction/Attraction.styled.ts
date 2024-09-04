import styled from 'styled-components'

export const AttractionBox = styled.main`
  animation: mount 0.75s ease-out;

  @keyframes mount {
    0% { 
        opacity: 0 
    }
    100% { 
        opacity: 1 
    }
  }
`