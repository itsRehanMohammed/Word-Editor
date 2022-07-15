import { useState } from "react";
import "./App.css";
// import About from "./components/About";
import Content from "./components/Content";
import Navbar from "./components/Navbar";

function App() {
  const [mode, setmode] = useState("light");
  const toggleMode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "rgb(58 59 60)";
      document.body.style.color = "#fff";
    } else {
      setmode("light");
      document.body.style.backgroundColor = "#fff";
      document.body.style.color = "#000";
    }
  };
  return (
    <>
      <Navbar
        title="ReactApp"
        navLink="Home"
        navLink1="About"
        toggleMode={toggleMode}
        mode={mode}
      />
      <Content heading="Enter Text Here 👇" mode={mode} />
      {/* <About /> */}
    </>
  );
}

export default App;
