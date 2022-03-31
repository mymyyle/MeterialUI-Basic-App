import "./App.css";
import JobList from "./component/JobList";
import NavBar from "./component/NavBar";
import jobs from "./data.json";
import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Container } from "@mui/material";

function App() {
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <NavBar />
      <Container maxWidth="lg">
        <JobList jobs={jobs} />
      </Container>
    </ThemeProvider>
  );
}

export default App;
