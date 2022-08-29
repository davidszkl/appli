import { Link } from "react-router-dom"

const NavBar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">Navbar</a>
                    <div className="collapse navbar-collapse">
                        <div className="navbar-nav">
                            <Link to="/login" className="nav-link active">Login</Link>
                            <Link to="/register" className="nav-link active">Register</Link>
                            <Link to="/test" className="nav-link active">test</Link>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default NavBar