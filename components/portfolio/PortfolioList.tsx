import { Grid } from "@nextui-org/react";
import React, { FC } from "react";
import { projectsList } from "../projects";
import Project from "./Porfolio";

const PortfolioList: FC = () => {
  return (
    <>
      {projectsList.map((project) => (
        <Grid key={project.title} sm={5}>
          <Project project={project} />
        </Grid>
      ))}
    </>
  );
};

export default PortfolioList;
