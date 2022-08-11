import { Box, Container } from "@mui/material";
import React from "react";

export const Hero = () => {
  return (
    <Box marginBottom={1}>
      <Container>
        <header>
          <h1 style={{ color: "#f8f8ff" }}>
            👋 Hey, <br /> 🙋‍♂️ I'm Ross. <br /> 👨‍💻 I like to solve software
            problems.
          </h1>
        </header>
      </Container>
    </Box>
  );
};
