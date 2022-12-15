import React from "react";
import { styled, keyframes } from "../stitches.config";
const light = keyframes({
  "0%": {
    backgroundColor: "DarkMagenta",
    boxShadow: "DarkMagenta 0px 0px 17px",
  },
  "30%": { backgroundColor: "magenta" },
  "70%": { backgroundColor: "white" },
});
const Wrapper = styled("div", {
  "& div": {
    backgroundColor: "white",
    width: 22,
    height: 22,
    marginBottom: 7,
    borderRadius: 99,
    position: "relative",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, 50%)",
    animation: `${light} .6s infinite linear`,
  },
  // top
  "& div:first-child": {
    top: 0,
    animationDelay: "0.2s",
  },
  // top left
  "& div:nth-child(2)": {
    left: 240,
    top: -4,
    animationDelay: "0.3s",
  },
  // bottom left
  "& div:nth-child(3)": {
    left: 240,
    top: 4,
    animationDelay: "0.4s",
  },
  // bottom
  "& div:nth-child(4)": {
    animationDelay: "0.5s",
  },
  // top right
  "& div:nth-child(5)": {
    left: 305,
    top: -92,
    animationDelay: "0.7s",
  },
  // bottom right
  "& div:nth-child(6)": {
    left: 305,
    top: -85,
    animationDelay: "0.6s",
  },
});

export default function Loading() {
  return (
    <Wrapper>
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
    </Wrapper>
  );
}
