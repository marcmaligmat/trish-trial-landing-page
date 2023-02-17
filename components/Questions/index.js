import { useDispatch, useSelector } from "react-redux";
import { actions } from "../../store";

import { useState } from "react";

import {
  FormWrapper,
  Question1,
  Question2,
  Question3,
  Question4,
  Question5,
  Question6,
} from "./questions";

const Questions = () => {
  const dispatch = useDispatch();
  const questionNumber = useSelector((state) => state.questionNumber);
  const handleXbtn = (e) => {
    e.preventDefault();
    dispatch(actions.toggleOverlay());
    dispatch(actions.resetQuestionNumber());
  };

  const [information, setInformation] = useState({});

  const changeInformation = (e) => {
    setInformation({ ...information, [e.target.name]: e.target.value });
    console.log(information);
  };

  const handleNextBtn = (e) => {
    e.preventDefault();
    dispatch(actions.incrementPageNumber());
  };

  const _props = {
    information,
    changeInformation,
    handleNextBtn,
    handleXbtn,
  };

  return (
    <div className="overlay">
      <button onClick={handleXbtn} className="close-btn">
        X
      </button>

      <FormWrapper>
        {(questionNumber === 1 && <Question1 props={_props} />) ||
          (questionNumber === 2 && <Question2 props={_props} />) ||
          (questionNumber === 3 && <Question3 props={_props} />) ||
          (questionNumber === 4 && <Question4 props={_props} />) ||
          (questionNumber === 5 && <Question5 props={_props} />) ||
          (questionNumber === 6 && <Question6 props={_props} />)}
      </FormWrapper>
      {/* {questionNumber < 5 ? (
        <button onClick={handleNextBtn} className="btn btn-primary">
          Next
        </button>
      ) : (
        <button className="btn btn-warning" onClick={handleXbtn}>
          Go back
        </button>
      )} */}
    </div>
  );
};

export default Questions;
