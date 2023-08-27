import React from "react";
import { styled } from "styled-components";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { alum } from "../data";
import { LinkedIn } from "@mui/icons-material";
const Container = styled.div`
  .alumni-list {
    display: flex;
    flex-wrap: wrap;
  }

  .alumni-item {
    border: 1px solid #ccc;
    padding: 20px;
    margin: 10px;
    width: 300px;
  }

  .alumni-item img {
    width: 100%;
    max-height: 200px;
    object-fit: cover;
  }

  .alumni-item a {
    display: block;
    margin-top: 10px;
  }
`;
const Alumni = () => {
  return (
    <Container>
      <Navbar />
      <div>
        <h1>Alumni</h1>
        <div className="alumni-list">
          {alum.map((alumni) => (
            <div key={alumni.id} className="alumni-item">
              <img src={alumni.img} alt={alumni.name} />
              <h2>{alumni.name}</h2>
              <p>{alumni.post}</p>
              <p>{alumni.class}</p>
              <a
                href={alumni.LinkedIn}
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedIn />
              </a>
            </div>
          ))}
        </div>
        <Link to="/">Back to Home</Link>
      </div>
      <Footer />
    </Container>
  );
};

export default Alumni;
