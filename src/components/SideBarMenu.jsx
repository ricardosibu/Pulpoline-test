// import React from "react";
import { optionsMenu } from "../utils/data";

export const SideBarMenu = () => {
  return (
    <div className="hidden flex-col h-dvh border rounded-lg items-center py-8 mt-7 space-y-4 w-24 bg-gradient-to-b from-orange-600 to-yellow-400 lg:flex">
      <img
        src="/images/local_dining.png"
        width={42}
        height={42}
        alt="logo"
        className=" mb-16"
      />

      <div className="flex flex-col gap-y-8 mb-44 cursor-pointer">
        {optionsMenu.map(({ image, id }) => (
          <img src={image} width={28} height={28} key={id} alt="icons" />
        ))}
      <img src="/images/logout.png" width={28} height={28} alt="logo" className=" mt-44" />
      </div>

    </div>
  );
};
