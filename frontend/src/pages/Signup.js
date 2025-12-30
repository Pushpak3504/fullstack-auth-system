import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();

  const signup = async () => {
    const username = document.getElementById("u").value;
    const password = document.getElementById("p").value;

    if (!username || !password) {
      alert("Fill all fields");
      return;
    }

    try {
      await axios.post("http://192.168.80.20:5000/signup", {
        username,
        password
      });
      alert("Signup successful");
      navigate("/login");
    } catch {
      alert("User already exists");
    }
  };

  return (
    <div className="center-card fade-in">
      <h2>Create Account</h2>

      <input id="u" placeholder="Username" />
      <input id="p" type="password" placeholder="Password" />

      <button onClick={signup}>Sign Up</button>

      {/* LOGIN LINK */}
      <p className="switch-text">
        Already have an account?{" "}
        <span onClick={() => navigate("/login")} className="link">
          Login
        </span>
      </p>
    </div>
  );
}
