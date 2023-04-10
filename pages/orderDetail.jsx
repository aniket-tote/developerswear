import React, { useEffect } from "react";
import { useRouter } from "next/router";

const OrderDetail = () => {
  const router = useRouter();
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      router.push("/");
    }
  }, []);
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
              <table className="w-full text-left mb-6">
                <thead>
                  <tr className="bg-gray-200">
                    <th className="p-3 title-font tracking-wider font-medium border-gray-300 border-y text-gray-900 text-sm rounded-tl rounded-bl">
                      Description
                    </th>
                    <th className="p-3 title-font tracking-wider font-medium border-gray-300 border-y text-gray-900 text-sm">
                      Quantity
                    </th>
                    <th className="p-3 title-font tracking-wider font-medium border-gray-300 border-y text-gray-900 text-sm">
                      Item Total
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-gray-100">
                    <td className="p-3 border-gray-200 border-y w-1/3">
                      Tshirt
                    </td>
                    <td className="p-3 border-gray-200 border-y w-1/3">1</td>
                    <td className="p-3 border-gray-200 border-y w-1/3">599</td>
                  </tr>
                  <tr className="hover:bg-gray-100">
                    <td className="p-3 border-gray-200 border-y w-1/3">
                      Tshirt
                    </td>
                    <td className="p-3 border-gray-200 border-y w-1/3">1</td>
                    <td className="p-3 border-gray-200 border-y w-1/3">599</td>
                  </tr>
                  <tr className="hover:bg-gray-100">
                    <td className="p-3 border-gray-200 border-y w-1/3">
                      Tshirt
                    </td>
                    <td className="p-3 border-gray-200 border-y w-1/3">1</td>
                    <td className="p-3 border-gray-200 border-y w-1/3">599</td>
                  </tr>
                </tbody>
              </table>
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

export default OrderDetail;
