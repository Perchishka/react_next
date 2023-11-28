"use client";
import classNames from "classnames";
import styles from "./styles.module.css";
import { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext/component";
export const DarkThemeRestaurantTabs = ({ children }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className={classNames(styles.root, {
        [styles.dark]: theme === "dark",
      })}
    >
      {children}
    </div>
  );
};
