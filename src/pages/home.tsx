import { ProgressBar } from "react-bootstrap";
import { Link } from "react-router-dom";
import TopHeader from "../components/topHeader";
const Homepage = () => {
    return (
        <div className="container-main">
            <TopHeader />
            <div className=" row">
                <Link to="/home">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
            </div>
        </div>


    )
}
export default Homepage