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

export const ParagraphContainer = styled.div`
  margin-top: 40px;
  >h2{
    text-align: center;
    font-size: 32px;
    font-weight: bold;
  }
`

export const ItemsNav = styled.ul`
  display: flex;
  justify-content: center;
  gap: 48px;
  margin: 24px 0 56px;
`

export const ItemNav = styled.li`
  cursor: pointer;
  border-bottom: 1px solid transparent;
  &:hover{
    border-bottom: 1px solid black;
  }
`

export const CarrouselMoresSalesContent = styled.div`
  padding: 8px 40px;
`

export const InfosContainer = styled.div`
  margin: 56px 0;
  border-top: 1px solid ${colors.mainBlue};
  border-bottom: 1px solid ${colors.mainBlue};
`

export const Infos = styled.div`
  display: flex;
  justify-content: center;
  gap: 80px;
  padding: 80px;

  @media (max-width: ${breakpoints.mobile}) {
    flex-direction: column;
    align-items: center;
  }
`

export const InfosItem = styled.div`
  width: 264px;
  color: ${colors.mainBlue};
  >p {
    margin-top: 16px;
    text-align: center;
    >p{
      font-size: 11px;
    }
  }
`

export const InfosImage = styled.div`
  text-align: center;
`
