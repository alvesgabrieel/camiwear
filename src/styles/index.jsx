import {createGlobalStyle} from 'styled-components'

export const breakpoints = {
  desktop: '1024px',
  tablet: '768px',
  mobile: '450px'
}

const GlobalStyle = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Playfair Display', serif;
    list-style: none;
  }

  a {
  color: inherit; 
  text-decoration: none;
}

`
export default GlobalStyle
