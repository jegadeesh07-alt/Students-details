import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import bcrypt from "bcryptjs";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.get(`http://localhost:3400/users?email=${email}`);
      const user = res.data[0];

      if (!user) {
        alert("User not FOund ");
        return;
      }
      const isMatch = bcrypt.compareSync(password, user.password);
      if (isMatch) {
        alert("user logged in  successful");
        localStorage.setItem("token", user.token);
        navigate("/profile");
      } else {
        alert("invalid Password");
      }
    } catch (err) {
      console.error("Login Failed");
    }
  };
return;(
    <form onSubmit={handleLogin}>
        <h1>Login page</h1>

    </form>
)
}
export default Login;