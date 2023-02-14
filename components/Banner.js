import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import Link from "next/link";

const Banner = () => {
  const [toggler, setToggler] = useState(false);
  return (
    <>
      <FsLightbox
        toggler={toggler}
        sources={["https://www.youtube.com/embed/bk7McNUjWgw"]}
      />

      <div className="main-banner software-home">
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container">
              <div className="row h-100 justify-content-center align-items-center">
                <div className="col-lg-8 col-md-12">
                  <div className="hero-content">
                    <img className="happyman" src="/happyman.svg" />
                    <h1>
                      Earn $50 today by participating in online shopping
                      research.
                    </h1>
                    <p>All from the comfort of your own home.</p>
                    {/* <Link href="#">
                      <a className="btn btn-primary">Sign Up Now</a>
                    </Link> */}
                    <Link href="#">
                      <a
                        className="video-btn popup-youtube font-weight-bold"
                        onClick={() => setToggler(!toggler)}
                      >
                        Watch Video
                        <i className="icofont-play-alt-3"></i>
                      </a>
                    </Link>
                  </div>
                </div>

                <div className="col-lg-4 col-md-12">
                  <div className="signup-download ml-5">
                    <form>
                      <div className="form-group">
                        <label>Email</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter email address"
                        />
                      </div>

                      <div className="form-group">
                        <label>Password</label>
                        <input
                          type="password"
                          className="form-control"
                          placeholder="Enter password"
                        />
                      </div>

                      <div className="form-group">
                        <label>Confirm Password</label>
                        <input
                          type="password"
                          className="form-control"
                          placeholder="Confirm password"
                        />
                      </div>

                      <button type="submit" className="btn btn-primary">
                        Sign Up
                      </button>
                      <div className="mt-5 text-center">
                        <h6>Get paid via</h6>
                        <div className="d-flex justify-content-center">
                          <div>
                            <img
                              src="/paypal.svg"
                              style={{ height: "100px" }}
                            />
                          </div>
                          <div className="payment-single">
                            <img
                              src="/cashapp.svg"
                              style={{ height: "100px" }}
                            />
                          </div>
                          <div className="payment-single">
                            <img src="/zelle.svg" style={{ height: "100px" }} />
                          </div>
                        </div>
                        <div></div>
                        <div></div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Shape Images */}
        <div className="creative-shape">
          <img src="/images/bg5.png" alt="bg" />
        </div>
        <div className="bg-gray shape-1"></div>
        <div className="shape1">
          <img src="/money.png" alt="img" />
        </div>
        <div className="shape2">
          <img src="/images/shape2.png" alt="img" />
        </div>
        <div className="shape3">
          <img src="/money.png" alt="img" />
        </div>
        <div className="shape6">
          <img src="/checklist.svg" alt="img" />
        </div>
        <div className="shape8 rotateme">
          <img src="/images/shape8.svg" alt="shape" />
        </div>
        <div className="shape9">
          <img src="/images/shape9.svg" alt="shape" />
        </div>

        {/* bubble-animate */}
        <div className="bubble-animate">
          <div className="circle small square1"></div>
          <div className="circle small square2"></div>
          <div className="circle small square3"></div>
          <div className="circle small square4"></div>
          <div className="circle small square5"></div>
          <div className="circle medium square1"></div>
          <div className="circle medium square2"></div>
          <div className="circle medium square3"></div>
          <div className="circle medium square4"></div>
          <div className="circle medium square5"></div>
          <div className="circle large square1"></div>
          <div className="circle large square2"></div>
          <div className="circle large square3"></div>
          <div className="circle large square4"></div>
        </div>
      </div>
    </>
  );
};

export default Banner;
