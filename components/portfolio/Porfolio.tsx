import React, { FC } from "react";
import NextLink from "next/link";
import { Card, Col, Spacer, Link, Text, useTheme } from "@nextui-org/react";
import { IProject } from "../../interfaces";

interface ProjectProps {
  project: IProject;
}

const Porfolio: FC<ProjectProps> = ({ project }) => {
  const { isDark } = useTheme();
  return (
    <NextLink href={project.url} passHref>
      <Link>
        <Card variant="bordered">
          <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
            <Col>
              <Text h4 color="secondary"></Text>
              <Spacer />
            </Col>
          </Card.Header>

          {isDark && (
            <Card.Image
              objectFit="cover"
              src={project.imgLight}
              width="100%"
              alt=""
            />
          )}

          {!isDark && (
            <Card.Image
              objectFit="cover"
              src={project.imgDark}
              width="100%"
              alt=""
            />
          )}
        </Card>
      </Link>
    </NextLink>
  );
};

export default Porfolio;
