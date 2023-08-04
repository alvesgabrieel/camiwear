import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { breakpoints } from '../../styles'

export const HeaderContent = styled.div`
 position: fixed;
  top: ${props => props.isScrolled ? '0' : '32px'};
  width: 100%;
  background-color: ${props => props.isScrolled ? '#012545' : 'transparent'};
  height: 80px;
  z-index: 2;
  transition: top 0.3s ease-out, background-color 0.3s ease-out;

  @media (max-width: ${breakpoints.mobile}) {
    height: 50px;
    padding: 8px;
  }
`

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 25px;

  @media (max-width: ${breakpoints.mobile}) {
    padding: 5px;
  }
`

export const Hamburguer = styled.div`
  width: 32px;
  span{
    height: 2px;
    display: block;
    width: 100%;
    margin-bottom: 4px;
    background-color: ${props => props.isScrolled ? '#fff' : '#012545'};
  }

  @media (min-width: ${breakpoints.mobile}) {
    display: none;
  }
`

export const LogoContainer = styled.div`
  @media (max-width: ${breakpoints.mobile}) {
    margin-left: 24px;
  }
`

export const logo = styled.a`
  width: 164px;
  max-width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: ${breakpoints.mobile}) {
      width: 100px;
    }

  >img{
    width: 100%;
    max-width: 100%;
    height: 100%;
  }
`
export const Nav = styled.nav`
  @media (max-width: ${breakpoints.mobile}) {
      display: none;
  }
`

export const Links = styled.ul`
  display: flex;
  gap: 40px;

  @media (max-width: ${breakpoints.mobile}) {
    gap: 7px;
  }
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


