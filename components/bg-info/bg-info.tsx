import React from "react";
import { FC } from "react";

interface Props {
  title: string;
  info: string;
}

const BgInfo: FC<Props> = ({ title, info }) => {
  return (
    <div className="bg-info-bg bg-no-repeat bg-cover">
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
