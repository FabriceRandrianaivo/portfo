// import { Link } from "react-router-dom"

const TopHeader = () => {

    // return (
    //     <div className="top-header">
    //         <div className="top-header_inner">
    //             <div className="name_user">Fabrice Randrianaivo</div>
    //             <div className="nav_menu">
    //                 <Link to="/home">Home</Link>
    //                 <Link to="/about">About</Link>
    //                 <Link to="/contact">Contact</Link>
    //                 <Link to="/login">Login</Link>
    //                 <Link to="/register">Register</Link>
    //             </div>
    //         </div>
    //     </div>

    // )
    return (
        <header className="header">
          <nav>
            <ul>
              <li><a href="#hero">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#portfolio">Portfolio</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>
        </header>
      );
}

export default TopHeader