import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function Dashboard() {
  const navigate = useNavigate();
  const user = localStorage.getItem("user");

  // Protect route
  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [navigate, user]);

  // Logout function
  const logout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div className="dashboard fade-in">
      <h1>Welcome, {user} 👋</h1>

      {/* LOGOUT BUTTON */}
      <button className="logout" onClick={logout}>
        Logout
      </button>

      <div className="info-card">
        <h2>IACSD</h2>
        <p>
          Institute for Advanced Computing & Software Development focuses on
          advanced system programming, DevSecOps, cloud infrastructure, and
          cybersecurity.
        </p>
      </div>

      <div className="info-card">
        <h3>Why this project stands out</h3>
        <ul>
          <li>Clean UI with smooth animations</li>
          <li>Frontend–backend separation</li>
          <li>Secure password handling</li>
          <li>Cloud-ready architecture</li>
        </ul>
      </div>
    </div>
  );
}
