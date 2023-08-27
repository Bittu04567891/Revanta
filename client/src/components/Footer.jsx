import {
  FacebookOutlined,
  Instagram,
  LinkedIn,
  LocalPhone,
  LocationOn,
  MailOutline,
  Twitter,
} from "@mui/icons-material";

import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  background-color: #94dd94;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
const Logo = styled.h1`
  font-weight: bolder;
`;
const Desc = styled.p`
  margin: 20px 0px;
`;
const SocialContainer = styled.div`
  display: flex;
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
const Center = styled.div`
  flex: 1;
  padding: 20px;
`;
const Title = styled.h3`
  margin-bottom: 30px;
`;
const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;
const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;
const Right = styled.div`
  flex: 1;
  padding: 20px;
`;
const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;
const Photo = styled.img`
  width: 30%;
  height: 30%;
`;
const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>Team Revanta</Logo>
        <Desc>
          The Electric Solar Vehicle Team, Revanta, is at the forefront of
          innovation and sustainable transportation solutions. With a passion
          for clean energy and cutting-edge technology, Revanta is dedicated to
          designing, building, and racing solar-powered vehicles that showcase
          the potential of renewable energy in the automotive sector.
        </Desc>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <FacebookOutlined />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <Twitter />
          </SocialIcon>
          <SocialIcon color="0e76a8">
            <LinkedIn />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>

          <Link to="/Revanta/about">
            <ListItem>About</ListItem>
          </Link>
          <ListItem>Services</ListItem>
          <ListItem>Contact Us</ListItem>
          <ListItem>Sponsor Us</ListItem>
          <ListItem>Alumni</ListItem>
          <Link to="/Revanta/members">
            <ListItem>Members</ListItem>
          </Link>
          <ListItem>Copyright</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <LocationOn style={{ marginRight: "10px" }} />
          TEAM REVANTA,NIT Jamshedpur
        </ContactItem>
        <ContactItem>
          <LocalPhone style={{ marginRight: "10px" }} /> +91 7755937498
        </ContactItem>
        <ContactItem>
          <MailOutline style={{ marginRight: "10px" }} />{" "}
          teamrevanta@nitjsr.ac.in
        </ContactItem>
        <Photo src="data:image/jpeg;base64,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" />
      </Right>
    </Container>
  );
};

export default Footer;
