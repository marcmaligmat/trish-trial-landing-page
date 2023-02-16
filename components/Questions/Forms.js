export const Question1 = ({ handleNameInput }) => {
  return (
    <form>
      <div className="form-group">
        <label htmlFor="fullname">
          Before we start, what’s your FULL legal name. You can’t use a nickname
          or an abbreviation.
        </label>
        <input
          onChange={handleNameInput}
          type="text"
          className="form-control"
          id="fullname"
          aria-describedby="emailHelp"
          placeholder="Enter Full Name"
        />
        <small id="emailHelp" className="form-text text-muted">
          We'll never share your information with anyone else.
        </small>
      </div>
    </form>
  );
};

export const Question2 = ({ handleSearchedWebsite, name }) => {
  return (
    <>
      <div className="custom-control custom-radio">
        <div>
          Cool, glad to have you on board {name}! How did you find out about our
          website?
        </div>
        <label className="mr-sm-2" htmlFor="inlineFormCustomSelect"></label>
        <input
          type="radio"
          id="customRadio1"
          name="customRadio"
          value="From a friend"
          className="custom-control-input"
          onChange={handleSearchedWebsite}
        />
        <label className="custom-control-label" htmlFor="customRadio1">
          From a friend
        </label>
      </div>
      <div className="custom-control custom-radio">
        <input
          type="radio"
          id="customRadio2"
          name="customRadio"
          value="Google"
          className="custom-control-input"
          onChange={handleSearchedWebsite}
        />
        <label className="custom-control-label" htmlFor="customRadio2">
          Google
        </label>
      </div>
      <div className="custom-control custom-radio">
        <input
          type="radio"
          id="customRadio3"
          name="customRadio"
          value="Influencer"
          className="custom-control-input"
          onChange={handleSearchedWebsite}
        />
        <label className="custom-control-label" htmlFor="customRadio3">
          Influencer
        </label>
      </div>
      <div className="custom-control custom-radio">
        <input
          type="radio"
          id="customRadio4"
          name="customRadio"
          value="Other"
          className="custom-control-input"
          onChange={handleSearchedWebsite}
        />
        <label className="custom-control-label" htmlFor="customRadio4">
          Other
        </label>
      </div>
    </>
  );
};

export const Question3 = ({ handleAdrress }) => {
  return (
    <form>
      <div className="form-group">
        <label htmlFor="fullname">
          Great! What’s your legal address? This must match your Drivers
          License. We just have to make sure that you are who you say you are.
        </label>
        <input
          type="email"
          className="form-control"
          id="fullname"
          aria-describedby="emailHelp"
          placeholder="Enter address"
          onChange={handleAdrress}
        />
        <small id="emailHelp" className="form-text text-muted">
          We'll never share your information with anyone else.
        </small>
      </div>
    </form>
  );
};

export const Question4 = ({ handlePaymentInfo }) => {
  return (
    <>
      <div className="custom-control custom-radio">
        <div>
          Cool, we’re almost done asking questions. Can you select the way you
          preferred to be paid, and enter in your payment information?
        </div>
        <label className="mr-sm-2" htmlFor="inlineFormCustomSelect"></label>
        <input
          type="radio"
          id="customRadio1"
          name="customRadio"
          className="custom-control-input"
          onChange={handlePaymentInfo}
          value="Cashapp"
        />
        <label className="custom-control-label" htmlFor="customRadio1">
          Cashapp
        </label>
      </div>
      <div className="custom-control custom-radio">
        <input
          type="radio"
          id="customRadio2"
          name="customRadio"
          className="custom-control-input"
          onChange={handlePaymentInfo}
          value="Paypal"
        />
        <label className="custom-control-label" htmlFor="customRadio2">
          Paypal
        </label>
      </div>
      <div className="custom-control custom-radio">
        <input
          type="radio"
          id="customRadio3"
          name="customRadio"
          className="custom-control-input"
          onChange={handlePaymentInfo}
          value="Zelle"
        />
        <label className="custom-control-label" htmlFor="customRadio3">
          Zelle
        </label>
      </div>
    </>
  );
};

export const Question5 = ({ name, searchedWebsite, address, paymentInfo }) => {
  return (
    <>
      <div>
        Woohoo! Based on your location, you are QUALIFIED! You’re on your way to
        get your $50 in just a few minutes. Here’s whats next: Today, our Online
        Shopping Client needs help buying products online. The products are
        usually digital and limited per purchaser, such as concert or sports
        tickets, so our Shopping Client needs your help. We need your permission
        to buy products online and for that we are giving you $50 today. On the
        next page, you will be sent to our screening system to make sure that
        you are who you are. You will need a copy of your ID, whether it be a
        drivers license or a State ID. It’s an instant verification system and
        its quite easy. After that, we will give you an agreement to sign. Be
        sure to review it. By signing that agreement you will get paid $50 with
        the opportunity to earn more income afterwards!
      </div>
      <br></br>
      <div className="mt">Name: {name}</div>
      <div className="mt">Heard from: {searchedWebsite}</div>
      <div className="mt">Address: {address}</div>
      <div className="mt">Payment Info: {paymentInfo}</div>
    </>
  );
};
