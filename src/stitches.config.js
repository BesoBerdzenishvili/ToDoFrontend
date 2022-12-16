import { createStitches } from "@stitches/react";

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors: {
      BrightBlue: "hsl(220, 98%, 61%)",
      CheckBackground:
        "linear-gradient(hsl(192, 100%, 67%), hsl(280, 87%, 65%))",

      VeryLightGray1: "hsl(0, 0%, 98%)",
      VeryLightGrayishBlue1: "hsl(236, 33%, 92%)",
      LightGrayishBlue1: "hsl(233, 11%, 84%)",
      DarkGrayishBlue1: " hsl(236, 9%, 61%)",
      DarkerGrayishBlue1: "hsl(235, 19%, 35%)",

      VeryDarkBlue2: "hsl(235, 21%, 11%)",
      VeryDarkDesaturBlue2: "hsl(235, 24%, 19%)",
      LightGrayishBlue2: "hsl(234, 39%, 85%)",
      LightGrayishBlueH2: "hsl(236, 33%, 92%)", // hover
      DarkGrayishBlue2: "hsl(234, 11%, 52%)",
      VeryDarkGrayishBlue2: "hsl(233, 14%, 35%)",
      VeryDarkGrayishBlueH2: "hsl(237, 14%, 26%)",
    },
  },
  media: {
    bp1: "(max-width: 480px)",
    bp2: "(max-width: 768px)",
  },
});

export const globalStyles = globalCss({
  "*": { margin: 0, padding: 0, boxSizing: "border-box" },
  body: {
    fontSize: 18,
    fontFamily: "Josefin Sans, sans-serif",
    backgroundRepeat: "repeat-x",
  },
});
