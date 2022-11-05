import type { NextPage } from "next";
import { PageLayout } from "../components/layouts";
import { Grid, Row, Spacer } from "@nextui-org/react";
import Description from "../components/perfil/Description";
import { ListSkills } from "../components/skills";
import Collapse from "../components/mycollapse";

const HomePage: NextPage = () => {
  return (
    <PageLayout title={"Portfolio"} pageDescription={"Portfolio"}>
      <div role="home" className="home">
        <Description />
        <Spacer />
        <Grid.Container xs={0} sm={1}>
          <Spacer />
          <Spacer />
        </Grid.Container>

        <Grid.Container>
          <Row justify="space-evenly" align="center" role="row-skills">
            <ListSkills />
          </Row>
        </Grid.Container>
      </div>
      <Spacer />
      <Collapse />
    </PageLayout>
  );
};

export default HomePage;
