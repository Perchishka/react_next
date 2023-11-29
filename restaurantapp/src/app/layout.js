import { Header } from "@/components/Header/component";
import { GlobalProvider } from "./GlobalProvider";
import styles from "./styles.module.css";
import { ProviderCart } from "@/redux/Provider/providerCart";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="RestaurantLink" href="https://ssdsdsd" />
      </head>
      <body className={styles.root}>
        <ProviderCart>
          <GlobalProvider>
            <Header />
            {children}
          </GlobalProvider>
        </ProviderCart>
      </body>
    </html>
  );
}
