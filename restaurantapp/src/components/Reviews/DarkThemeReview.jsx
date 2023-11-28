"use client";

import { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext/component";
import classNames from "classnames";
import styles from "./styles.module.css";
export const DarkThemeReview = ({ children }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className={classNames(styles.review, { [styles.dark]: theme === "dark" })}
    >
      {children}
    </div>
  );
};
