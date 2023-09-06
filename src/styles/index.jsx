import { createGlobalStyle } from "styled-components";

export const colors = {
  mainBlue: "#012545",
  white: "#fff",
  grey: "#938c8c4a",
  backgroundColor: "#ffeed0",
  lightgrey: "#737277",
};

export const breakpoints = {
  desktop: "1024px",
  tablet: "768px",
  mobile: "450px",
};

const GlobalStyle = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Playfair Display', serif;
    list-style: none;
  }

  body{
    background-color: ${colors.backgroundColor};
  }

  a {
  color: inherit; 
  text-decoration: none;
  }

.container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;

    @media (max-width: ${breakpoints.mobile}) {
      max-width: 80%
    }
}
`;
export default GlobalStyle;
