import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  const logoutHandler = () => {
    localStorage.removeItem("token");
    navigate("/");
    window.location.reload();
  };

  return (
    <nav className="navbar">
      <h2>JWT Auth</h2>

      <div>
        {!token ? (
          <>
            <Link to="/">Login</Link>

            <Link to="/register">
              Register
            </Link>
          </>
        ) : (
          <button onClick={logoutHandler}>
            Logout
          </button>
        )}
      </div>
    </nav>
  );
}

export default Navbar;