import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { navs } from "../../data";
import { HashLink as Link } from "react-router-hash-link";
import {
  accentColor,
  backgroundColor,
  Card,
  Image,
  LinkText,
  MainSection,
  Text,
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
    width: 88%;
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
    display: none;
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
        display="block"
        width="100%"
        top="0"
        left="0"
        position="fixed"
        index="20"
        bg="transparent"
      >
        {scrolled && (
          <Card
            width="100%"
            height="100%"
            bg={whiteColor}
            shadow="0 0px 10px rgb(5, 45, 19, 0.5)"
            position="absolute"
            top="0"
            index="-1"
          />
        )}
        {mobileMenu && (
          <Card
            display="none"
            mddisplay="block"
            width="100%"
            height="100%"
            bg={whiteColor}
            position="absolute"
            top="0"
            index="-1"
          />
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
        {mobileMenu && (
          <Card
            width="100%"
            height="100%"
            position="fixed"
            display="none"
            mddisplay="block"
            bg={whiteColor}
            top="0"
            left="0"
          >
            <Card
              width="88%"
              margin="0 auto"
              display="flex"
              flexdirection="column"
              gap="30px"
            >
              {navs.map((nav, index) => (
                <Card key={index}>
                  {nav.inpage === "" ? (
                    <>
                      <Link
                        style={{ fontSize: "18px", color: "black" }}
                        mdsize="18px"
                        to={nav.path}
                        key={index}
                        onClick={() => setMobileMenu(false)}
                      >
                        {nav.nav}
                      </Link>
                    </>
                  ) : (
                    <>
                      <LinkText mdsize="18px" to={nav.path} key={index}>
                        {nav.nav}
                      </LinkText>
                    </>
                  )}
                </Card>
              ))}

              <a href="https://forms.gle/ffU1sWCg9nhQXywy8">
                <Text
                  color={whiteColor}
                  bg={accentColor}
                  heavy
                  padding="10px"
                  radius="10px"
                >
                  Join Our Waitlist
                </Text>
              </a>
            </Card>
          </Card>
        )}
      </MainSection>
    </>
  );
};

export default Header;
