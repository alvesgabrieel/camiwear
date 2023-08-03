import {createGlobalStyle} from 'styled-components'

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
