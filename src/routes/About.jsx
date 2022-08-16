import React from "react";
import { Card, Typography } from "@mui/material";
export const About = () => {
  return (
    <Card>
      <header>
        <h1>who I am</h1>
      </header>
      <Card>
        <Typography variant="body1">
          In my free time I enjoy coding full-stack web applications. I
          regularly work with React, Node.js, SQL and NoSQL Databases (mainly
          Postgres & MongoDB), REST & GraphQL APIs, and of course HTML & CSS.
          I've recently branched out on the front-end - I picked up Vue fairly
          quickly and started working with Svelte (which is what I rebuilt this
          site with!), as well as the back-end - I've been refactoring my "Find
          Your Park" app from a REST to a GraphQL API. In addition to the web,
          I've published a mobile version of one of my apps to Apple's app store
          using React Native, and I have another in production.
        </Typography>
      </Card>
    </Card>
  );
};
