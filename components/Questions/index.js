import { useDispatch } from "react-redux";
import { actions } from "../../store";
//www.pragimtech.com/blog/reactjs/usestate-component-communication-in-react/
import { useEffect, useState } from "react";

import { Question1, Question2, Question3, Question4, Question5 } from "./Forms";

const Questions = () => {
  let information = {};
  const [name, setName] = useState();
  const [searchedWebsite, setSearchedWebsite] = useState();
  const [address, setAddress] = useState();
  const [paymentInfo, setpaymentInfo] = useState();

  const handleNameInput = (e) => {
    setName(e.target.value);
  };

  const handleSearchedWebsite = (e) => {
    setSearchedWebsite(e.target.value);
  };

  const handleAdrress = (e) => {
    setAddress(e.target.value);
  };

  const handlePaymentInfo = (e) => {
    setpaymentInfo(e.target.value);
  };

  useEffect(() => {
    information = {
      name,
      searchedWebsite,
      address,
      paymentInfo,
    };
    console.log(information);
  }, [name, searchedWebsite, address, paymentInfo]);

  const [questionNumber, setQuestionNumber] = useState(1);
  const dispatch = useDispatch();
  const handleXbtn = (e) => {
    e.preventDefault();
    dispatch(actions.toggleOverlay());
  };

  const constHandleNextBtn = (e) => {
    e.preventDefault();

    setQuestionNumber(questionNumber + 1);
    console.log(questionNumber);
  };

  return (
    <div className="overlay">
      <button onClick={handleXbtn} className="close-btn">
        X
      </button>

      <div className="m-5">
        {(questionNumber === 1 && (
          <Question1 handleNameInput={handleNameInput} />
        )) ||
          (questionNumber === 2 && (
            <Question2
              handleSearchedWebsite={handleSearchedWebsite}
              name={name}
            />
          )) ||
          (questionNumber === 3 && (
            <Question3 handleAdrress={handleAdrress} />
          )) ||
          (questionNumber === 4 && (
            <Question4
              handlePaymentInfo={handlePaymentInfo}
              paymentInfo={paymentInfo}
            />
          )) ||
          (questionNumber === 5 && (
            <Question5
              name={name}
              searchedWebsite={searchedWebsite}
              address={address}
              paymentInfo={paymentInfo}
            />
          ))}

        {/* {questionNumber === 2 && <Question2 />}
        {questionNumber === 2 && <Question2 />} */}

        {questionNumber < 5 ? (
          <button onClick={constHandleNextBtn} className="btn btn-primary">
            Next
          </button>
        ) : (
          <button className="btn btn-secondary" onClick={handleXbtn}>
            Go back
          </button>
        )}
      </div>
    </div>
  );
};

export default Questions;
