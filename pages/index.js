import React from "react";
import Navbar from "../components/Layouts/Navbar";
import Footer from "../components/Layouts/Footer";
import Banner from "../components/Banner";
import HowItWorks from "../components/HowItWorks";
import Faq from "../components/Faq";
import Rules from "../components/Rules";

class HomeFive extends React.Component {
  render() {
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
  }
}

export default HomeFive;
