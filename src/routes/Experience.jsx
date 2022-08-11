import React, { useState } from "react";
import {
  Card,
  Divider,
  List,
  ListItem,
  ListItemText,
  Stack,
} from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ArrowDropDownRoundedIcon from "@mui/icons-material/ArrowDropDownRounded";
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
        <Accordion
          sx={{
            border: "1px solid #585563",
          }}
          disableGutters={true}
        >
          <AccordionSummary
            expandIcon={
              <ArrowDropDownRoundedIcon
                fontSize="large"
                sx={{ color: "#5B2E48" }}
              />
            }
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <div
              style={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                width: "95%",
              }}
            >
              <img src={ChowNowLogo} alt="ChowNow Logo" />
            </div>
          </AccordionSummary>
          <AccordionDetails>
            <List>
              <ListItem>
                <ListItemText>cool thing 1</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText>more cool stuff</ListItemText>
              </ListItem>
            </List>
          </AccordionDetails>
        </Accordion>
        {/* <Divider /> */}
        <Accordion
          sx={{
            border: "1px solid #585563",
          }}
          disableGutters={true}
        >
          <AccordionSummary
            expandIcon={
              <ArrowDropDownRoundedIcon
                fontSize="large"
                sx={{ color: "#5B2E48" }}
              />
            }
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <div
              style={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                width: "95%",
              }}
            >
              <img src={AxosLogo} alt="Axos Logo" />
            </div>
          </AccordionSummary>

          <AccordionDetails>
            <List>
              <ListItem>
                <ListItemText>cool thing 1</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText>more cool stuff</ListItemText>
              </ListItem>
            </List>
          </AccordionDetails>
        </Accordion>
        <Accordion
          sx={{
            border: "1px solid #585563",
          }}
          disableGutters={true}
        >
          <AccordionSummary
            expandIcon={
              <ArrowDropDownRoundedIcon
                fontSize="large"
                sx={{ color: "#5B2E48" }}
              />
            }
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <div
              style={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                width: "95%",
              }}
            >
              <div
                style={{
                  fontSize: "26px",
                  fontWeight: "900",
                }}
              >
                Pre-tech
              </div>
            </div>
          </AccordionSummary>

          <AccordionDetails>
            <List>
              <ListItem>
                <ListItemText>cool thing 1</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText>more cool stuff</ListItemText>
              </ListItem>
            </List>
          </AccordionDetails>
        </Accordion>
      </Stack>
    </Card>
  );
};
