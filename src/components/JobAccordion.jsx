import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import ArrowDropDownRoundedIcon from "@mui/icons-material/ArrowDropDownRounded";
export const JobAccordion = ({ source, alt, hasImage, textHeader }) => {
  return (
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
              display: "flex",
              alignItems: "center",
            }}
          >
            {hasImage ? <img src={source} alt={alt} /> : textHeader}
          </div>
        </div>
      </AccordionSummary>
      <AccordionDetails>
        <Typography variant="h5">What I did</Typography>
        <List>
          <ListItem>
            <ListItemText>what I did</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>more cool stuff</ListItemText>
          </ListItem>
        </List>
      </AccordionDetails>
    </Accordion>
  );
};
