"use client";
import classNames from "classnames";
import styles from "./styles.module.css";
import { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext/component";

export const Header = ({ className }) => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <header
      className={classNames(styles.header, className, {
        [styles.headerDark]: theme === "dark",
      })}
    >
      <div className={styles.logoBox}>
        <h2 className={styles.logoText}>RestaurantGit</h2>
      </div>
      <div className={styles.themeBox}>
        <lable>
          <input type="button" className={styles.input} />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className={classNames(styles.theme, {
              [styles.dark]: theme === "dark",
            })}
            onClick={toggleTheme}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
            />
          </svg>
        </lable>
      </div>
    </header>
  );
};
