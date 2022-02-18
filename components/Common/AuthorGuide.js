import React from "react";
import Link from "next/link";
import Image from "next/image";

const AuthorGuide = () => {
  return (
    <div className="main-banner">
      <div className="d-table">
        <div className="d-table-cell">
          <div
            className=""
            style={{ paddingLeft: "4rem", paddingRight: "4rem" }}
          >
            <Image
              src="/images/logo-2.png"
              alt="Author Reputation Press Logo"
              width={350}
              height={100}
              layout="fixed"
            />
            <div
              className="row h-100 justify-content-center align-items-center"
              style={{ marginTop: "2rem" }}
            >
              <div className="col-lg-5">
                <div className="hero-content">
                  <h1>Take The Easy Path To Publish Your Work</h1>
                  <p>
                    Author Reputation Press' publishing guide provides a
                    step-by-step method of bringing your manuscript from scratch
                    to completion
                  </p>
                </div>
                <Image
                  src="/guide/authorbanner.jpg"
                  alt="Author Guide Banner"
                  width={650}
                  height={400}
                  layout="responsive"
                />
              </div>

              <div className="col-lg-5 offset-lg-1">
                <div className="banner-form ml-3">
                  <form>
                    <div className="form-group">
                      <label>Username</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter username"
                      />
                    </div>

                    <div className="form-group">
                      <label>Email</label>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Enter your email"
                      />
                    </div>

                    <div className="form-group">
                      <label>Password</label>
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Create a password"
                      />
                    </div>

                    <button type="submit" className="btn btn-primary">
                      Register Now
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Shape Images */}
      <div className="shape1">
        <img src="/images/shape1.png" alt="shape" />
      </div>
      <div className="shape2 rotateme">
        <img src="/images/shape2.svg" alt="shape" />
      </div>
      <div className="shape3">
        <img src="/images/shape3.svg" alt="shape" />
      </div>
      <div className="shape4">
        <img src="/images/shape4.svg" alt="shape" />
      </div>
      <div className="shape5">
        <img src="/images/shape5.png" alt="shape" />
      </div>
      <div className="shape6 rotateme">
        <img src="/images/shape4.svg" alt="shape" />
      </div>
      <div className="shape7">
        <img src="/images/shape4.svg" alt="shape" />
      </div>
      <div className="shape8 rotateme">
        <img src="/images/shape2.svg" alt="shape" />
      </div>
    </div>
  );
};

export default AuthorGuide;
