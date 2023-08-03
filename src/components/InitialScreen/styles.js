import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const TopMessage = styled.div`
  width: 100%;
  max-width: 100%;
  height: 40px;
  background-color: #012545;
`

export const ContainerParagraph = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 12px;
  >p{
    color: #fff;
    font-size: 16px;
    font-family: 'Montserrat', sans-serif;
    font-size: 12px;
  }
`

export const HeaderContent = styled.div`
 position: fixed;
  top: ${props => props.isScrolled ? '0' : '32px'};
  width: 100%;
  background-color: ${props => props.isScrolled ? '#012545' : 'transparent'};
  height: 80px;
  z-index: 2;
  transition: top 0.3s ease-out, background-color 0.3s ease-out;
`

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 25px;
`
export const logo = styled.a`
  width: 164px;
  max-width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  >img{
    width: 100%;
    max-width: 100%;
    height: 100%;
  }
`

export const Links = styled.ul`
  display: flex;
  gap: 40px;
`

export const LinksItemsNav = styled.li`
  font-size: 20px;
`

export const LinkNav = styled(Link)`
  color: ${props => props.isScrolled ? '#fff' : '#012545'};
`

export const LinksItemsFav = styled.li`
  height: 25px;
  width: 25px;
  color: ${props => props.isScrolled ? '#fff' : '#012545'};
`

export const DivBanner = styled.div`
`

export const Banner = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`



