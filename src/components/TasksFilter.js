import React from "react";
import { styled } from "../stitches.config";

const Wrapper = styled("div", {
  "@bp1": {
    display: "none",
  },
  variants: {
    mobile: {
      true: {
        display: "none",
        marginTop: 22,
        borderRadius: 7,
        padding: "14px 21px",
        backgroundColor: "white",

        "@bp1": {
          display: "flex",
          justifyContent: "center",
        },
      },
    },
    darkMode: {
      true: {
        backgroundColor: "$VeryDarkDesaturBlue2",
      },
    },
  },
});

const Ul = styled("ul", {
  listStyleType: "none",
  color: "$DarkGrayishBlue1",
  display: "flex",

  "& li": {
    marginRight: 20,
    fontSize: 16,
  },

  "& li:hover": {
    color: "white",
    cursor: "pointer",
  },

  "& li:active": {
    color: "$BrightBlue",
  },
});

export default function TasksFilter({ setFilter, mobile, darkMode }) {
  return (
    <Wrapper mobile={mobile} darkMode={darkMode}>
      <Ul>
        <li onClick={() => setFilter("all")}>All</li>
        <li onClick={() => setFilter(true)}>Active</li>
        <li onClick={() => setFilter(false)}>Completed</li>
      </Ul>
    </Wrapper>
  );
}
