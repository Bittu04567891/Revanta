import React from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import Members from "./components/Members";
import Newsletter from "./components/Newsletter";

const App = () => {
  return (
    <>
      <Navbar />
      <Slider />
      <Members />
      <Newsletter />
      <Footer />
    </>
  );
};

export default App;
