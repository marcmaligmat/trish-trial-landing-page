import React from "react";

class Rules extends React.Component {
  render() {
    return (
      <section className="saas-work-process ptb-100">
        <div className="container">
          <div className="section-title">
            <h2>Rules</h2>
          </div>

          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="single-work-process">
                <div className="icon">
                  <img src="/facial-recognition.png" />
                </div>
                <h3>You must be a US citizen with a Valid ID </h3>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-work-process">
                <div className="icon">
                  <img src="/work-from-home.png" />
                </div>
                <h3>Only one participant is allowed per home address</h3>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-work-process">
                <div className="icon">
                  <img src="/compliant.png" />
                </div>
                <h3>You complete all steps with accurate information</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Rules;
