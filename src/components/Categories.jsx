// import React from "react";

export const Categories = ({ category }) => {
  return (
    <div className="relative w-40 md:w-56 gap-4 h-32 ml-2 rounded-lg overflow-hidden">
      <img
        src={category.background_image}
        className="absolute w-24 md:w-full h-full object-cover"
      />
      <div className="absolute bottom-0 left-0 p-2 text-white font-bold text-sm">
        { category.title }
      </div>
    </div>
  );
};
