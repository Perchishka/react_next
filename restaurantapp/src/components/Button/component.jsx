"use client";
import classNames from "classnames";
import styles from "./styles.module.css";
import { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext/component";
export const Button = ({
  children,
  onClick,
  disabled,
  className,
  size = "m",
}) => {
  const { theme } = useContext(ThemeContext);
  return (
    <button
      className={classNames(styles.button, styles[size], className, {
        [styles.dark]: theme === "dark",
      })}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
