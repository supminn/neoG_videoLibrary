import logo from "../../images/logo.png";
import { NavLink } from "react-router-dom";
import { useAuthContext } from "../../Context";

export const Navigation = () => {
  const { login } = useAuthContext();

  return (
    <nav className="nav flex-container">
      <NavLink to="/" className="no-line nav-logo-container">
        <img className="img-rd img-logo" src={logo} alt="logo" />
        <span className="nav-header"> SupVision</span>
      </NavLink>

      <section className="sec-nav-btns">
        {!login && (
          <NavLink
            to="/"
            end
            className="no-line fas fa-lg fa-video primaryBg-txt"
            activeClassName="no-line fas fa-lg fa-video secondary-txt"
          >
            <span className="badge-icon hidden-vis">0</span>
          </NavLink>
        )}
        {login && (
          <>
            <NavLink
              to="/history"
              className="no-line fas fa-lg fa-history primaryBg-txt"
              activeClassName="no-line fas fa-lg fa-history secondary-txt"
            >
              <span className="badge-icon hidden-vis">0</span>
            </NavLink>
            <NavLink
              to="/liked-videos"
              className="no-line fas fa-lg fa-thumbs-up primaryBg-txt"
              activeClassName="no-line fas fa-lg fa-thumbs-up secondary-txt"
            >
              <span className="badge-icon hidden-vis">0</span>
            </NavLink>
            <NavLink
              to="/playlist"
              className="no-line fas fa-lg fa-list-alt primaryBg-txt"
              activeClassName="no-line fas fa-lg fa-list-alt secondary-txt"
            >
              <span className="badge-icon hidden-vis">0</span>
            </NavLink>
          </>
        )}
        <NavLink
          to="/user-profile"
          className="no-line fas fa-lg fa-user primaryBg-txt"
          activeClassName="no-line fas fa-lg fa-user secondary-txt"
        >
          <span className="badge-icon hidden-vis">0</span>
        </NavLink>
      </section>
    </nav>
  );
};
