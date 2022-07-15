import React, { useState } from "react";

export default function About() {
  const [style, setstyle] = useState({
    color: "black",
    backgroundColor: "white",
  });
  const [themeText, setthemeText] = useState("Dark Mode");
  const toggleTheme = (e) => {
    e.preventDefault();
    if (style.color === "black") {
      setstyle({
        color: "white",
        backgroundColor: "black",
      });
      setthemeText("Light Mode");
    } else {
      setstyle({
        color: "black",
        backgroundColor: "white",
      });

      setthemeText("Dark Mode");
    }
  };
  return (
    <>
      <div className="container my-3 py-4" style={style}>
        <form>
          <div className="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div className="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div className="form-group form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" for="exampleCheck1">
              Check me out
            </label>
          </div>
          <button type="button" className="btn btn-primary mx-2">
            Submit
          </button>
          <button
            type="submit"
            className="btn btn-primary mx-2"
            onClick={toggleTheme}
            style={style}
          >
            {themeText}
          </button>
        </form>
      </div>
    </>
  );
}
