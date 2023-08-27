// AboutPage.js
import React from "react";
import { styled } from "styled-components";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Container = styled.div`
  /* padding: 50px;
  background-color: #f5f5f5;
  color: #333;
  letter-spacing: 2px; */
`;

const Content = styled.div`
  margin-top: 30px;
  font-size: 18px;
  line-height: 1.6;

  h2 {
    font-size: 24px;
    margin-bottom: 15px;
  }

  p {
    margin-bottom: 15px;
  }
`;
const Image = styled.img`
  height: 50%;
  width: 50%;
`;

const AboutPage = () => {
  return (
    <Container>
      <Navbar />
      <Content>
        <h2>About Team Revanta</h2>
        <Image src="http://archive.nitjsr.ac.in/gallery/Photos/clubs/Revanta//revanta.jpg" />
        <p>
          Team Revanta is a dedicated group of individuals who share a common
          passion for innovation and sustainable technology. Our team comprises
          students from diverse backgrounds who come together to design, build,
          and race electric and solar vehicles.
        </p>
        <p>
          With a mission to promote clean and green transportation, we
          participate in various national and international competitions. Our
          journey is marked with dedication, collaboration, and a relentless
          pursuit of excellence.
        </p>
        <p>
          We believe that sustainable solutions are crucial for the future of
          transportation. Through our projects, we aim to push the boundaries of
          what's possible and contribute to the development of cutting-edge
          vehicles that are not only efficient but also environmentally
          friendly.
        </p>
        <p>
          Join us on our journey to create a brighter, cleaner future through
          innovative engineering and a passion for sustainable mobility.
        </p>
      </Content>
      <Footer />
    </Container>
  );
};

export default AboutPage;
