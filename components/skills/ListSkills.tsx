import { FC } from "react";
import Skill from "./Skill";

const skills: Array<string> = [
  "java",
  "spring-boot",
  "javascript",
  "react",
  "tailwind-css",
  "aws",
  "mongodb",
];

const ListSkills: FC = () => {
  return (
    <>
      {skills.map((sk, i) => (
        <Skill tech={sk} key={i} />
      ))}
    </>
  );
};

export default ListSkills;
