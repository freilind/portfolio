import { FC } from "react";
import { Grid, Container, Spacer, Text, Link } from "@nextui-org/react";
import { useIntl } from "react-intl";
import FlagImage from "../ui/flag";
import Photo from "../ui/photo";

const Description: FC = () => {
  const intl = useIntl();

  const name = intl.formatMessage({ id: "description.name" });
  const greeting = intl.formatMessage({ id: "description.greeting" });
  const bodyPart1 = intl.formatMessage({ id: "description.body.part1" });
  const bodyPart2 = intl.formatMessage({ id: "description.body.part2" });
  const bodyPart3 = intl.formatMessage({ id: "description.body.part3" });

  return (
    <>
      <Grid.Container gap={0} justify="flex-start">
        <Grid xs={12} sm={3}>
          <Photo />
        </Grid>
        <Grid xs={12} sm={9} direction="column">
          <Grid.Container>
            <Grid xs={12} sm={9} className={"name"}>
              <Text h2 className={"font-raleway"} transform="uppercase">
                {name}
              </Text>
            </Grid>
            <Grid xs={12} sm={3} className={"rrss"} role="rrss">
              <Link
                href="https://www.linkedin.com/in/freilind/"
                target={"_blank"}
              >
                <i className={`bx bx-md bxl-linkedin-square`}></i>
              </Link>
              <Link href="https://www.instagram.com/ftojoh/" target={"_blank"}>
                <i className={`bx bx-md bxl-instagram`}></i>
              </Link>
              <Link href="https://github.com/freilind" target={"_blank"}>
                <i className={`bx bx-md bxl-github`}></i>
              </Link>
            </Grid>
          </Grid.Container>
          <Spacer />
          <Container fluid={true}>
            <Text size="1.3rem" className={"font-console"}>
              {greeting} <br />
            </Text>
            <Text size="1.3rem" className={"font-console"}>
              {bodyPart1} <FlagImage country={"ve"} />
              {bodyPart2} <FlagImage country={"cl"} />.{bodyPart3}
            </Text>
          </Container>
        </Grid>
      </Grid.Container>
    </>
  );
};

export default Description;
