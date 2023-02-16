import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Banner from "../Banner";
import HowItWorks from "../HowItWorks";
import Faq from "../Faq";
import Rules from "../Rules";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <HowItWorks />
      <Rules />
      <Faq />
      <Footer />
    </>
  );
};

export default Layout;
