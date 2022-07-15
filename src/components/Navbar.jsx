import React from "react";
import PropTypes from "prop-types";

export default function Navbar(props) {
  return (
    <div>
      <nav
        className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
      >
        <a
          className={`navbar-brand text-${
            props.mode === "light" ? "primary" : "light"
          }`}
          href="/"
        >
          {props.title}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a
                className={`nav-link text-${
                  props.mode === "light" ? "primary" : "light"
                }`}
                href="/"
              >
                {props.navLink} <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item active">
              <a
                className={`nav-link text-${
                  props.mode === "light" ? "primary" : "light"
                }`}
                href="/"
              >
                {props.navLink1}
              </a>
            </li>
          </ul>

          <form className="form-inline my-2 my-lg-0">
            <div className="custom-control custom-switch">
              <input
                type="checkbox"
                className="custom-control-input"
                id="customSwitch1"
                onClick={props.toggleMode}
              />
              <label
                className={`custom-control-label text-${
                  props.mode === "light" ? "primary" : "light"
                }`}
                // className="custom-control-label text-primary"
                htmlFor="customSwitch1"
              >
                Enable {props.mode === "light" ? "dark" : "light"} Mode
              </label>
            </div>
          </form>
        </div>
      </nav>
    </div>
  );
}

Navbar.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
};
Navbar.defaultProps = {
  title: "Enter Title",
  subTitle: "Enter subTitle",
};
