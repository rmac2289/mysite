import { useState } from "react";
import "./App.css";
import { Hero } from "./components/Hero";
import { About } from "./routes/About";
import { Contact } from "./routes/Contact";
import { Experience } from "./routes/Experience";
import { Projects } from "./routes/Projects";
import { Box, Container, Stack, Paper } from "@mui/material";
import "./App.css";
import { Nav } from "./components/Nav";
function App() {
  return (
    <>
      {/* <Nav /> */}
      <Box padding={2} backgroundColor="#5B2E48">
        <Hero />
        <Stack spacing={1}>
          <Paper sx={{ backgroundColor: "#CD5C5C" }}>
            <About />
          </Paper>
          <Paper sx={{ backgroundColor: "#CEB992" }}>
            <Experience />
          </Paper>
          <Paper sx={{ backgroundColor: "#73937E" }}>
            <Projects />
          </Paper>
          <Paper sx={{ backgroundColor: "#585563" }}>
            <Contact />
          </Paper>
        </Stack>
      </Box>
    </>
  );
}

export default App;
