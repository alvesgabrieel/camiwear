import { BsWhatsapp } from "react-icons/bs";

import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

import may1 from "../../../assets/may1.jpg";
import may2 from "../../../assets/may2.jpg";
import may3 from "../../../assets/may3.jpg";

import * as S from "./styles";
import { useState } from "react";

const ImagesConjuntoMay = [
  { id: 1, image: `${may1}` },
  { id: 2, image: `${may2}` },
  { id: 3, image: `${may3}` },
];

const ConjuntoMay = () => {
  const [price, setPrice] = useState("with");

  const priceWithFlower = () => {
    setPrice("with");
  };

  const priceWithoutFlower = () => {
    setPrice("without");
  };

  return (
    <>
      <Header />
      <S.MainContainer>
        <S.StyledSwiper
          navigation
          pagination={{ clickable: true }}
          slidesPerView={1}
        >
          {ImagesConjuntoMay.map((img) => (
            <S.StyledSwiperSlide key={img.id}>
              <S.Img src={img.image} alt="Conjunto May" />
            </S.StyledSwiperSlide>
          ))}
        </S.StyledSwiper>
        <S.SectionDescription>
          <S.Title>Conjunto May</S.Title>
          <S.Price>{price === "with" ? "R$145,00" : "R$135,00"}</S.Price>
          <S.Model>
            <div>MODELOS:</div>{" "}
            <S.FlexButton onClick={priceWithFlower} active={price === "with"}>
              com flor
            </S.FlexButton>
            <S.FlexButton
              onClick={priceWithoutFlower}
              active={price === "without"}
            >
              sem flor
            </S.FlexButton>
          </S.Model>
          <S.Size>
            <div>TAMANHOS:</div> <S.FlexButton>P</S.FlexButton>
            <S.FlexButton>M</S.FlexButton>
            <S.FlexButton>G</S.FlexButton>
          </S.Size>
          <S.ButtonWpp
            onClick={() => {
              window.open(
                "https://api.whatsapp.com/send?phone=5584988904994&text=Olá!%20Estou%20interessado%20no%20Conjunto%20May",
                "_blank"
              );
            }}
          >
            Chamar no WhatsApp <BsWhatsapp />{" "}
          </S.ButtonWpp>
        </S.SectionDescription>
      </S.MainContainer>
      <Footer />
    </>
  );
};

export default ConjuntoMay;
