// CopyrightPage.js
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

const CopyrightPage = () => {
  return (
    <Container>
      <Navbar />
      <Content>
        <h2>Copyright Notice</h2>
        <p>
          All content on this website, including text, images, graphics, and
          other materials, is protected by copyright laws and is the property of
          Team Revanta unless otherwise stated.
        </p>
        <p>
          You may not reproduce, distribute, modify, or republish any content
          from this website without obtaining written permission from Team
          Revanta.
        </p>
        <p>
          All trademarks, logos, and other intellectual property displayed on
          this website are the registered or unregistered trademarks of their
          respective owners.
        </p>
        <p>
          For inquiries regarding the use of content or to request permission,
          please contact us at{"+91 7865784536"}
          <a href="mailto:teamrevanta@nitjsr.ac.in">teamrevanta@nitjsr.ac.in</a>
          .
        </p>
      </Content>
      <Footer />
    </Container>
  );
};

export default CopyrightPage;
