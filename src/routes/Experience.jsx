import React, { useState } from "react";
import { Card, Stack } from "@mui/material";
import { JobAccordion } from "../components/JobAccordion";
import { data } from "../data";
import ChowNowLogo from "../assets/chownowLogo.svg";
import AxosLogo from "../assets/axos-logo.png";

export const Experience = () => {
  const { experience } = data;

  return (
    <Card>
      <header>
        <h1>where I've worked</h1>
      </header>
      <Stack spacing={2}>
        <JobAccordion
          hasImage={true}
          textHeader=""
          source={ChowNowLogo}
          alt="ChowNow Logo"
        />
        <JobAccordion
          hasImage={true}
          textHeader=""
          source={AxosLogo}
          alt="Axos Logo"
        />
        <JobAccordion
          hasImage={false}
          textHeader="Pre-tech"
          source={null}
          alt=""
        />
      </Stack>
    </Card>
  );
};
