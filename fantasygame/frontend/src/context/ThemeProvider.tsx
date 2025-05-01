import { createContext, ReactNode, useContext, useState } from "react";
import { darkTheme, lightTheme, Theme } from "../utils/theme";

interface IThemeContext {
  theme: Theme;
  toggleTheme: () => void;
}
type ChildrenProps = {
  children: ReactNode;
};

const ThemeContext = createContext<IThemeContext | undefined>(undefined);

export const ThemeProvider = ({ children }: ChildrenProps) => {
  const [theme, setTheme] = useState<Theme>(lightTheme);

  const toggleTheme = () => {
    setTheme((prev) => (prev === lightTheme ? darkTheme : lightTheme));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): IThemeContext => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("Context Not found!!");
  }
  return context;
};
