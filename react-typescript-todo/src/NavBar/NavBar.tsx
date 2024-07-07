import "./NavBar.css";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="navBar">
      <NavLink to="/lab" className="activeLink">
        <div className="bar"> Lab Exercise</div>
      </NavLink>
      <NavLink to="/todo" className="activeLink">
        <div className="bar"> Task Manage</div>
      </NavLink>
    </div>
  );
}
