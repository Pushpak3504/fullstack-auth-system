import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const login = async () => {
    const username = document.getElementById("u").value;
    const password = document.getElementById("p").value;

    try {
      const res = await axios.post("http://192.168.80.20:5000/login", {
        username,
        password
      });

      localStorage.setItem("user", res.data.username);
      navigate("/dashboard");
    } catch {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="center-card fade-in">
      <h2>Login</h2>

      <input id="u" placeholder="Username" />
      <input id="p" type="password" placeholder="Password" />

      <button onClick={login}>Login</button>

      {/* SIGNUP LINK */}
      <p className="switch-text">
        Don’t have an account?{" "}
        <span onClick={() => navigate("/signup")} className="link">
          Sign up
        </span>
      </p>
    </div>
  );
}
