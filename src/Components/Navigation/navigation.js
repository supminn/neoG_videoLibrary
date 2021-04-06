import { useDataContext } from "../../Context/data-context";
import logo from "../../images/logo.png";
import { NavLink } from "react-router-dom";

export const Navigation = () => {
  const {
    state: { playlist: items, likedVideos: liked },
  } = useDataContext();

  return (
    <nav className="nav flex-container">
      <NavLink to="/" className="no-line nav-logo-container">
        <img className="img-rd img-logo" src={logo} alt="logo" />
        <span className="nav-header"> videoLib</span>
      </NavLink>

      <section className="sec-nav-btns">
        <NavLink
          to="/liked-videos"
          activeClassName="no-line fas fa-lg fa-thumbs-up primaryBg-txt"
          className="no-line fas fa-lg fa-thumbs-up secondary-txt"
        >
          <span className="badge-icon hidden-vis">0</span>
        </NavLink>
        <NavLink
          to="/watch-later"
          className="no-line fas fa-lg fa-clock secondary-txt"
          activeClassName="no-line fas fa-lg fa-clock primaryBg-txt"
        >
          <span className="badge-icon hidden-vis">0</span>
        </NavLink>
      </section>
    </nav>
  );
};
