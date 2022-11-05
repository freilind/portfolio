import { Card, Text, Divider, Row, Grid, Spacer } from "@nextui-org/react";
import React, { FC } from "react";
import { ICompany } from "../../interfaces";

const Experience: FC<ICompany> = ({
  company,
  date,
  description,
  tech,
  rol,
}) => {
  return (
    <Grid xs={12} sm={6}>
      <Card variant="bordered" css={{ mw: "400px" }}>
        <Card.Header>
          <Grid xs={8} justify="flex-start">
            <Row>
              <Text h4 color="primary" transform="uppercase">
                {company}
              </Text>
            </Row>
          </Grid>
          <Grid xs={4} justify="flex-end" css={{ pr: "$0", pl: "$0" }}>
            <Row>
              <Text small>{date}</Text>
            </Row>
          </Grid>
        </Card.Header>
        <Divider />
        <Card.Body css={{ py: "$10" }}>
          <Text>{description}</Text>
          <Spacer />
          <Text>{tech}</Text>
        </Card.Body>
        <Divider />
        <Card.Footer>
          <Row justify="flex-end">
            <Text h4 color="secondary">
              {rol}
            </Text>
          </Row>
        </Card.Footer>
      </Card>
    </Grid>
  );
};

export default Experience;
