import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";

import { colors } from "../../../styles";

export const MainContainer = styled.div`
  padding: 72px 60px;
  margin: 56px 0;
  display: flex;
`;

export const Img = styled.img`
  width: 100%;
  max-width: 660px;
  height: auto;
  display: block;
`;

export const SectionDescription = styled.div`
  margin-right: 200px;
`;

export const Title = styled.h3`
  font-size: 64px;
`;

export const Price = styled.div`
  font-size: 24px;
  margin: 64px 0 64px;
`;

export const FlexContainer = styled.div`
  display: flex;

  > div {
    display: flex;
    align-items: center;
  }
`;

export const FlexButton = styled.button`
  margin-left: 16px;
  background-color: transparent;
  border: ${(props) =>
    props.active
      ? `1px solid ${colors.mainBlue}`
      : "1px solid rgba(0, 0, 0, 0.2)"};
  padding: 12px;
  cursor: pointer;
`;

export const Model = styled(FlexContainer)`
  margin-bottom: 32px;
`;

export const Size = styled(FlexContainer)`
  margin-bottom: 64px;
`;

export const ButtonWpp = styled.button`
  background-color: #34af23;
  border: none;
  border-radius: 2px;
  padding: 16px;
  font-size: 16px;
  cursor: pointer;
  margin-right: 40px;
  width: 100%;
  :hover {
    background-color: blue;
  }
`;

export const StyledSwiper = styled(Swiper)`
  width: 40%; // Ajuste a porcentagem de acordo com sua necessidade
  margin-left: 0px;
`;

export const StyledSwiperSlide = styled(SwiperSlide)`
  /* Aqui você pode adicionar seus estilos */
  width: 90%; // Por exemplo
  margin: 0 auto;
  background-color: red; // ou qualquer outro estilo que você deseja aplicar
`;
