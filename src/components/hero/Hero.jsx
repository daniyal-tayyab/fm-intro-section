import React, { useEffect, useState } from "react";

import {
  Container,
  ContentSection,
  MediaSection,
  ClientSection,
} from "./Hero.styles";

import desktopHero from "../../assets/images/image-hero-desktop.png";
import mobileHero from "../../assets/images/image-hero-mobile.png";
import audiophile from "../../assets/images/client-audiophile.svg";
import databiz from "../../assets/images/client-databiz.svg";
import maker from "../../assets/images/client-maker.svg";
import meet from "../../assets/images/client-meet.svg";

import Button from "../button/Button";

const Hero = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return (
    <Container>
      <ContentSection>
        <h1>
          Make <span>remote work</span>
        </h1>
        <p>
          Get your team in sync, no matter your location. Streamline processes,
          create team rituals, and watch productivity soar
        </p>
        <Button type="inverted">Learn More</Button>
        <ClientSection>
          <img src={databiz} alt="databiz" />
          <img src={audiophile} alt="audiophile" />
          <img src={meet} alt="meet" />
          <img src={maker} alt="maker" />
        </ClientSection>
      </ContentSection>
      <MediaSection>
        {windowWidth >= 900 ? (
          <img src={desktopHero} alt="hero" />
        ) : (
          <img src={mobileHero} alt="hero" />
        )}
      </MediaSection>
    </Container>
  );
};

export default Hero;
