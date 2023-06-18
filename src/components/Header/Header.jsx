import { NavLink } from "react-router-dom";
import css from "./Header.module.css";

export const Header = () => {
  return (
    <nav className={css.nav}>
      <NavLink
        style={({ isActive }) => {
          return { backgroundColor: isActive ? "#311b71" : "" };
        }}
        className={css.link}
        to="/"
      >
        Home
      </NavLink>

      <NavLink
        style={({ isActive }) => {
          return { backgroundColor: isActive ? "#311b71" : "" };
        }}
        className={css.link}
        to="/tweets"
      >
        Tweets
      </NavLink>
    </nav>
  );
};
