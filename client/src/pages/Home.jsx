import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";
import Members from "../components/Members";
import Newsletter from "../components/Newsletter";
import MembersPage from "../pages/MembersPage";

const Home = () => {
  return (
    <>
      <Navbar />
      <Slider />
      <h1
        style={{
          color: "olive",
          textAlign: "center",
          backgroundColor: "#94dd94",
        }}
      >
        Team Head
      </h1>
      <Members />
      <Newsletter />
      <Footer />
    </>
  );
};

export default Home;
