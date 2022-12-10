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
        "linear-gradient hsl(192, 100%, 67%) to hsl(280, 87%, 65%)",

      VeryLightGray: "hsl(0, 0%, 98%)",
      VeryLightGrayishBlue: "hsl(236, 33%, 92%)",
      LightGrayishBlue: "hsl(233, 11%, 84%)",
      DarkGrayishBlue: " hsl(236, 9%, 61%)",
      VeryDarkGrayishBlue: "hsl(235, 19%, 35%)",

      VeryDarkBlue: "hsl(235, 21%, 11%)",
      VeryDarkDesaturatedBlue: "hsl(235, 24%, 19%)",
      LightGrayishBlue: "hsl(234, 39%, 85%)",
      LightGrayishBlue: "hsl(236, 33%, 92%)", // hover
      DarkGrayishBlue: "hsl(234, 11%, 52%)",
      VeryDarkGrayishBlue: "hsl(233, 14%, 35%)",
      VeryDarkGrayishBlue: "hsl(237, 14%, 26%)",
    },
  },
  media: {
    bp1: "(max-width: 480px)",
  },
});

export const globalStyles = globalCss({
  "*": { margin: 0, padding: 0, boxSizing: "border-box" },
  body: { fontSize: 18, fontFamily: "Josefin Sans, sans-serif" },
});
