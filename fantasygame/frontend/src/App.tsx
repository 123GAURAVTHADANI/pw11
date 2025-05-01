import "./App.css";
import Landing from "./components/landing";
import { ThemeProvider, useTheme } from "./context/ThemeProvider";

const App = () => {
  return (
    <ThemeProvider>
      <Landing />
    </ThemeProvider>
  );
};

export default App;
