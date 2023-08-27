// TeamPage.js
import React from "react";
import { styled } from "styled-components";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Container = styled.div``;

const TeamMember = styled.div`
  display: flex;
  margin-bottom: 40px;

  img {
    width: 150px;
    height: 150px;
    object-fit: cover;
    border-radius: 50%;
    margin-right: 20px;
  }

  div {
    flex: 1;
  }
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
  height: 60%;
  width: 60%;
  justify-content: center;
`;

const Team = () => {
  return (
    <Container>
      <Navbar />
      <Content>
        <h2>Meet the Team</h2>
        <Image src="https://media.licdn.com/dms/image/C511BAQH_7kS2xQKSGw/company-background_10000/0/1570021544917?e=1693760400&v=beta&t=PA5BscOknBccR52ov5vInaMZLJS-G8JRqQHMIIP1a9o" />
        <TeamMember>
          <img
            src="https://media.licdn.com/dms/image/D4D03AQFQ_xwaw4t8xQ/profile-displayphoto-shrink_800_800/0/1684477556238?e=1698883200&v=beta&t=vYAcPADNA0jYE8ligtPou_2TXvCMz06sLa8UURnhpxI"
            alt="Team Member"
          />
          <div>
            <h3>Rajat Raj</h3>
            <p>Founder and Team Lead</p>
            <p>
              Rajat is a passionate person for sustainable transportation and
              leads Team Revanta's innovative projects.
            </p>
          </div>
        </TeamMember>
        <TeamMember>
          <img
            src="https://media.licdn.com/dms/image/C4D03AQGvnprtiSQFlA/profile-displayphoto-shrink_800_800/0/1640655628507?e=1698883200&v=beta&t=hd0yQDX48rNJpH0KaC-EbaRaarcUq1TWeQ8mQDxaj9Y"
            alt="Team Member"
          />
          <div>
            <h3>Aditya Jha</h3>
            <p> Co-Founder and Team Lead</p>
            <p>
              Aditya is a passionate person for sustainable transportation and
              leads Team Revanta's innovative projects.
            </p>
          </div>
        </TeamMember>
        <TeamMember>
          <img
            src="https://media.licdn.com/dms/image/C4D03AQF0Xctnuir-AA/profile-displayphoto-shrink_800_800/0/1656081725388?e=1698883200&v=beta&t=Jx7XKSwJcuJjHBSr1az_4tqH9sJ89qs2-Ar5f6gHef8"
            alt="Team Member"
          />
          <div>
            <h3>Prabhat</h3>
            <p> Team Manager</p>
            <p>
              Prabhat is a passionate person for sustainable transportation and
              leads Team Revanta's innovative projects.
            </p>
          </div>
        </TeamMember>
        {/* Add more TeamMember components as needed */}
      </Content>
      <Footer />
    </Container>
  );
};

export default Team;
