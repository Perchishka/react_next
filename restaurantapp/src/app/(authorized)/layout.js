import Link from "next/link";
import styles from "./styles.module.css"
export default function AuthorizedLayout({ children }) {
  return (
    <>
      <header>Header for user
        <Link href = "/restaurants" replace className={styles.link}>Restaurants</Link>
        <Link href = {`/products?search=${123}`} replace className={styles.link}>Products</Link>
        {children}
      </header>
      
      <footer>Footer for user</footer>
    </>
  );
};
