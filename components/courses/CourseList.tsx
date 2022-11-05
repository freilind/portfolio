import React, { FC } from "react";
import { Grid, Image, Link } from "@nextui-org/react";
import { ICourse } from "../../interfaces/course";

const CourseList: FC = () => {
  return (
    <>
      {courses.map((course) => (
        <Grid key={course.name} sm={5}>
          <Link href={course.url} target={"_blank"}>
            <Image
              objectFit="fill"
              autoResize={true}
              width={310}
              height={220}
              src={course.pathImage}
              alt={course.name}
            />
          </Link>
        </Grid>
      ))}
    </>
  );
};

export default CourseList;

const courses: Array<ICourse> = [
  {
    name: "certificate-java8",
    pathImage: "/images/courses/cert-java8.jpg",
    url: "/images/courses/cert-java8.jpg",
  },
  {
    name: "next-frmwk-prod",
    pathImage: "/images/courses/next-frmwk-prod.jpeg",
    url: "https://udemy-certificate.s3.amazonaws.com/pdf/UC-625fca48-56d0-499a-abd0-2e3299aeb3a0.pdf",
  },
  {
    name: "next-react-guide",
    pathImage: "/images/courses/next-react-guide.jpeg",
    url: "https://udemy-certificate.s3.amazonaws.com/pdf/UC-ea89ede5-8ad5-4182-bc23-d467a82f7ab4.pdf",
  },
  {
    name: "web-bootcamp2022",
    pathImage: "/images/courses/web-bootcamp2022.jpeg",
    url: "https://udemy-certificate.s3.amazonaws.com/pdf/UC-fa37664f-a127-40f3-b590-64893ff75dee.pdf",
  },
  {
    name: "master-cqrs",
    pathImage: "/images/courses/master-cqrs.jpeg",
    url: "https://udemy-certificate.s3.amazonaws.com/pdf/UC-2486bc7f-f452-4c96-8f0d-9c9e229a7223.pdf",
  },
  {
    name: "flutter-complete-guide",
    pathImage: "/images/courses/flutter-complete-guide.jpeg",
    url: "https://udemy-certificate.s3.amazonaws.com/pdf/UC-5b81bda1-1845-4530-92df-681e05705f46.pdf",
  },
  {
    name: "flutter-2021",
    pathImage: "/images/courses/flutter-2021.jpeg",
    url: "https://udemy-certificate.s3.amazonaws.com/pdf/UC-07aabcbd-8c1e-461d-9518-e69cbf0d998c.pdf",
  },
  {
    name: "docker-guide",
    pathImage: "/images/courses/docker-guide.jpeg",
    url: "https://udemy-certificate.s3.amazonaws.com/pdf/UC-d4ef5915-4608-46ba-bfd4-f7baf95d2346.pdf",
  },
  {
    name: "kafka",
    pathImage: "/images/courses/kafka.jpeg",
    url: "https://udemy-certificate.s3.amazonaws.com/pdf/UC-bca7b665-586d-4d9c-8105-d0546e5a3dad.pdf",
  },
];
