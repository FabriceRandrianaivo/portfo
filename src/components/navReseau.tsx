import { Link } from "react-router-dom"

const NavReseau= () => {

    return (
        <div className="left-header">
            <div className="left-header_inner">
                <div className="nav_menu_left">
                    <Link to="/home">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/contact">Contact</Link>
                    <Link to="/login">Login</Link>
                    <Link to="/register">Register</Link>
                </div>
            </div>
        </div>

    )
}

export default NavReseau;