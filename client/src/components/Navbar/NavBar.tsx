import "./NavBar.css";
import { useNavigate } from "react-router-dom";
import logoNavbar from "../../assets/images/Logonavbar.png";

function NavBar() {
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li>
          <img
            src={logoNavbar}
            alt="Home Logo"
            className="logo-navbar"
            onClick={() => navigate("/")}
            onKeyUp={(e) => e.key === "Enter" && navigate("/")}
          />
        </li>
        <li>
          <button
            type="button"
            onClick={() => navigate("/")}
            aria-label="Go to Home"
          >
            Home
          </button>
        </li>
        <li>
          <button
            type="button"
            onClick={() => navigate("/Dev-Jokes")}
            aria-label="Go to Dev Jokes"
          >
            Devs-Jokes
          </button>
        </li>
        <li>
          <button
            type="button"
            onClick={() => navigate("/Dark-Jokes")}
            aria-label="Go to Dark Jokes"
          >
            Dark-Jokes
          </button>
        </li>
        <li>
          <button
            type="button"
            onClick={() => navigate("/PMU-Vibe")}
            aria-label="Go to PMU Vibe"
          >
            PMU-Vibe
          </button>
        </li>
        <li>
          <button
            type="button"
            onClick={() => navigate("/Post")}
            aria-label="Post Your Jokes"
          >
            Post your jokes
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
