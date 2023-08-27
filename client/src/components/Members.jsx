import styled from "styled-components";
import { heads } from "../data";
import Member from "./Member";
import { Link } from "react-router-dom";
import {
  ArrowRightAltOutlined,
  ChevronRightOutlined,
} from "@mui/icons-material";
const Arrow = styled.div`
  padding-top: 4cm;
  font-weight: 600;
`;
const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
const Wrapper = styled.header`
  font-weight: 600;
  font-size: large;
`;

const Members = () => {
  // const handleReload = () => {
  //   window.location.reload(); // Reload the page
  // };
  return (
    <Container>
      {heads?.map((item) => (
        <Member item={item} key={item.id} />
      ))}
      <Arrow>
        <Link to="/Revanta/members">
          <ChevronRightOutlined />
        </Link>
      </Arrow>
    </Container>
  );
};

export default Members;
