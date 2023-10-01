import { useState, useEffect, useRef } from "react";
import "./Header.css";
import { BiMenuAltRight } from "react-icons/bi";
import { Link, NavLink, useNavigate } from "react-router-dom";


const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const calssVal = showMenu ? "show" : "hide";

  let menuRef = useRef();

  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setShowMenu(false);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  const navigate = useNavigate();

  return (
    <section className="h-wrapper">
      <div className="h-container container">
        <Link to="/">
          <img src="./imgs/logo.png" alt="logo"></img>
        </Link>
        <div ref={menuRef}>
          <div className="menu-icon">
            <BiMenuAltRight
              size={30}
              onClick={() => {
                setShowMenu(!showMenu);
              }}
            />
          </div>
          <div className={`menu ${calssVal}`}>
            <NavLink to="/properties">Properties</NavLink>
            <a href="mailto:test@gmail.com">Contact</a>
            <button
              onClick={() => {
                navigate("/login");
              }}
            >
              Sign in
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
