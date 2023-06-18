import React from "react";
import css from "./Heading.module.css";

export const Heading = ({ text }) => {
  return <h2 className={css.heading}>{text}</h2>;
};
