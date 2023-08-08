import { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, A11y } from 'swiper/modules';
import { LiaShippingFastSolid, LiaWhatsapp } from 'react-icons/lia'
import { TbReplace } from 'react-icons/tb'

import * as S from './styles'

import Header from '../../components/Header'
import banner from '../../assets/banner.png'
import banner2 from '../../assets/banner2.jpg'
import bannerMobile from '../../assets/banner-mobile.png'
import product from '../../assets/product.png'
import Footer from '../../components/Footer';

const BannerImages = [
  { id: 1, image: `${banner}` },
  { id: 2, image: `${banner2}` },
  { id: 3, image: `${banner}` }
]

const BannerImagesMobile = [
  {id: 1, image: `${bannerMobile}`},
  {id: 2, image: `${bannerMobile}`},
  {id: 3, image: `${bannerMobile}`}
]

const CarrouselMoreSales = [
  {id: 1, image: `${product}`},
  {id: 2, image: `${product}`},
  {id: 3, image: `${product}`},
  {id: 4, image: `${product}`},
  {id: 5, image: `${product}`},
  {id: 6, image: `${product}`}
]

const Home = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  const [aside, setAside] = useState(false)

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const toggleAside = () => {
    setAside(!aside)
    console.log('fui clicado')
  }

  return (
    <>
      {aside && <S.Overlay onClick={toggleAside}/>}
      <S.MenuContainer className={aside ? 'open' : ''}>
        <S.Aside>
          <S.Items>
            <S.Item>Novidades</S.Item>
            <S.Item>Roupas</S.Item>
            <S.Item>Biquinis</S.Item>
          </S.Items>
        </S.Aside>
      </S.MenuContainer>
      <S.TopMessage>
        <S.ContainerParagraph>
          <p>Frete grátis acima de R$600,00* | 10% OFF para primeira compra com o cupom WELCOME</p>
        </S.ContainerParagraph>
      </S.TopMessage>
      <Header toggleAside={toggleAside}/>
      <div>
        <Swiper>
          {(windowWidth <= 450 ? BannerImagesMobile : BannerImages).map((item) => (
            <SwiperSlide key={item.id}>
              <S.Banner src={item.image} alt="banner da loja" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div>
        <div className='container'>
          <S.ParagraphContainer>
            <h2>Mais vendidos</h2>
          </S.ParagraphContainer>
          <nav>
            <S.ItemsNav>
              <S.ItemNav>Destaques Biquinis</S.ItemNav>
              <S.ItemNav>Destaques Calçados</S.ItemNav>
              <S.ItemNav>Destaques roupas</S.ItemNav>
            </S.ItemsNav>
          </nav>
        </div>
        <S.CarrouselMoresSalesContent>
          <Swiper 
            modules={[Navigation, Pagination, A11y]}
            spaceBetween={4}
            breakpoints={{
              450: {
                slidesPerView: 1,
              },
              451: {
                slidesPerView: 3,
              }
            }}
            navigation
            pagination={{ clickable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
          >
            {CarrouselMoreSales.map((items) => (
              <SwiperSlide key={items.id}>
                <img src={items.image} alt="" />
              </SwiperSlide>
            ))}
          </Swiper>
        </S.CarrouselMoresSalesContent>
      </div>

      <S.InfosContainer>
        <S.Infos>
          <S.InfosItem>
            <S.InfosImage>
              <LiaShippingFastSolid size={48}/>
            </S.InfosImage>          
            <p>
              FRETE GRÁTIS acima de R$600,00* e ENTREGA EXPRESSA com recebimento no mesmo dia
            <p>
              (confira a disponibilidade no seu CEP e a política de promoção.)
            </p>            
            </p>
          </S.InfosItem>
          <S.InfosItem>
            <S.InfosImage>
              <LiaWhatsapp size={48}/>
            </S.InfosImage>          
            <p>Compre pelo WHATSAPP: <p>prático, rápido e fácil</p></p>
          </S.InfosItem>
          <S.InfosItem>
            <S.InfosImage>
              <TbReplace size={48}/>
            </S.InfosImage>          
            <p>Na primeira TROCA em até 15 dias ou DEVOLUÇÃO em 7 dias o frete é por nossa conta</p>
          </S.InfosItem>
        </S.Infos>
      </S.InfosContainer>
      <Footer />
    </>
  )
}

export default Home
