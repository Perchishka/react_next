import Link from "next/link";
import styles from "./styles.module.css"
export default function AuthorizedLayout({ children }) {
  return (
    <>
      <header>Header for user
        <Link href = "/restaurants" className={styles.link}>Restaurants</Link>
      </header>
      {children}
      <footer>Footer for user</footer>
    </>
  );
};
