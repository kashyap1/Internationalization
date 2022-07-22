import "./styles.css";
import Header from "./components/Header";
import CssBaseline from "@mui/material/CssBaseline";
import Footer from "./components/Footer";
import Content from "./components/Content";
import { Grid } from "@mui/material";
import theme from "./components/theme";
import { ThemeProvider } from "@mui/material";

export default function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Grid container direction="column">
          <Grid item>
            <Header />
          </Grid>
          <Grid item container sx={{ mt: 1 }} sm={12} justifyContent="center">
            <Grid item sm={8}>
              <Content />
            </Grid>
          </Grid>
          <Grid item>
            <Footer />
          </Grid>
        </Grid>
      </ThemeProvider>
    </div>
  );
}
