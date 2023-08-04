import {useState, useEffect} from 'react'
import { AiOutlineHeart, AiOutlineInstagram } from 'react-icons/ai'

import * as S from './styles'

import logoAzul from '../../assets/logo-transp-azul.png'
import logoBranco from '../../assets/logo-transp-branco.png'

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
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  const Logo = () => {
    if(isScrolled) {
      return <img src={logoBranco} alt="logotipo camiwear" />
    } else {
      return <img src={logoAzul} alt="logotipo camiwear" />
    }
  }

  return (
    <>
      <S.HeaderContent isScrolled={isScrolled}>
        <S.Header>
          <S.Hamburguer isScrolled={isScrolled}>
            <span />
            <span />
            <span />
          </S.Hamburguer>
          <S.LogoContainer>
            <S.logo href="#">
              {Logo()}
            </S.logo>
          </S.LogoContainer>
          <S.Nav>
            <S.Links>
              <S.LinksItemsNav>
                <S.LinkNav to="/novidades" isScrolled={isScrolled}>Novidades</S.LinkNav>
              </S.LinksItemsNav>
              <S.LinksItemsNav>
                <S.LinkNav to="/roupas" isScrolled={isScrolled}>Roupas</S.LinkNav>
              </S.LinksItemsNav>
              <S.LinksItemsNav>
                <S.LinkNav to="/biquinis" isScrolled={isScrolled}>Biquinis</S.LinkNav>
              </S.LinksItemsNav>
            </S.Links>
          </S.Nav>
          <S.Links>
            <S.LinksItemsFav isScrolled={isScrolled}><AiOutlineHeart size={22}/></S.LinksItemsFav>
            <S.LinksItemsFav isScrolled={isScrolled}>
              <a href="https://www.instagram.com/camiwear_/" target='_blank' rel="noreferrer">
                <AiOutlineInstagram size={22}/>
              </a>
            </S.LinksItemsFav>
          </S.Links>
        </S.Header>
      </S.HeaderContent>
    </>
  )
}

export default Header
