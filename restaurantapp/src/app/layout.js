import { Header } from "@/components/Header/component";
import { GlobalProvider } from "./GlobalProvider";
import styles from "./styles.module.css";
import { ProviderCart } from "@/redux/Provider/providerCart";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Onest:wght@300;400;700;800&display=swap"
          rel="stylesheet"
        />
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
