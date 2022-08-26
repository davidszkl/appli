import { Link } from "react-router-dom"
const NavBar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-ligt bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse">
                        <Link to="/home">Home</Link>
                        <Link to="/login">Login</Link>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default NavBar