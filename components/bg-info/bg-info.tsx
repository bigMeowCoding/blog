import React, { HTMLAttributes } from "react";
import { FC } from "react";
import classNames from "classnames";
import { HTMLElement } from "node-html-parser";

interface Props extends HTMLAttributes<HTMLElement> {
  title: string;
  info: string;
}

const BgInfo: FC<Props> = ({ title, info ,className}) => {
  return (
    <div className={classNames("bg-no-repeat bg-cover", className)}>
      <div className=" container mx-auto  mb-5">
        <div className="py-40">
          <h1 className="text-8xl text-white text-center font-bold  mb-2">
            {title}
          </h1>
          <p className="text-xl text-white text-center font-serif">{info}</p>
        </div>
      </div>
    </div>
  );
};

export default BgInfo;
