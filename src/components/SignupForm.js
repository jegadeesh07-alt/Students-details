import "../css/signupForm.css"

const SignupForm = () => {
  return (
    <div className="signup-form">
        
        {/* form */}
        <div className="signup-content">
        <div className="signup-form-label">
            <h1>Create an account</h1>
            <p>Sign up and get 30 day free trail</p>
        <div className="signup-inputs">
            <label className="label1" >Full Name</label>
            <input 
                className="input1"
                type="text"
                placeholder="Enter Full Name"
                required
            />
            <label className="label2" >E-mail</label>
            <input
                className="input2" 
                type="email"
                placeholder="Enter Your E-mail"
                required
            />
            <label className="label3">Password</label>
            <input 
                className="input3"
                type="password"
                placeholder="Enter Your Password"
                required
            />
            <label className="label4">Confirm Password</label>
            <input 
                className="input4"
                type="password"
                placeholder="Renter Your Password"
                required
            />
            <button type="submit" className="signup-button">Sign-Up</button>
        </div>
        <div className="downloads">
            <div className="apple">
            <img className="apple-logo" src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" alt="" />
            <h3 className="apple-text">Apple</h3>
            </div>
            <div className="google">
            <img className="google-logo" src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png" alt="" />
            <h3 className="google-text">Google</h3>
            </div>
        </div>
        </div>
        {/* footer */}
        <div className="footer">
            <div className="sign-in">
            <h3>Having an account? <a href="https://admissions.kifees.com/">Sign-in</a></h3>
            </div>
            <div className="terms">
                <h3><u>Terms & Condition</u></h3>
            </div>
        </div>
        </div>

        
    </div>
    
  )
}

export default SignupForm