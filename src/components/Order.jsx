// import React from 'react'

export const Order = ({ order }) => {
  return (
    <div className="flex justify-between bg-white p-2 shadow-sm rounded-lg">
      <div className="flex">
        <img src={order.image_url} className="rounded-lg" />
        <div className=" px-2">
        <div className="text-lg font-semibold text-left ">{order.title}</div>
        <p className="text-sm text-zinc-600 text-left">{order.date}</p>
        </div>
        
      </div>
      <div className=" px-4 py-3 space-x-4">
        <p className="bg-orange-500 text-white font-medium font-poppins py-3 px-5 rounded-3xl text-end">
          Order Again
        </p>
      </div>
    </div>
  );
};
