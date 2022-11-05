import Image from "next/image";
import { FC } from "react";
import { IFlagImage } from "../../../interfaces";

const FlagImage: FC<IFlagImage> = ({ country }) => {
  return (
    <Image
      className={"mt-5"}
      width={30}
      height={30}
      src={`/icons/flags/${country}.svg`}
      alt={`flag-${country}`}
    />
  );
};

export default FlagImage;
