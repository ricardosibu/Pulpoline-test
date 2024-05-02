// import React from "react";
import { statitics } from "../utils/data";

export const Statitics = () => {
  return (
    <div className="grid grid-rows-2 grid-flow-col gap-7 w-1/12 h-44">
      {statitics.map(({id, title, result}) => (
        <div className="bg-white shadow-lg rounded-lg p-6 w-40 h-24 gap-3" key={id}>
          <div className="text-gray-400 text-sm">{title}</div>
          <div className="text-black font-semibold text-2xl">{result}</div>
        </div>
      ))}
    </div>
  );
};
