import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {
  accentColor,
  backgroundColor,
  Card,
  Image,
  LinkText,
  MainSection,
  whiteColor,
} from "../../ui";
import HeaderCTA from "./HeaderCTA";
import Navbar from "./Navbar";

const InnerHeaders = styled.div`
  max-width: 1180px;
  width: 100%;
  margin: 0 auto;
  padding: 20px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  i {
    display: none;
    color: ${accentColor};
  }

  @media screen and (max-width: 1024px) {
    i {
      display: block;
    }
  }
`;

const CTA = styled.div`
  display: flex;
  align-items: center;
  width: 800px;
  justify-content: space-between;

  @media screen and (max-width: 1024px) {
    position: fixed;
    top: 60px;
    background-color: ${backgroundColor};
    height: 50vh;
    width: 100vw;
    flex-direction: column;
    align-items: flex-start;
  }
`;

const Header = () => {
  const [scrolled, setScrolled] = useState(true);
  const [mobileMenu, setMobileMenu] = useState(false);

  const HeaderShadow = () => {
    if (window.pageYOffset > 1) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    HeaderShadow();
    window.addEventListener("scroll", HeaderShadow);
    return () => {
      window.removeEventListener("scroll", HeaderShadow);
    };
  }, []);

  return (
    <>
      <MainSection
        width="100vw"
        top="0"
        left="0"
        position="fixed"
        mddisplay="none"
        index="20"
        bg={whiteColor}
      >
        {scrolled && (
          <Card
            width="100%"
            height="100%"
            bg="transparent"
            shadow="0 3px 20px rgb(179, 179, 179)"
            position="absolute"
            top="0"
            index="-1"
          ></Card>
        )}
        <InnerHeaders>
          <LinkText to="/">
            <Image width="100px" src="asset/logo.png" alt="logo" />
          </LinkText>
          <i
            className={mobileMenu ? "fa-solid fa-xmark" : "fa-solid fa-bars"}
            onClick={() => {
              mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
            }}
          />
          <CTA>
            <Navbar />
            <HeaderCTA />
          </CTA>
        </InnerHeaders>
      </MainSection>
    </>
  );
};

export default Header;
