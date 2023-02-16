import React, { Component } from "react";
import Link from "next/link";

class Footer extends Component {
  render() {
    return (
      <footer className="footer-area ptb-100 pb-0 bg-image">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="single-footer-widget">
                <Link href="/saas">
                  <a className="logo">
                    <img src="/logo.png" alt="logo2" />
                  </a>
                </Link>
                <p>
                  Earn $50 today by participating in online shopping research.
                </p>

                <ul className="social-list">
                  <li>
                    <a href="https://www.facebook.com/" target="_blank">
                      <i className="icofont-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com/" target="_blank">
                      <i className="icofont-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="instagram.com" target="_blank">
                      <i className="icofont-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/" target="_blank">
                      <i className="icofont-linkedin"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="copyright-area">
          <div className="container">
            <div className="row h-100 justify-content-center align-items-center">
              <div className="col-lg-6 col-md-6">
                <p>
                  Copyright @Stellarleads.io. All rights reserved{" "}
                  <a href="http://stellarleads.io/" target="_blank">
                    Stellarleads
                  </a>
                </p>
              </div>

              <div className="col-lg-6 col-md-6">
                <ul>
                  <li>
                    <Link href="#">
                      <a>Terms & Conditions</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <a>Privacy Policy</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
