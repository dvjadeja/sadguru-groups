import React from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay, EffectCards } from "swiper";
// import img1 from "../assets/Nfts/bighead.svg";
// import img2 from "../assets/Nfts/bighead-1.svg";
// import img3 from "../assets/Nfts/bighead-2.svg";
// import img4 from "../assets/Nfts/bighead-3.svg";
// import img5 from "../assets/Nfts/bighead-4.svg";
// import img6 from "../assets/Nfts/bighead-5.svg";
// import img7 from "../assets/Nfts/bighead-6.svg";
// import img8 from "../assets/Nfts/bighead-7.svg";
// import img9 from "../assets/Nfts/bighead-8.svg";
// import img10 from "../assets/Nfts/bighead-9.svg";
import img1 from "../assets/images/custom.jpg";
import img2 from "../assets/images/img1.jpg";
import img3 from "../assets/images/containerShip1.jpg";
import img4 from "../assets/images/containerWarehouse.jpg";
import img5 from "../assets/images/freightForwarding.jpg";
import img6 from "../assets/images/containerShip2.jpg";
import img7 from "../assets/images/containerShip3.jpg";
import img8 from "../assets/images/containerShip4.jpg";
import img9 from "../assets/images/containerShip5.jpg";
import img10 from "../assets/images/container.jpg";
import Arrow from "../assets/Arrow.svg";

const Container = styled.div`
  width: 25vw;
  height: 70vh;

  @media (max-width: 70em) {
    height: 60vh;
  }

  @media (max-width: 64em) {
    height: 50vh;
    width: 30vw;
  }

  @media (max-width: 48em) {
    height: 50vh;
    width: 40vw;
  }

  @media (max-width: 30em) {
    height: 45vh;
    width: 60vw;
  }

  .swiper {
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
    background-color: ${(props) => props.theme.carouselColor};
    border-radius: 20px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    img {
      margin-bottom: 5rem;
      display: block;
      width: 100%;
      height: auto;
      object-fit: cover;
    }
    
    @media (max-width: 64em) {
      img{
        margin-bottom: 10px;
      }
    }
  }

  .swiper-button-next {
    color: ${(props) => props.theme.text};
    right: 0;
    top: 60%;
    width: 4rem;

    background-image: url(${Arrow});
    background-position: center;
    background-size: cover;

    &:after {
      display: none;
    }

    @media (max-width: 64em) {
      width: 3rem;
    }

    @media (max-width: 30em) {
      width: 2rem;
    }
  }

  .swiper-button-prev {
    color: ${(props) => props.theme.text};
    left: 0;
    top: 60%;

    width: 4rem;
    transform: rotate(180deg);

    background-image: url(${Arrow});
    background-position: center;
    background-size: cover;

    &:after {
      display: none;
    }

    @media (max-width: 64em) {
      width: 3rem;
    }

    @media (max-width: 30em) {
      width: 2rem;
    }
  }
`;

const Carousel = () => {
  return (
    <Container>
      <Swiper
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{
          type: "fraction",
        }}
        scrollbar={{
          draggable: true,
        }}
        navigation={true}
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards, Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          {" "}
          <img src={img1} alt="images" />
          <span>Custom Clearence</span>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src={img2} alt="images" />
          <span>Transportation</span>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src={img3} alt="images" />
          <span>Freight Forwardig</span>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src={img4} alt="images" />
          <span>Warehousing</span>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src={img5} alt="images" />
          <span>Container LCL Movement</span>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src={img6} alt="images" />
          <span>Project Cargo</span>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src={img7} alt="images" />
          <span>Vessel Chater</span>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src={img8} alt="images" />
          <span>Providing Cretificates</span>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src={img9} alt="images" />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src={img10} alt="images" />
        </SwiperSlide>
      </Swiper>
    </Container>
  );
};

export default Carousel;
