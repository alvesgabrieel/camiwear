import { Swiper, SwiperSlide } from 'swiper/react'

import * as S from './styles'

import Header from '../../components/Header'
import banner from '../../assets/banner.png'
import banner2 from '../../assets/banner2.jpg'
import bannerMobile from '../../assets/banner-mobile.png'
import { useEffect, useState } from 'react'

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

const Home = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <>
    <S.TopMessage>
        <S.ContainerParagraph>
          <p>Free Ground Shipping - All items on sale cannot be returned or exchanged.</p>
        </S.ContainerParagraph>
      </S.TopMessage>
      <Header />
      <div>
      <Swiper>
          {(windowWidth <= 450 ? BannerImagesMobile : BannerImages).map((item) => (
            <SwiperSlide key={item.id}>
              <S.Banner src={item.image} alt="banner da loja" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  )
}

export default Home
