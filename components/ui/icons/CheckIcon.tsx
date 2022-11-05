import { FC } from "react";
import { IIcon } from "../../../interfaces";

export const CheckIcon:FC<IIcon> = ({
    fill,
    size,
    height,
    width,
    ...props
}) => {
    return (
        <svg
            width={size || width || 24}
            height={size || height || 24}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}>

            <path
                fill={fill}
                d="m10 15.586-3.293-3.293-1.414 1.414L10 18.414l9.707-9.707-1.414-1.414z">

            </path>
        </svg>
    );
};



