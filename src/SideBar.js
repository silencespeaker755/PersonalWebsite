import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Header, SocialMediaLink } from "./Text/ConstantText";

export default function SideBar({ fullHeight }) {
  const location = useLocation();

  return (
    <aside
      id="colorlib-aside"
      role="complementary"
      className="js-fullheight text-center"
      style={{ height: fullHeight }}
    >
      <h1 id="colorlib-logo">
        {Header}
        <span>.</span>
      </h1>
      <nav id="colorlib-main-menu" role="navigation">
        <ul>
          <li
            className={location.pathname === "/home" ? "colorlib-active" : null}
          >
            <Link to="/home">Home</Link>
          </li>
          <li
            className={
              location.pathname === "/experience" ? "colorlib-active" : null
            }
          >
            <Link to="/experience">Experience</Link>
          </li>
          <li
            className={
              location.pathname === "/contact" ? "colorlib-active" : null
            }
          >
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <div className="colorlib-footer">
        <ul>
          <li>
            <a href={SocialMediaLink.facebook}>
              <i className="icon-facebook"></i>
            </a>
          </li>
          {/* <li>
            <a href="#">
              <i className="icon-twitter"></i>
            </a>
          </li> */}
          <li>
            <a href={SocialMediaLink.instagram}>
              <i className="icon-instagram"></i>
            </a>
          </li>
          <li>
            <a href={SocialMediaLink.linkin}>
              <i className="icon-linkedin"></i>
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
}
