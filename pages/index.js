import React from "react";
import Layout from "../components/Layouts";

import Questions from "../components/Questions";
import { actions } from "../store";
import { useSelector } from "react-redux";

const Home = () => {
  const showOverlay = useSelector((state) => state.showQuestionsOverlay);
  return (
    <>
      {showOverlay && <Questions />}
      {!showOverlay && <Layout />}
    </>
  );
};

export default Home;
