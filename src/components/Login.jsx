import React from "react"
import "../styles/login.css"
const Login = () => {
  return (
    <main>
      <section className="section-login">
        <div className="section-main">
          <div className="section-login-1">
            <div className="section-login-1-main">
              <h1 className="section-login-1-title">Little Lemon</h1>
              <p className="section-login-1-text">
                there's something for everyone.
              </p>
              <div className="section-login-1-img">
                <img
                  src="https://rvs-gradie-signup-page.vercel.app/Assets/iPhone-Mockup.png"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="section-login-2">
            <div className="section-login-2-main">
              <h1 className="section-login-2-title">Login</h1>
              <form className="section-login-2-form">
                <div className="login-form-1">
                  <label htmlFor="input-email">username</label>
                  <input
                    type="text"
                    id="input-email"
                    placeholder="username"
                    required
                  />
                </div>
               
                <div className="login-form-3">
                  <label htmlFor="input-password">Password</label>
                  <input
                    type="password"
                    id="input-password"
                    placeholder="At least 8 characters"
                    required
                  />
                </div>
                <div className="login-form-4">
                  <input type="checkbox" id="input-checkbox" />
                  <p>
                    By creating an account, you agree to the{" "}
                    <a href="#">Terms & Conditions.</a>
                  </p>
                </div>
                <div className="login-form-submit-btn">
                  <button>Login</button>
                </div>
                <div className="login-form-5">
                  <p>
                    Already have an account? <a href="#">Sign In</a>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Login
