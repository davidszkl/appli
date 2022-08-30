import { Link } from "react-router-dom"
import { useAuth } from "../..";

const NavBar = () => {
    const {auth, setAuth} = useAuth();

    const handleClick = () => {
        setAuth(false);
    }
    
    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">Navbar</a>
                <div className="collapse navbar-collapse justfiy-content-end">
                    <div className="navbar-nav me-auto">
                        <Link to="/test" className="nav-link active">test</Link>
                    </div>
                    {auth ?
                    <div className="navbar-nav ms-auto">
                        <button onClick={handleClick}>LOGOUT</button>
                        <p>profile</p>
                    </div>
                    :<div className="navbar-nav ms-auto">
                        <Link to="/login" className="nav-link nav-item active">Login</Link>
                        <Link to="/register" className="nav-link nav-item active">Register</Link>
                    </div>}

                </div>
            </div>
        </nav>
    )};

export default NavBar