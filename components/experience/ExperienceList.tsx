import { Grid } from "@nextui-org/react";
import React, { FC } from "react";
import Experience from "./Experience";
import en from "../../lang/en.json";
import es from "../../lang/es.json";
import { useRouter } from "next/router";
import { ICompany, IMessage } from "../../interfaces";

const languages: IMessage = {
  es,
  en,
};

const ExperienceList: FC = () => {
  const router = useRouter();
  const locale = router.locale || "es";
  const experienceList: [ICompany] = languages?.[locale]?.experienceList;

  return (
    <Grid.Container gap={2} justify="center">
      {experienceList.map((experience: ICompany) => (
        <Experience
          company={experience.company}
          date={experience.date}
          description={experience.description}
          tech={experience.tech}
          rol={experience.rol}
          key={experience.company}
        />
      ))}
    </Grid.Container>
  );
};

export default ExperienceList;
