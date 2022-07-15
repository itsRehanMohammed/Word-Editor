import React, { useState } from "react";

export default function Content(props) {
  const btnUpHandler = () => {
    let convertText = text.toUpperCase();
    setText(convertText);
  };
  const btnLowHandler = () => {
    let convertText = text.toLowerCase();
    setText(convertText);
  };

  const btnClearHandler = () => {
    let convertText = "";
    setText(convertText);
  };

  const btnCopyText = () => {
    let convertText = document.getElementById("inputText");
    convertText.select();
    navigator.clipboard.writeText(convertText.value);
  };

  const removeSpaces = () => {
    let convertText = text.split(/[  ]+/);
    setText(convertText.join(" "));
  };
  const changeHandler = (event) => {
    setText(event.target.value);
  };
  const [text, setText] = useState("");
  return (
    <>
      <div className={`container py-3 `}>
        <h1>{props.heading}</h1>
        <textarea
          id="inputText"
          cols="30"
          rows="7"
          onChange={changeHandler}
          placeholder="write it down"
          value={text}
          className="form-control my-3"
        ></textarea>
        <input
          type="button"
          value="Covert to upperCase"
          onClick={btnUpHandler}
          className="btn btn-primary mx-1"
        />
        <input
          type="button"
          value="Covert to LowerCase"
          onClick={btnLowHandler}
          className="btn btn-primary mx-1"
        />
        <input
          type="button"
          value="Clear Text"
          onClick={btnClearHandler}
          className="btn btn-danger mx-1"
        />
        <input
          type="button"
          className="btn btn-dark mx-1"
          onClick={btnCopyText}
          value="Copy Text"
        />
        <input
          type="button"
          className="btn btn-warning mx-1"
          onClick={removeSpaces}
          value="Removes Extra Spaces"
        />
      </div>
      <div className={`container `}>
        <h1>Text Summary</h1>
        <p>
          <b>{text.split(" ").length}</b> Words,
          <b> {text.length} </b>Characters and
          <b> {Math.round(0.008 * text.split(" ").length)} </b>
          Minutes Required to Read the above content.
        </p>
        <h3>Preview </h3>
        <p>
          {text.length > 0
            ? text
            : "Write something in the above area to preview it here 👆"}
        </p>
      </div>
    </>
  );
}
