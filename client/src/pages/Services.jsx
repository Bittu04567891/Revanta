// ServicesPage.js
import React from "react";
import { styled } from "styled-components";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Container = styled.div``;

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

const ServicesPage = () => {
  return (
    <Container>
      <Navbar />
      <Content>
        <h2>Our Services</h2>
        <p>
          Team Revanta offers a range of services to cater to various needs in
          the field of sustainable transportation and engineering.
        </p>
        <p>Our services include:</p>
        <ul>
          <li>Design and Development of Electric and Solar Vehicles</li>
          <li>Consultation on Clean and Green Transportation Solutions</li>
          <li>Workshops and Training on Electric Vehicle Technology</li>
          <li>
            Customized Vehicle Modifications for Efficiency and Performance
          </li>
          <li>Collaboration with Industries for Research and Innovation</li>
        </ul>
        <p>
          Whether you're looking to create a sustainable vehicle, gain insights
          into electric vehicle technology, or collaborate on innovative
          projects, Team Revanta is here to help you achieve your goals.
        </p>
      </Content>
      <Footer />
    </Container>
  );
};

export default ServicesPage;
