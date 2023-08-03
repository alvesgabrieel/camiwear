import {useState, useEffect} from 'react'
import { AiOutlineHeart, AiOutlineInstagram } from 'react-icons/ai'
import { Swiper, SwiperSlide } from 'swiper/react'

import * as S from './styles'

import logoAzul from '../../assets/logo-transp-azul.png'
import logoBranco from '../../assets/logo-transp-branco.png'
import banner from '../../assets/banner.png'
import banner2 from '../../assets/banner2.jpg'

const BannerImages = [
  { id: 1, image: `${banner}` },
  { id: 2, image: `${banner2}` },
  { id: 3, image: `${banner}` }
]

const InitialScreen = () => {
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
      <S.TopMessage>
        <S.ContainerParagraph>
          <p>Free Ground Shipping - All items on sale cannot be returned or exchanged.</p>
        </S.ContainerParagraph>
      </S.TopMessage>
      <S.HeaderContent isScrolled={isScrolled}>
        <S.Header>
          <div>
            <S.logo href="#">
              {Logo()}
            </S.logo>
          </div>
          <nav>
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
          </nav>
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
      <S.DivBanner>
        <Swiper>
          {BannerImages.map((item) => (
            <SwiperSlide key={item.id}>
              <S.Banner src={item.image} alt="banner da loja" />
            </SwiperSlide>
          ))}
        </Swiper>

      </S.DivBanner>
    </>
  )
}

export default InitialScreen
