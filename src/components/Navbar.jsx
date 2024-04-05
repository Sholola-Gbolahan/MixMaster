import { NavLink } from "react-router-dom";
import Wrapper from "../assets/wrappers/Navbar";

const Navbar = () => {
  return (
    <Wrapper>
      <div className="nav-center">
        <span className="logo">MixMaster</span>

        <div className="nav-links">
          {/* Navlinks is used in linking to different pages */}
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/newsletter">Newsletter</NavLink>
        </div>
      </div>
    </Wrapper>
  );
};

export default Navbar;
