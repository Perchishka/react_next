
import { ThemeContextProvider } from "@/components/Context/ThemeContext/component";

export const GlobalProvider = ({ children }) => {
  return (
    <ThemeContextProvider>
     {children}
    </ThemeContextProvider>
  );
};
