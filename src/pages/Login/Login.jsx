import React, { useState } from "react";
import "./Login.css";
import logo from "../../assets/logo.png";
import { login, signup } from "../../firebase";
import netflix_spinner from "../../assets/netflix_spinner.gif";

const Login = () => {
  const [signState, setSignState] = useState("Sign In");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const user_auth = async (event) => {
    event.preventDefault();
    setLoading(true);
    if (signState === "Sign In") {
      await login(email, password);
    } else {
      await signup(name, email, password);
    }
    setLoading(false);
  };

  return loading ? (
    <div className="login-spinner__wrapper">
      <img src={netflix_spinner} alt="" className="login-spinner__img" />
    </div>
  ) : (
    <div className="login">
      <img src={logo} alt="" className="login__logo" />
      <div className="login__form">
        <h1 className="login__form__title">{signState}</h1>
        <form>
          {signState === "Sign Up" ? (
            <input
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              className="login__form__input"
              type="text"
              placeholder="Your name"
            />
          ) : (
            <></>
          )}

          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className="login__form__input"
            type="email"
            placeholder="Email"
          />
          <input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            className="login__form__input"
            type="password"
            placeholder="Password"
          />
          <button
            onClick={user_auth}
            type="submit"
            className="login__form__button"
          >
            {signState}
          </button>
          <div className="form__help">
            <div className="remember">
              <input type="checkbox" className="remember__input" />
              <label htmlFor="">Remember Me</label>
            </div>
            <div className="form__help__para">Need Help?</div>
          </div>
        </form>
        <div className="form__switch">
          {signState === "Sign In" ? (
            <p className="form__switch__para">
              New to Netflix?{" "}
              <span
                className="form__switch__text"
                onClick={() => {
                  setSignState("Sign Up");
                }}
              >
                Sign Up Now
              </span>
            </p>
          ) : (
            <p className="form__switch__para">
              Already have account?{" "}
              <span
                className="form__switch__text"
                onClick={() => {
                  setSignState("Sign In");
                }}
              >
                Sign In Now
              </span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
