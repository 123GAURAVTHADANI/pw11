import { useTheme } from "../../context/ThemeProvider";
import Header from "../Header";

function Landing() {
  const { theme } = useTheme();
  return (
    <div style={{ backgroundColor: theme.backgroundColor }}>
      <Header />
    </div>
  );
}

export default Landing;
