import logo from "../../images/logo.png";
import { NavLink } from "react-router-dom";

export const Navigation = () => {

  return (
    <nav className="nav flex-container">
      <NavLink to="/" className="no-line nav-logo-container">
        <img className="img-rd img-logo" src={logo} alt="logo" />
        <span className="nav-header"> JumpSUP</span>
      </NavLink>

      <section className="sec-nav-btns">
      <NavLink
          to="/history"
          className="no-line fas fa-lg fa-history secondary-txt"
          activeClassName="no-line fas fa-lg fa-history primaryBg-txt"
        >
          <span className="badge-icon hidden-vis">0</span>
        </NavLink>
        <NavLink
          to="/liked-videos"
          activeClassName="no-line fas fa-lg fa-thumbs-up primaryBg-txt"
          className="no-line fas fa-lg fa-thumbs-up secondary-txt"
        >
          <span className="badge-icon hidden-vis">0</span>
        </NavLink>
        <NavLink
          to="/playlist"
          className="no-line fas fa-lg fa-list-alt secondary-txt"
          activeClassName="no-line fas fa-lg fa-list-alt primaryBg-txt"
        >
          <span className="badge-icon hidden-vis">0</span>
        </NavLink>
      </section>
    </nav>
  );
};
