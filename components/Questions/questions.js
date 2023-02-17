import styles from "./Forms.module.css";

export const FormWrapper = (props) => {
  return <div className={styles.formWrapper}>{props.children}</div>;
};

export const Question1 = ({ props }) => {
  const { changeInformation, handleNextBtn } = props;

  return (
    <>
      <div className={styles.questionContainer}>
        <div className={styles.step}>Step: 1/6</div>
        <div className={styles.labelText}>What is your full legal name?</div>
        <div className={styles.inputBox}>
          <input
            name="name"
            type="text"
            required="required"
            onChange={changeInformation}
          />
          <span>Full Name</span>
        </div>
        <span className={styles.notice}>
          You can’t use a nickname or an abbreviation.
        </span>
        <button onClick={handleNextBtn} className={styles.nextBtn}>
          NEXT
        </button>
      </div>
    </>
  );
};

export const Question2 = ({ props }) => {
  const { changeInformation, handleNextBtn, information } = props;
  const { name } = information;
  return (
    <div className={styles.questionContainer}>
      <div className={styles.step}>Step: 2/6</div>
      <div className={styles.labelText}>
        Cool, glad to have you on board {name}! How did you find out about our
        website?
      </div>
      <div className={styles.radioChoices}>
        <input
          name="howDidFound"
          type="radio"
          onChange={changeInformation}
          id="fromAfriend"
          value="from a friend"
        />
        <label htmlFor="fromAfriend">From a friend</label>

        <input
          name="howDidFound"
          type="radio"
          onChange={changeInformation}
          id="google"
          value="google"
        />
        <label htmlFor="google">Google</label>

        <input
          name="howDidFound"
          type="radio"
          onChange={changeInformation}
          id="influencer"
          value="influencer"
        />
        <label htmlFor="influencer">Influencer</label>
        <input
          name="howDidFound"
          type="radio"
          onChange={changeInformation}
          id="other"
          value="other"
        />
        <label htmlFor="other">Other</label>
      </div>
      <button onClick={handleNextBtn} className={styles.nextBtn}>
        NEXT
      </button>
    </div>
  );
};

export const Question3 = ({ props }) => {
  const { changeInformation, handleNextBtn } = props;
  return (
    <div className={styles.questionContainer}>
      <div className={styles.step}>Step: 3/6</div>
      <div className={styles.labelText}>Great! What is your legal address?</div>
      <div className={styles.inputBox}>
        <input
          name="address"
          type="text"
          required="required"
          onChange={changeInformation}
        />
        <span>Address</span>
      </div>
      <span className={styles.notice}>
        This must match your Drivers License. We just have to make sure that you
        are who you say you are.
      </span>
      <button onClick={handleNextBtn} className={styles.nextBtn}>
        NEXT
      </button>
    </div>
  );
};

export const Question4 = ({ props }) => {
  const { changeInformation, handleNextBtn, information } = props;

  return (
    <div className={styles.questionContainer}>
      <div className={styles.step}>Step: 4/6</div>
      <div className={styles.labelText}>
        Cool, we’re almost done asking questions. Can you select the way you
        preferred to be paid, and enter in your payment information?
      </div>
      <div className={styles.radioChoices}>
        <input
          name="paymentInfo"
          type="radio"
          onChange={changeInformation}
          id="cashapp"
          value="from a friend"
        />
        <label htmlFor="cashapp">Cashapp</label>

        <input
          name="paymentInfo"
          type="radio"
          onChange={changeInformation}
          id="paypal"
          value="paypal"
        />
        <label htmlFor="paypal">Paypal</label>

        <input
          name="paymentInfo"
          type="radio"
          onChange={changeInformation}
          id="zelle"
          value="zelle"
        />
        <label htmlFor="zelle">Zelle</label>
      </div>
      <button onClick={handleNextBtn} className={styles.nextBtn}>
        NEXT
      </button>
    </div>
  );
};

export const Question5 = ({ props }) => {
  const { handleNextBtn, information } = props;
  return (
    <>
      <div className={styles.questionContainer}>
        <div className={styles.step}>Step: 5/6</div>
        <div className={styles.labelTextSmall}>
          Woohoo! Based on your location, you are QUALIFIED! You’re on your way
          to get your $50 in just a few minutes. Here’s whats next: Today, our
          Online Shopping Client needs help buying products online. The products
          are usually digital and limited per purchaser, such as concert or
          sports tickets, so our Shopping Client needs your help. We need your
          permission to buy products online and for that we are giving you $50
          today. On the next page, you will be sent to our screening system to
          make sure that you are who you are. You will need a copy of your ID,
          whether it be a drivers license or a State ID. It’s an instant
          verification system and its quite easy. After that, we will give you
          an agreement to sign. Be sure to review it. By signing that agreement
          you will get paid $50 with the opportunity to earn more income
          afterwards!
        </div>
        <div className={styles.radioChoices}>
          <input name="accept" type="radio" id="yes" value="yes" />
          <label htmlFor="yes">I understand</label>

          <input
            className={styles.noRadio}
            name="accept"
            type="radio"
            id="no"
            value="no"
          />
          <label htmlFor="no">No, I don't need free $50.</label>
        </div>

        <button onClick={handleNextBtn} className={styles.nextBtn}>
          VERIFY
        </button>
      </div>
    </>
  );
};

export const Question6 = ({ props }) => {
  const { handleNextBtn, information, handleXbtn } = props;
  return (
    <>
      <div className={styles.questionContainer}>
        <div className={styles.step}>Step: 6/6 Verification</div>
        <div className={styles.labelTextSmall}>
          Do you have your ID ready? (Yes/No) If NO Take your time, don’t sweat
          it. Feel free to come back whenever you have your ID ready. In the
          meanwhile, here’s some more information about how this works!
        </div>

        <br></br>
        <h1>Information</h1>
        <div className="mt">Name: {information.name}</div>
        <div className="mt">Heard from: {information.howDidFound}</div>
        <div className="mt">Address: {information.address}</div>
        <div className="mt">Payment Info: {information.paymentInfo}</div>

        <button onClick={handleXbtn} className={styles.nextBtn}>
          OK
        </button>
        <br></br>
      </div>
    </>
  );
};
