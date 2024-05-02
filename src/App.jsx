import "./App.css";
import { Categories } from "./components/Categories";
import { Order } from "./components/Order";
import { ProductCheckout } from "./components/ProductCheckout";
import { SideBarMenu } from "./components/SideBarMenu";
import { Statitics } from "./components/Statitics";
import { TopBanner } from "./components/TopBanner";
import { TopBar } from "./components/TopBar";

import {
  categories,
  promoBannerData,
  tabsOption,
  orders,
  cartCheckout,
} from "./utils/data";

function App() {
  return (
    <>
      <div className="flex flex-wrap">
        <div>
          <SideBarMenu />
        </div>
        <div className="basis-11/12">
          <TopBar />
          <div className="flex flex-col md:flex-row">
            <div className=" w-3/4 md:w-full">
              <TopBanner data={promoBannerData} />
              <h2 className="text-left font-poppins font-semibold text-black p-6 text-md text-2xl">
                Categorias
              </h2>
              <div className="grid grid-cols-3 gap-16 md:gap-4">
                {categories.map((category) => (
                  <Categories key={category.id} category={category} />
                ))}
              </div>
              <div className="flex justify-between items-center mt-8 ">
                <div className="flex space-x-4 py-1 ml-2">
                  {tabsOption.map((option) => (
                    <p
                      key={option}
                      className={
                        option === "Order"
                          ? "text-xl font-medium text-black underline-offset-8"
                          : "text-xl font-medium text-gray-200 underline-offset-8"
                      }
                    >
                      {option}
                    </p>
                  ))}
                </div>

                <p className="text-xl font-medium text-orange-500 text-right hidden md:block">
                  See all
                </p>
              </div>
              {orders.map((order) => (
                <Order key={order.id} order={order} />
              ))}
            </div>
            <div className=" ml-2 mt-2">
              <Statitics />
              <div className="flex items-center justify-between bg-white p-4">
                <div className=" mt-7 ml-2 text-left">
                  <h1 className=" text-2xl font-semibold font-poppins">
                    My Cart
                  </h1>
                  <p className=" text-sm font-poppins">Shopping is happy</p>
                </div>
                <img
                  src="/images/notifications_cart.png"
                  alt=""
                  width={28}
                  height={28}
                />
              </div>
              {cartCheckout.map((product) => (
                <ProductCheckout key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
