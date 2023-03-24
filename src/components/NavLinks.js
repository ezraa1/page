import { useState } from "react";
import { NavLink } from "react-router-dom";


const NavLinks = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return(
        <>
        <NavLink to="/" onClick={() => setIsMenuOpen(false)}>
        Home
      </NavLink>
      <NavLink to="/about" onClick={() => setIsMenuOpen(false)}>
        About
      </NavLink>
      <NavLink to="/portfolio" onClick={() => setIsMenuOpen(false)}>
        Portfolio
      </NavLink>
      <NavLink to="/contact" onClick={() => setIsMenuOpen(false)}>
        Contact
      </NavLink>
      </>
    );
};
export default NavLinks;