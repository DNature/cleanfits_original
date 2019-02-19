import React, { useState } from "react";
import styled from "styled-components";

const SignupPage = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Button = styled.button`
  background-color: #ffffff;
  outline: none;
`;

const Signup = ({ currentView }) => {
  const [view, setView] = useState((currentView = "signup"));
  return (
    <SignupPage>
      <div className="row w-100">
        <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8 mx-auto">
          <div className="row bg-white mb-5" style={{ marginTop: "-100px" }}>
            <div className="col-6">
              <button
                style={{
                  background: "white",
                  outline: 0,
                  borderBottom: view === "login" ? "3px solid #ccc" : 0
                }}
                className="btn btn-block btn-lg btn-light"
                onClick={() => setView("login")}
              >
                Login
              </button>
            </div>
            <div className="col-6">
              <button
                style={{
                  background: "white",
                  outline: 0,
                  borderBottom: view === "signup" ? "3px solid #ccc" : 0
                }}
                className="btn btn-block btn-lg btn-light"
                onClick={() => setView("signup")}
              >
                Signup
              </button>
            </div>
          </div>

          <div className="row">
            {view === "login" ? (
              <div className="col-12">
                <form className="user-login-form">
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="text"
                      className="form-control"
                      id="email"
                      placeholder="johndoe@example.com"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                      type="text"
                      className="form-control"
                      id="password"
                      placeholder="Your Password"
                    />
                  </div>
                  {/* <button type="submit" className="btn btn-block btn-primary">
                    LOGIN
                  </button> */}
                </form>
              </div>
            ) : (
              <div className="col-12">
                <form className="user-signup-form">
                  <div className="form-group">
                    <label htmlFor="name">Full Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      placeholder="John Doe"
                    />
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </SignupPage>
  );
};

export default Signup;
