import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import React, { useLayoutEffect, useRef } from "react";
import styled from "styled-components";
import Accordian from "../Accordian";

const Section = styled.section`
  min-height: 100vh;
  height: auto;
  width: 100vw;
  background-color: ${(props) => props.theme.text};
  position: relative;
  color: ${(props) => props.theme.body};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Title = styled.h1`
  font-size: ${(props) => props.theme.fontxxl};
  text-transform: uppercase;
  color: ${(props) => props.theme.body};
  margin: 1rem auto;
  border-bottom: 2px solid ${(props) => props.theme.body};
  width: fit-content;

  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontxl};
  }
`;

const Container = styled.div`
  width: 75%;
  margin: 2rem auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 64em) {
    width: 80%;
  }

  @media (max-width: 48em) {
    width: 90%;
    flex-direction: column;

    & > *:last-child {
      & > *:first-child {
        margin-top: 0;
      }
    }
  }
`;

const Box = styled.div`
  width: 45%;

  @media (max-width: 64em) {
    width: 90%;
    align-self: center;
  }
`;

const Faq = () => {
  const ref = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  useLayoutEffect(() => {
    let element = ref.current;

    ScrollTrigger.create({
      trigger: element,
      start: "top top",
      end: "bottom top",
      pin: true,
      pinSpacing: false,
      scrub: true,
    });

    return () => {
      // ScrollTrigger.kill()
    };
  }, []);

  return (
    <Section ref={ref} id="faq">
      <Title>Faq</Title>
      <Container>
        <Box>
          <Accordian
            title="Business Network"
            children="Our expertise is in the field of Exports for Agriculture products, Metal products, Pharmaceutical products, Wood, Fertilisers, Tiles, Granite, Stones, Sanitary Wares, Construction Materials,Machinery, Auto parts, De-Oiled Cake etc."
          />
          <Accordian
            title="Member Of Motion Logistics Network"
            children="Through motion logistics network we are connected to a worldwide group of associates in china , europe north america and south east asia."
          />
          <Accordian
            title="Multimodal Transport Operator ( Own B. L. ) Registered With Director General Of Shipping"
            children="We are able to provide our own bl, help the customer with all sort smooth transaction associated with our own bl and also help them with our associates worldwide."
          />
        </Box>
        <Box>
          <Accordian
            title="Various Other Industry Bodies"
            children="We are networked and in continuous interaction with industry bodies like cii, fokia , various chamber of commerce, help our customers to generate preferential certificate of origins and other various certifications necessary for exports and imports."
          />
          <Accordian
            title="Full Container and LCL Movement"
            children="On Account of the experienced team and learning from its associate partners, Sadguru Shipping Services Pvt Ltd has acquired and unparalled Vocabulary of Logistics. Our in depth understanding of Port regulations and custom clearance places us a bar above the rest"
          />
          <Accordian
            title="Suppy Chain Management"
            children="Our Supply Chain Management is unlike any other company in the domain. We Cherish our client and hence maintain deep rooted professional and personal relationship with them."
          />
        </Box>
      </Container>
    </Section>
  );
};

export default Faq;
