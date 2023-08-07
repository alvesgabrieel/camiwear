import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.7;
  z-index: 2;
`

export const MenuContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 50%;
  background-color: ${colors.mainBlue};
  z-index: 3;
  color: ${colors.white};
  display: none;

  &.open {
    display: flex;
  }
`

export const Aside = styled.aside`
  padding: 16px;
`

export const Items = styled.ul`
  width: 17vh;
`

export const Item = styled.li`
position: relative;
  margin-bottom: 16px;
  padding: 8px;
  border-bottom: 1px solid ${colors.grey};
  cursor: pointer;
`

export const TopMessage = styled.div`
  width: 100%;
  max-width: 100%;
  height: 40px;
  background-color: ${colors.mainBlue};

  @media (max-width: 450px) {
      height: 30px;
    }
`

export const ContainerParagraph = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 12px;
  >p{
    color: ${colors.white};
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
