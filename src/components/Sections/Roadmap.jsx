import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import React, { useLayoutEffect, useRef } from "react";
import styled from "styled-components";
import DrawSvg from "../DrawSvg";

const Section = styled.section`
  min-height: 100vh;
  width: 100vw;
  background-color: ${(props) => props.theme.body};
  position: relative;
`;

const Title = styled.h1`
  font-size: ${(props) => props.theme.fontxxl};
  text-transform: capitalize;
  color: ${(props) => props.theme.text};
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem auto;
  border-bottom: 2px solid ${(props) => props.theme.text};
  width: fit-content;

  @media (max-width: 40em) {
    font-size: ${(props) => props.theme.fontxl};
  }
`;

const Container = styled.div`
  width: 70%;
  height: 200vh;
  background-color: ${(props) => props.theme.body};
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  @media (max-width: 64em) {
    width: 80%;
  }

  @media (max-width: 48em) {
    width: 90%;
  }
`;

const SvgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Items = styled.ul`
  list-style: none;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 48em) {
    width: 90%;
  }

  & > *:nth-of-type(2n + 1) {
    justify-content: start;

    @media (max-width: 48em) {
      justify-content: center;
    }

    div {
      border-radius: 50px 0 50px 0;
      text-align: right;

      @media (max-width: 48em) {
        border-radius: 0 50px 0 50px;
        text-align: left;

        p {
          border-radius: 0 40px 0 40px;
        }
      }
    }

    p {
      border-radius: 40px 0 40px 0;
    }
  }

  & > *:nth-of-type(2n) {
    justify-content: end;

    @media (max-width: 48em) {
      justify-content: center;
    }

    div {
      border-radius: 0 50px 0 50px;
      text-align: left;
    }

    p {
      border-radius: 0 40px 0 40px;
    }
  }
`;

const Item = styled.li`
  width: 100%;
  height: 100%;
  display: flex;

  @media (max-width: 48em) {
    justify-content: flex-end !important;
  }
`;

const ItemContainer = styled.div`
  width: 40%;
  height: fit-content;
  padding: 1rem;
  border: 3px solid ${(props) => props.theme.text};

  @media (max-width: 48em) {
    width: 70%;
  }
`;

const Box = styled.p`
  height: fit-content;
  background-color: ${(props) => props.theme.carouselColor};
  color: ${(props) => props.theme.text};
  padding: 1rem;
  position: relative;
  border: 1px solid ${(props) => props.theme.text};
`;

const SubTitle = styled.span`
  display: block;
  font-size: ${(props) => props.theme.fontxl};
  text-transform: capitalize;
  color: ${(props) => props.theme.text};

  @media (max-width: 40em) {
    font-size: ${(props) => props.theme.fontlg};
    font-weight: 600;
  }
`;
const Text = styled.span`
  display: block;
  font-size: ${(props) => props.theme.fontsm};
  text-transform: capitalize;
  color: ${(props) => props.theme.text};

  font-weight: 400;
  margin: 0.5rem 0;

  @media (max-width: 40em) {
    font-size: ${(props) => props.theme.fontxs};
  }
`;

const RoadMapItem = ({ title, subText, addToRefs }) => {
  return (
    <Item ref={addToRefs}>
      <ItemContainer>
        <Box>
          <SubTitle>{title}</SubTitle>
          <Text>{subText}</Text>
        </Box>
      </ItemContainer>
    </Item>
  );
};

const Roadmap = () => {
  const revealRefs = useRef([]);
  revealRefs.current = [];
  gsap.registerPlugin(ScrollTrigger);

  const addToRefs = (el) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };

  useLayoutEffect(() => {
    let t1 = gsap.timeline();
    revealRefs.current.forEach((el, index) => {
      t1.fromTo(
        el.childNodes[0],
        {
          y: "0",
        },
        {
          y: "-30%",

          scrollTrigger: {
            id: `section-${index + 1}`,
            trigger: el,
            start: "top center+=200px",
            end: "bottom center",
            scrub: true,
            // markers: true,
          },
        }
      );
    });

    return () => {
      if (t1) t1.kill();
    };
  }, []);

  return (
    <Section id="roadmap">
      <Title>Roadmap</Title>
      <Container>
        <SvgContainer>
          <DrawSvg />
        </SvgContainer>
        <Items>
          <Item>&nbsp;</Item>
          <RoadMapItem
            addToRefs={addToRefs}
            title="Introduction"
            subText="Sadguru Shipping Services Pvt Ltd offers top notch Custom Clearance, Freight Forwarding, Warehousing & Transport Services to its customers worldwide. Logistics in itself follows a complicated framework which makes it difficult for anyone and everyone to survive in this industry. Sadguru Shipping Services Pvt Ltd is not just anyone and definitely not as common as everyone. Its ideologies are independent, its practices are sophisticated and its quality is pure. Cargotrans Maritime Pvt Ltd combines its services with the customer requirements to custom design specific solutions for its clients."
          />
          <RoadMapItem
            addToRefs={addToRefs}
            title="Wide Business Network"
            subText="Sadguru Shipping Services Pvt Ltd has wide Business Network in all Major Ports of India. Having our Own Offices at Mundra & also we have strong Tie- up/Agents arrangements with MLO (Main Line Operator), NVOCC (Non-Vessel Operating Container Carrier& Agency Network at Indian Sub- Continents, Gulf, Upper Gulf, Far East, Australia, Red Sea, Mediterranean, European & African Sectors."
          />
          <RoadMapItem
            addToRefs={addToRefs}
            title="Highly Skilled & Qualified Staff"
            subText="Management Expertise & Staff with more than two Decades of Experience in Shipping & Logistics Industry. With a Fantastic Team to Support and Deliver Efficiently. We are here to PARTNER YOU IN YOUR GROWTH. With a Team aligned to our Mission we shall deliver on our Promises. Promise to Serve you & Our Associations with more than 50 Personnel’s across the network."
          />
          <RoadMapItem
            addToRefs={addToRefs}
            title="Our Vision"
            subText="Is To Promote Our Vision Statement, To Work In Collaboration With Our Shippers , Importers And All Channel Partners And Provide Them With Innovative , Safe And Cost Effective Logistic Solutions, Thereby Making Them Competitive In The Market Place."
          />
          <RoadMapItem
            addToRefs={addToRefs}
            title="About us"
            subText="World class custom clearing agent with own License, freight forwarding, Warehousing & transport service provider – Registered as MTO at Directorate General of Shipping (india)……."
          />
        </Items>
      </Container>
    </Section>
  );
};

export default Roadmap;
