import React from "react";

const Order = () => {
  return (
    <div>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-12 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">
                DevelopersWear
              </h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-4">
                Order Id: #6969
              </h1>
              <p className="leading-relaxed mb-4">
                Order has been placed successfully.
              </p>
              <div className="flex mb-4 justify-between border-b-2 border-gray-300">
                <a className=" py-2 text-lg px-1">Description</a>
                <a className="py-2 text-lg px-1">Quantity</a>
                <a className="py-2 text-lg px-1">Item Total</a>
              </div>
              <div className="flex pb-2 justify-between">
                <span className="text-gray-500">Tshirt</span>
                <span className="text-gray-900">1</span>
                <span className="text-gray-900">499</span>
              </div>
              <div className="flex border-t border-gray-200 justify-between py-2">
                <span className="text-gray-500">Hoodies</span>
                <span className="text-gray-900">1</span>
                <span className="text-gray-900">499</span>
              </div>
              <div className="flex border-t border-b mb-6 border-gray-200 justify-between py-2">
                <span className="text-gray-500">Quantity</span>
                <span className="text-gray-900">4</span>
                <span className="text-gray-900">4</span>
              </div>
              <div className="flex">
                <span className="title-font font-medium text-2xl text-gray-900">
                  Subtotal: Rs. 58.00
                </span>
                <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                  Track Order
                </button>
              </div>
            </div>
            <img
              alt="ecommerce"
              className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
              src="https://dummyimage.com/400x400"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Order;
