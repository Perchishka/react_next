import { CartContextProvider } from "@/components/Context/CartContext/component";
import { ThemeContextProvider } from "@/components/Context/ThemeContext/component";

export const GlobalProvider = ({ children }) => {
  return (
    <ThemeContextProvider>
      <CartContextProvider>{children}</CartContextProvider>
    </ThemeContextProvider>
  );
};
