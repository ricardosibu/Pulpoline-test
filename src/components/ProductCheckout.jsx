import React, { useState } from "react";

export const ProductCheckout = ({ product }) => {
  const [counterProduct, setCounterProduct] = useState(1);

  const increment = () => {
    setCounterProduct((prev) => prev + 1);
  };

  const decrement = () => {
    if (counterProduct === 1) {
      setCounterProduct(1);
    } else {
      setCounterProduct((prev) => prev - 1);
    }
  };

  return (
    <div className="max-w-sm rounded-lg bg-white flex p-1 ml-5">
      <img src={product.image_url} alt="" className="rounded-lg" />
      <div className="flex flex-col justify-between ml-4">
        <div>
          <h2 className=" text-base font-poppins font-medium">
            {product.product}
          </h2>
          <div className="flex flex-row">
            <img src="/images/star.png" />
            <p className="text-xs text-black font-medium font-poppins">
              4.8/5 <span className="text-gray-300">(1k+ reviews)</span>
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <p className="text-lg font-bold">${product.price}</p>
          <button
            onClick={decrement}
            className="bg-gray-500 text-white h-8 w-8 flex items-center justify-center rounded-full focus:outline-none"
          >
            <span className="text-xl">-</span>
          </button>
          <span className="text-black text-2xl font-poppins">
            {counterProduct}
          </span>
          <button
            onClick={increment}
            className="bg-orange-500 text-white h-8 w-8 flex items-center justify-center rounded-full hover:bg-orange-600 focus:outline-none"
          >
            <span className="text-xl">+</span>
          </button>
        </div>
      </div>
    </div>
  );
};
