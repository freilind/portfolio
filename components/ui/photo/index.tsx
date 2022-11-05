import React, { FC } from "react";
import { Image } from "@nextui-org/react";

const Photo: FC = () => {
  return (
    <Image
      objectFit="cover"
      autoResize={false}
      className="img-rounded"
      width={270}
      height={270}
      src="/images/retrato.jpg"
      alt="photo"
    />
  );
};

export default Photo;
