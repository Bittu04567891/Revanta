import styled from "styled-components";
import {
  Facebook,
  FavoriteBorderOutlined,
  Instagram,
  LinkedIn,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@mui/icons-material";

const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  /* background-color:rgba(0,0,0,0.2); */
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;
`;

const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 350px;
  display: flex;
  align-content: center;
  justify-content: center;
  background-color: #f5fbfd;
  position: relative;

  &:hover ${Info} {
    opacity: 1;
  }
`;
const Circle = styled.div`
  /* width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: white;
  position: absolute; */
`;
const Image = styled.img`
  height: 75%;
  mix-blend-mode: darken;
  z-index: 2;
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 5px;
  transition: all 0.5s ease;

  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
`;
const Post = styled.div`
  font-weight: 800;
  color: #110f0f;
  margin: 17rem -6rem;
`;
const Pst = styled.h2`
  margin-top: 7cm;
  justify-content: center;
`;

const Member = ({ item }) => {
  return (
    <Container>
      <Image src={item.img} />
      <Post>{item.post}</Post>
      <Info>
        <Icon>
          <a
            href={item.instagramLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram />
          </a>
        </Icon>
        <Icon>
          <a href={item.linkedinLink} target="_blank" rel="noopener noreferrer">
            <LinkedIn />
          </a>
        </Icon>
        <Icon>
          <a href={item.facebookLink} target="_blank" rel="noopener noreferrer">
            <Facebook />
          </a>
        </Icon>
      </Info>
    </Container>
  );
};

export default Member;
