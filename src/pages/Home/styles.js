import styled from "styled-components";
import { breakpoints, colors } from "../../styles";

export const Banner = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;

  @media (max-width: ${breakpoints.mobile}) {
    height: 100vh;
  }
`;

export const ParagraphContainer = styled.div`
  margin-top: 40px;
  > h2 {
    text-align: center;
    font-size: 32px;
    font-weight: bold;
    font-family: "Great Vibes", cursive;
  }
`;

export const ItemsNav = styled.ul`
  display: flex;
  justify-content: center;
  gap: 48px;
  margin: 24px 0 56px;
`;

export const ItemNav = styled.li`
  cursor: pointer;
  border-bottom: 1px solid transparent;
  &:hover {
    border-bottom: 1px solid black;
  }
`;

export const CarrouselMoresSalesContent = styled.div`
  padding: 8px 40px;
`;

export const CarouselImage = styled.img`
  width: 100%;
  max-width: 400px;
  height: auto;
  display: block;
`;

export const ImageDescription = styled.p`
  margin-top: 8px;
`;

export const InfosContainer = styled.div`
  margin: 56px 0;
  border-top: 1px solid ${colors.mainBlue};
  border-bottom: 1px solid ${colors.mainBlue};
`;

export const Infos = styled.div`
  display: flex;
  justify-content: center;
  gap: 80px;
  padding: 80px;

  @media (max-width: ${breakpoints.mobile}) {
    flex-direction: column;
    align-items: center;
  }
`;

export const InfosItem = styled.div`
  width: 264px;
  color: ${colors.mainBlue};
  > p {
    margin-top: 16px;
    text-align: center;
    > p {
      font-size: 11px;
    }
  }
`;

export const InfosImage = styled.div`
  text-align: center;
`;
