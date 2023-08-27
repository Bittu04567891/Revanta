// ContactUsPage.js
import React from "react";
import { styled } from "styled-components";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  FacebookOutlined,
  Instagram,
  LinkedIn,
  Twitter,
} from "@mui/icons-material";

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
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;
const SocialContainer = styled.div`
  display: flex;
`;

const Contact = () => {
  return (
    <Container>
      <Navbar />
      <Content>
        <h2>Contact Us</h2>
        <SocialContainer>
          <a href="https://m.facebook.com/aboutrevanta/" target="_blank">
            <SocialIcon color="3B5999">
              <FacebookOutlined />
            </SocialIcon>
          </a>
          <a
            href="https://www.instagram.com/revanta_nit_jsr/?hl=en"
            target="_blank"
          >
            <SocialIcon color="E4405F">
              <Instagram />
            </SocialIcon>
          </a>
          <SocialIcon color="55ACEE">
            <Twitter />
          </SocialIcon>
          <a
            href="https://www.linkedin.com/company/team-revanta/mycompany/"
            target="_blank"
          >
            <SocialIcon color="0e76a8">
              <LinkedIn />
            </SocialIcon>
          </a>
        </SocialContainer>
        <p>
          Have questions or want to get in touch with Team Revanta? Feel free to
          reach out to us using the contact details provided below.
        </p>
        <p>
          Email:{" "}
          <a href="mailto:teamrevanta@nitjsr.ac.in">info@teamrevanta.com</a>
        </p>
        <p>Phone: +123-456-7890</p>
        <p>Address: Hostel K ,Nit Jamshedpur</p>
        <p>Connect with us on social media:</p>
      </Content>
      <Footer />
    </Container>
  );
};

export default Contact;
