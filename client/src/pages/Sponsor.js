// SponsorPage.js
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

const SponsorPage = () => {
  return (
    <Container>
      <Navbar />
      <Content>
        <h2>Become a Sponsor</h2>
        <p>
          Team Revanta offers unique sponsorship opportunities for companies and
          organizations looking to support sustainable technology and
          innovation.
        </p>
        <p>As a sponsor, you will:</p>
        <ul>
          <li>
            Align your brand with a passionate team committed to sustainable
            transportation
          </li>
          <li>Showcase your commitment to innovation and green solutions</li>
          <li>
            Receive visibility through our events, competitions, and online
            presence
          </li>
          <li>
            Collaborate on cutting-edge projects in the field of electric and
            solar vehicles
          </li>
          <li>
            Engage with our team members and contribute to a cleaner future
          </li>
        </ul>
        <p>
          We offer various sponsorship tiers to accommodate different levels of
          support. Join us in our mission to drive change and create a more
          sustainable world through technology and collaboration.
        </p>
        <p>
          For sponsorship inquiries, please contact us at{"+91 8289987656"}
          <a href="teamrevanta@gmail.com">teamrevanta@gmail.com</a>.
        </p>
      </Content>
      <Footer />
    </Container>
  );
};

export default SponsorPage;
