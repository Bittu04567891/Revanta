import React from "react";
import { Container, Grid, Paper, Typography } from "@mui/material";
import { Instagram, LinkedIn } from "@mui/icons-material";
import { membersData } from "../data"; // Import your data.js
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const MembersPage = () => {
  return (
    <big>
      <Navbar />
      <Container>
        <Typography
          variant="h3"
          align="center"
          gutterBottom
          style={{ marginTop: "20px" }}
        >
          Meet Our Team
        </Typography>
        <Grid container spacing={3}>
          {membersData.map((member, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Paper elevation={3} style={{ padding: "20px" }}>
                <div style={{ marginBottom: "10px" }}>
                  <img
                    src={member.img}
                    alt={member.name}
                    style={{ maxWidth: "100%", height: "auto" }}
                  />
                </div>
                <Typography variant="h6" gutterBottom>
                  {member.name}
                </Typography>
                <Typography>{member.post}</Typography>
                <div>
                  <a
                    href={member.instagramLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Instagram />
                  </a>
                  <a
                    href={member.linkedinLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <LinkedIn />
                  </a>
                </div>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
      <Footer />
    </big>
  );
};

export default MembersPage;
