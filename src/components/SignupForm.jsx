import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/signupForm.css";
import jwt from "jwt-simple";
import axios from "axios";

const SignupForm = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const secret = "SH06EE04JG10";

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const payload = { email };
      const token = jwt.encode(payload, secret);

      await axios.post("http://localhost:3400/users", {
        fullName,
        email,
        password,
        token,
      });
      alert("User Signup Successfully");
      navigate("/profile");
    } catch (err) {
      console.error("Signup Error".err);
      alert("Signup failed");
    }

    if (password != confirmPassword) {
      alert("Password Doesn't matching!");
      return;
    }
    alert("Password matched! proceeding the signup");
  };
  return (
    <div className="signup-form">
      {/* form */}
      <div className="signup-content">
        <form className="signup-form-label" onSubmit={handleSubmit}>
          <h1>Create an account</h1>
          <p>Sign up and get 30 day free trail</p>
          <div className="signup-inputs">
            <label className="label1">Full Name</label>
            <input
              className="input1"
              type="text"
              placeholder="Enter Full Name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
            <label className="label2">E-mail</label>
            <input
              className="input2"
              type="email"
              placeholder="Enter Your E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label className="label3">Password</label>
            <input
              className="input3"
              type="password"
              placeholder="Enter Your Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <label className="label4">Confirm Password</label>
            <input
              className="input4"
              type="password"
              placeholder="Renter Your Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <button type="submit" className="signup-button">
              Sign-Up
            </button>

            <div className="downloads">
              <div className="apple"> <a href="https://www.apple.com/app-store/">
                <img 
                  className="apple-logo"
                  src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
                  alt=""
                />
                <h3 className="apple-text">Apple</h3>
                </a>
              </div>
              <div className="google">
                <img
                  className="google-logo"
                  src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
                  alt=""
                />
                <h3 className="google-text">Google</h3>
              </div>
            </div>
          </div>
        </form>
        {/* footer */}
        <div className="footer">
          <div className="sign-in">
            <h3>
              Having an account? <a href="./Login.jsx">Sign-in</a>
            </h3>
          </div>
          <div className="terms">
            <h3>
              <u>Terms & Condition</u>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
