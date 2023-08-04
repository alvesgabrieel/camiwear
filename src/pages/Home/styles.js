import styled from 'styled-components'
import { breakpoints } from '../../styles'

export const TopMessage = styled.div`
  width: 100%;
  max-width: 100%;
  height: 40px;
  background-color: #012545;

  @media (max-width: 450px) {
      height: 30px;
    }
`

export const ContainerParagraph = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 12px;
  >p{
    color: #fff;
    font-size: 16px;
    font-family: 'Montserrat', sans-serif;

    @media (max-width: 450px) {
      font-size: 8px;
    }
  }
`

export const Banner = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;

  @media (max-width: ${breakpoints.mobile}) {
    height: 100vh; 
  }
`
