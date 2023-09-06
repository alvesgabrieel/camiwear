import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import { LiaShippingFastSolid, LiaWhatsapp } from "react-icons/lia";

import * as S from "./styles";

import Footer from "../../components/Footer";

//imgs
import product from "../../assets/product.png";
import cami1 from "../../assets/cami1.jpg";
import cami2 from "../../assets/cami2.jpg";
import cami3 from "../../assets/cami3.jpg";
import Header from "../../components/Header";

import banner from "../../assets/banner.png";
import banner2 from "../../assets/banner2.jpg";
import bannerMobile from "../../assets/banner-mobile.png";

const BannerImages = [
  { id: 1, image: `${banner}` },
  { id: 2, image: `${banner2}` },
  { id: 3, image: `${banner}` },
];

const BannerImagesMobile = [
  { id: 1, image: `${bannerMobile}` },
  { id: 2, image: `${bannerMobile}` },
  { id: 3, image: `${bannerMobile}` },
];

const CarrouselMoreSales = [
  {
    id: 1,
    image: `${cami1}`,
    description: "descricao do produto 1",
    route: "/produtos/conjuntomay",
  },
  { id: 2, image: `${cami2}`, description: "descricao do produto 2" },
  { id: 3, image: `${cami3}`, description: "descricao do produto 3" },
  { id: 4, image: `${product}` },
  { id: 5, image: `${product}` },
  { id: 6, image: `${product}` },
];

const Home = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <Header />

      <div>
        <Swiper>
          {(windowWidth <= 450 ? BannerImagesMobile : BannerImages).map(
            (item) => (
              <SwiperSlide key={item.id}>
                <S.Banner src={item.image} alt="banner da loja" />
              </SwiperSlide>
            )
          )}
        </Swiper>
      </div>

      <div>
        <div className="container">
          <S.ParagraphContainer>
            <h2>Mais vendidos</h2>
          </S.ParagraphContainer>
          <nav>
            <S.ItemsNav>
              <S.ItemNav>Destaques Biquinis</S.ItemNav>
              <S.ItemNav>Destaques Maiôs</S.ItemNav>
              <S.ItemNav>Destaques Saídas de praia</S.ItemNav>
            </S.ItemsNav>
          </nav>
        </div>
        <S.CarrouselMoresSalesContent>
          <Swiper
            modules={[Navigation, Pagination, A11y]}
            spaceBetween={1}
            breakpoints={{
              450: {
                slidesPerView: 1,
              },
              451: {
                slidesPerView: 3,
              },
            }}
            navigation
            pagination={{ clickable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
          >
            {CarrouselMoreSales.map((items) => (
              <SwiperSlide key={items.id}>
                <Link to={items.route}>
                  <S.CarouselImage src={items.image} alt="" />
                  <S.ImageDescription>{items.description}</S.ImageDescription>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </S.CarrouselMoresSalesContent>
      </div>

      <S.InfosContainer>
        <S.Infos>
          <S.InfosItem>
            <S.InfosImage>
              <LiaShippingFastSolid size={48} />
            </S.InfosImage>
            <p>
              FRETE GRÁTIS acima de R$300,00*
              <p>
                (confira a disponibilidade no seu CEP e a política de promoção.)
              </p>
            </p>
          </S.InfosItem>
          <S.InfosItem>
            <S.InfosImage>
              <LiaWhatsapp size={48} />
            </S.InfosImage>
            <p>
              Compre pelo WHATSAPP: <p>prático, rápido e fácil</p>
            </p>
          </S.InfosItem>
        </S.Infos>
      </S.InfosContainer>
      <Footer />
    </>
  );
};

export default Home;
