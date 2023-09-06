import { Link } from "react-router-dom";
import styled from "styled-components";
import { breakpoints, colors } from "../../styles";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.7;
  z-index: 2;
`;

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
`;

export const Aside = styled.aside`
  padding: 16px;
`;

export const Items = styled.ul`
  width: 17vh;
`;

export const Item = styled(Link)`
  display: block;
  position: relative;
  margin-bottom: 16px;
  padding: 8px;
  border-bottom: 1px solid ${colors.grey};
  cursor: pointer;
`;

//acaba aq

export const TopMessage = styled.div`
  width: 100%;
  max-width: 100%;
  height: 40px;
  background-color: ${colors.mainBlue};

  @media (max-width: 450px) {
    height: 30px;
  }
`;

export const ContainerParagraph = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 12px;
  > p {
    color: ${colors.white};
    font-size: 16px;
    font-family: "Montserrat", sans-serif;

    @media (max-width: 450px) {
      font-size: 8px;
    }
  }
`;

export const HeaderContent = styled.div`
  position: fixed;
  top: ${(props) => (props.isScrolled ? "0" : "32px")};
  width: 100%;
  background-color: ${(props) =>
    props.isScrolled ? `${colors.mainBlue}` : "transparent"};
  height: 80px;
  z-index: 2;
  transition:
    top 0.3s ease-out,
    background-color 0.3s ease-out;

  @media (max-width: ${breakpoints.mobile}) {
    height: 50px;
    padding: 8px;
  }
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 25px;

  @media (max-width: ${breakpoints.mobile}) {
    padding: 5px;
  }
`;

export const Hamburguer = styled.div`
  width: 32px;
  span {
    height: 2px;
    display: block;
    width: 100%;
    margin-bottom: 4px;
    background-color: ${(props) =>
      props.isScrolled ? `${colors.white}` : `${colors.mainBlue}`};
  }

  @media (min-width: ${breakpoints.mobile}) {
    display: none;
  }
`;

export const LogoContainer = styled.div`
  @media (max-width: ${breakpoints.mobile}) {
    margin-left: 24px;
  }
`;

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

  > img {
    width: 100%;
    max-width: 100%;
    height: 100%;
  }
`;
export const Nav = styled.nav`
  @media (max-width: ${breakpoints.mobile}) {
    display: none;
  }
`;

export const Links = styled.ul`
  display: flex;
  gap: 40px;

  @media (max-width: ${breakpoints.mobile}) {
    gap: 7px;
  }
`;

export const LinksItemsNav = styled.li`
  font-size: 20px;
`;

export const LinkNav = styled(Link)`
  color: ${(props) =>
    props.isScrolled ? `${colors.white}` : `${colors.mainBlue}`};
`;

export const LinksItemsFav = styled.li`
  height: 25px;
  width: 25px;
  color: ${(props) =>
    props.isScrolled ? `${colors.white}` : `${colors.mainBlue}`};
`;
