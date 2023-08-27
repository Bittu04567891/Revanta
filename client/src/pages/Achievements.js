import React from "react";
import { styled } from "styled-components";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { sliderItems } from "../data";

const Container = styled.div`
  /* padding: 50px;
  background-color: #f5f5f5;
  color: #333;
  letter-spacing: 2px; */
`;

const Image = styled.img`
  display: block;
  margin: 0 auto;
  height: 50%;
  width: 50%;
  justify-content: center;
  margin-left: 20%;
  padding: 3px;
`;

const Content = styled.div`
  margin-top: 30px;
  font-size: 18px;
  line-height: 1.6;

  h2 {
    justify-content: center;
    font-weight: 600;
    font-size: 24px;
    margin-bottom: 15px;
  }

  p {
    margin-bottom: 15px;
  }
`;

const Achievements = () => {
  return (
    <Container>
      <Navbar />
      <h2>Team Achievements</h2>
      <Image
        src="http://archive.nitjsr.ac.in/gallery/Photos/clubs/Revanta//2015-070.jpg"
        alt="Achievement"
      />
      <Content>
        <p>
          Team Revanta has made the institute proud by securing 14th rank out of
          195 teams participating from all over the nation. This year, the team
          took part in the Electric Solar Vehicle Championship-2017 held at
          A.P., led by Gaurav Kumar Singh (EEE). Our vehicle 'ELAN' was declared
          as one of the lightest and most efficient vehicles of the event.
        </p>
        <p>
          It is a matter of pride for the institute as we stood 9th among 85
          teams from all over the country. Currently, the team is engaged in
          doing research to improve the mileage and efficiency of the
          Electric-Solar Vehicle. The team is also looking forward to making an
          ultra-light, cost-effective Hybrid-Vehicle.
        </p>
        <p>
          Our journey is marked with dedication, innovation, and a commitment to
          push boundaries. We continuously strive for excellence, and our
          achievements are a testament to the hard work and passion of our team.
        </p>
      </Content>
      <Footer />
    </Container>
  );
};

export default Achievements;
