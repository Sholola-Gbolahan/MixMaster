import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledBtn = styled.button`
  background: red;
  padding: 1rem;
  color: white;
  font-size: 2rem; 
`

const Navbar = () => {
  return (
    <nav>
      <StyledBtn>Button Press</StyledBtn>
      <div className="nav-center">
        <span className="logo">MixMaster</span>

        <div className="nav-links">
          {/* Navlinks is used in linking to different pages */}
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/newsletter">Newsletter</NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
