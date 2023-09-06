import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AiOutlineHeart, AiOutlineInstagram } from "react-icons/ai";

import * as S from "./styles";

import logoAzul from "../../assets/logo-transp-azul.png";
import logoBranco from "../../assets/logo-transp-branco.png";

// eslint-disable-next-line react/prop-types
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const scrollPosition = window.pageYOffset;
      if (scrollPosition > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const Logo = () => {
    if (isScrolled) {
      return <img src={logoBranco} alt="logotipo camiwear" />;
    } else {
      return <img src={logoAzul} alt="logotipo camiwear" />;
    }
  };

  const [aside, setAside] = useState(false);

  const toggleAside = () => {
    setAside(!aside);
    console.log("fui clicado");
  };

  return (
    <>
      <S.TopMessage>
        <S.ContainerParagraph>
          <p>Frete grátis acima de R$300,00*</p>
        </S.ContainerParagraph>
      </S.TopMessage>

      {aside && <S.Overlay onClick={toggleAside} />}
      <S.MenuContainer className={aside ? "open" : ""}>
        <S.Aside>
          <S.Items>
            <S.Item to="/novidades">Novidades</S.Item>
            <S.Item to="/biquinis">Biquínis</S.Item>
            <S.Item to="/maios">Maiôs</S.Item>
            <S.Item to="/saidasdepraia">Saídas de praia</S.Item>
            <S.Item>Sobre a loja</S.Item>
          </S.Items>
        </S.Aside>
      </S.MenuContainer>

      <S.HeaderContent isScrolled={isScrolled}>
        <S.Header>
          <S.Hamburguer isScrolled={isScrolled} onClick={toggleAside}>
            <span />
            <span />
            <span />
          </S.Hamburguer>
          <S.LogoContainer>
            <Link to="/">
              <S.logo href="#">{Logo()}</S.logo>
            </Link>
          </S.LogoContainer>
          <S.Nav>
            <S.Links>
              <S.LinksItemsNav>
                <S.LinkNav to="/novidades" isScrolled={isScrolled}>
                  Novidades
                </S.LinkNav>
              </S.LinksItemsNav>
              <S.LinksItemsNav>
                <S.LinkNav to="/biquinis" isScrolled={isScrolled}>
                  Biquínis
                </S.LinkNav>
              </S.LinksItemsNav>
              <S.LinksItemsNav>
                <S.LinkNav to="/maios" isScrolled={isScrolled}>
                  Maiôs
                </S.LinkNav>
              </S.LinksItemsNav>
              <S.LinksItemsNav>
                <S.LinkNav to="/saidasdepraia" isScrolled={isScrolled}>
                  Saídas de praia
                </S.LinkNav>
              </S.LinksItemsNav>
            </S.Links>
          </S.Nav>
          <S.Links>
            <S.LinksItemsFav isScrolled={isScrolled}>
              <AiOutlineHeart size={22} />
            </S.LinksItemsFav>
            <S.LinksItemsFav isScrolled={isScrolled}>
              <a
                href="https://www.instagram.com/camiwear_/"
                target="_blank"
                rel="noreferrer"
              >
                <AiOutlineInstagram size={22} />
              </a>
            </S.LinksItemsFav>
          </S.Links>
        </S.Header>
      </S.HeaderContent>
    </>
  );
};

export default Header;
