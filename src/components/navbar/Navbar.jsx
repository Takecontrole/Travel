import "./navbar.css"
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navContainer">
         <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <span className="logo">Baлeнmuно</span>
        </Link>
        <div className="navItems">
          <button className="navButton">Регистрация</button>
          <button className="navButton">Войти</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar