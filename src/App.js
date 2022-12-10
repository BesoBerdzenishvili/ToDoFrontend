import { useState, useEffect } from "react";
import { styled } from "./stitches.config";
import sunIcon from "./assets/icon-sun.svg";
import moonIcon from "./assets/icon-moon.svg";
import BGDark from "./assets/bg-desktop-dark.jpg";
import BGLight from "./assets/bg-desktop-light.jpg";
import mobileBGDark from "./assets/bg-mobile-dark.jpg";
import mobileBGLight from "./assets/bg-mobile-light.jpg";
import Input from "./components/Input";

const Wrapper = styled("div", {
  maxWidth: 544,
  width: "100%",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
});

const Header = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  color: "white",

  "& h1": {
    letterSpacing: 14,
    fontWeight: 600,
  },
});
const Img = styled("img", {
  cursor: "pointer",
});
function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem("darkMode");
    return saved ? JSON.parse(saved) : false;
  });
  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  const handleClick = () => {
    setDarkMode(!darkMode);
  };
  const bodyStyle = () => {
    document.body.style.backgroundColor = darkMode
      ? "hsl(235, 21%, 11%)"
      : "hsl(0, 0%, 98%)";
    if (document.body.clientWidth < 425) {
      document.body.style.backgroundImage = darkMode
        ? `url('${mobileBGDark}')`
        : `url('${mobileBGLight}')`;
    } else {
      document.body.style.backgroundImage = darkMode
        ? `url('${BGDark}')`
        : `url('${BGLight}')`;
    }
  };
  bodyStyle();

  return (
    <Wrapper>
      <Header>
        <h1>TODO</h1>
        <Img
          onClick={handleClick}
          src={darkMode ? sunIcon : moonIcon}
          alt={darkMode ? "sun" : "moon"}
        />
      </Header>
      <Input darkMode={darkMode} />
    </Wrapper>
  );
}

export default App;
