import Layout from "src/hoc/Layout";
import HomeContent from "./pages/home/HomeContent";
import { createTheme, ThemeProvider } from '@material-ui/core/styles';

declare module "@material-ui/core/styles/createBreakpoints" {
  interface BreakpointOverrides {
    xs: true;
    sm: true;
    md: true;
    lg: true;
    xl: true;
  }
}

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 0,
      md: 320,
      lg: 768,
      xl: 1920,
    },
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <HomeContent />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
