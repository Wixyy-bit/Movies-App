import { Link, useNavigate } from "react-router-dom"
import "../styles/navbar.css"

function Navbar() {

    const navigate = useNavigate()

    const token = localStorage.getItem("token")

    const handleLogout = () => {

        localStorage.removeItem("token")

        navigate("/")

    }

    return (

        <nav className="navbar">

            <h2 className="logo">
                <Link to="/">MovieApp</Link>
            </h2>

            <div className="nav-links">

                <Link to="/">Home</Link>

                {/* <Link to="/movies">Movies</Link> */}

                <Link to="/search">Search</Link>

                {token && <Link to="/favorites">Favorites</Link>}
                {token && <Link to="/history">History</Link>}

                {!token ? (

                    <Link to="/login">Login</Link>

                ) : (

                    <button
                        className="logout-btn"
                        onClick={handleLogout}
                    >
                        Logout
                    </button>

                )}

            </div>

        </nav>

    )

}

export default Navbar