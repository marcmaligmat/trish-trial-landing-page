const HowItWorks = () => {
  return (
    <section className="how-it-works ptb-100">
      <div className="container">
        <div className="section-title">
          <h2>How it works</h2>
          <div className="bar"></div>
        </div>

        <div className="row">
          <div className="col-lg-3 col-md-6">
            <div className="single-work-process">
              <div className="icon">
                <img src="/file.png" />
              </div>
              <h3 className="text-sm">Sign up and get qualified</h3>
              {/* <p>Morbi pharetra sapien ut mattis.</p> */}
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="single-work-process">
              <div className="icon">
                <img src="/id-card.png" />
              </div>
              <h3>Verify your Identity</h3>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="single-work-process">
              <div className="icon">
                <img src="/register.png" />
              </div>
              <h3>Enroll in one of our Shopping Contracts</h3>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="single-work-process">
              <div className="icon">
                <img src="/holding.png" />
              </div>
              <h3>Get paid within one hour via Cashapp, Zelle or Paypal</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
