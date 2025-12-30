import { useNavigate } from "react-router-dom";

export default function Landing() {
  const navigate = useNavigate();

  return (
    <div className="center-card fade-in">
      <h1>Secure Auth System</h1>
      <p>Built with React, Node.js & Secure DB</p>

      <button onClick={() => navigate("/login")}>Login</button>
      <button onClick={() => navigate("/signup")} className="secondary">
        Sign Up
      </button>
    </div>
  );
}
