import React, { FC } from "react";
import { Collapse, Grid } from "@nextui-org/react";
import { PortfolioList } from "../portfolio";
import { ExperienceList } from "../experience";
import Education from "../education/Education";
import { useIntl } from "react-intl";
import { CourseList } from "../courses";

const MyCollapse: FC = () => {
  const intl = useIntl();

  const title1 = intl.formatMessage({ id: "collapse.title.1" });
  const subtitle1 = intl.formatMessage({ id: "collapse.subtitle.1" });
  const title2 = intl.formatMessage({ id: "collapse.title.2" });
  const subtitle2 = intl.formatMessage({ id: "collapse.subtitle.2" });
  const title3 = intl.formatMessage({ id: "collapse.title.3" });
  const subtitle3 = intl.formatMessage({ id: "collapse.subtitle.3" });
  const title4 = intl.formatMessage({ id: "collapse.title.4" });
  const subtitle4 = intl.formatMessage({ id: "collapse.subtitle.4" });

  return (
    <Grid.Container gap={2}>
      <Grid>
        <Collapse.Group key={"collapse-group"}>
          <Collapse
            key={"collapse1"}
            title={title1}
            subtitle={subtitle1}
            aria-labelledby="collapse1"
          >
            <Grid.Container
              key={"collapse-container-1"}
              gap={4}
              justify="center"
            >
              <PortfolioList />
            </Grid.Container>
          </Collapse>
          <Collapse
            key={"collapse2"}
            title={title2}
            subtitle={subtitle2}
            aria-labelledby="collapse2"
          >
            <Grid.Container
              key={"collapse-container-2"}
              gap={2}
              justify="center"
            >
              <ExperienceList />
            </Grid.Container>
          </Collapse>
          <Collapse
            key={"collapse4"}
            title={title4}
            subtitle={subtitle4}
            aria-labelledby="collapse3"
          >
            <Grid.Container
              key={"collapse-container-4"}
              gap={4}
              justify="center"
            >
              <CourseList />
            </Grid.Container>
          </Collapse>
          <Grid
            xs={0}
            sm={12}
            css={{
              padding: "$0",
            }}
          >
            <Collapse
              key={"collapse3"}
              title={title3}
              subtitle={subtitle3}
              aria-labelledby="collapse4"
            >
              <Grid.Container
                key={"collapse-container-3"}
                gap={1}
                justify="center"
                xs={12}
              >
                <Education />
              </Grid.Container>
            </Collapse>
          </Grid>
        </Collapse.Group>
      </Grid>
    </Grid.Container>
  );
};

export default MyCollapse;
