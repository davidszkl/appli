import { Link } from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux';
import { logoutAction } from "../../app/authSlice.js";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const token = useSelector((state) => state.auth.token);

    const handleLogout = () => {
        dispatch(logoutAction());
        navigate('/login');
    }
    
    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand">
                    Navbar
                    </Link>
                <div className="collapse navbar-collapse justfiy-content-end">
                    <div className="navbar-nav me-auto">
                        <Link to="/test" className="nav-link active">test</Link>
                    </div>
                    {token ?
                    <div className="navbar-nav ms-auto">
                        <Link to="/profile" className="btn btn-primary">Profile</Link>
                        <button className="btn" onClick={handleLogout}>logout</button>
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