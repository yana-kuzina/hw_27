import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav>
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "")}
          to="/"
        >
          Home page{" "}
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "")}
          to="/hotels"
        >
          Hotels
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "")}
          to="/flights"
        >
          Flights
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "")}
          to="/packages"
        >
          Packages
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
