import React, { useEffect } from "react";
import { useRouter } from "next/router";

const Orders = () => {
  const router = useRouter();
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      router.push("/");
    }
  }, []);
  return (
    <div>
      <div className="flex justify-center w-full py-16">
        <span className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
          Manage Your Orders
        </span>
      </div>
      <div className="orders w-full px-24 pb-5">
        <table className="table-auto w-full text-left whitespace-no-wrap">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-3 title-font tracking-wider font-medium border-gray-300 border-y text-gray-900 text-sm rounded-tl rounded-bl">
                Order Number
              </th>
              <th className="p-3 title-font tracking-wider font-medium border-gray-300 border-y text-gray-900 text-sm">
                Date
              </th>
              <th className="p-3 title-font tracking-wider font-medium border-gray-300 border-y text-gray-900 text-sm">
                Payment Type
              </th>
              <th className="p-3 title-font tracking-wider font-medium border-gray-300 border-y text-gray-900 text-sm">
                Total
              </th>
              <th className="p-3 title-font tracking-wider font-medium border-gray-300 border-y text-gray-900 text-sm">
                Status
              </th>
              <th className="p-3 title-font tracking-wider font-medium border-gray-300 border-y text-gray-900 text-sm rounded-tr rounded-br">
                Details
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover:bg-gray-100 border-gray-300 border-y">
              <td className="p-3 w-1/6">123</td>
              <td className="p-3 w-1/6">12 june 2023</td>
              <td className="p-3 w-1/6">Prepaid</td>
              <td className="p-3 w-1/6">Rs 444</td>
              <td className="p-3 w-1/6">Pending</td>
              <td className="p-3 w-1/6">Link</td>
            </tr>
            <tr className="hover:bg-gray-100 border-gray-300 border-y">
              <td className="p-3 w-1/6">123</td>
              <td className="p-3 w-1/6">12 june 2023</td>
              <td className="p-3 w-1/6">Prepaid</td>
              <td className="p-3 w-1/6">Rs 444</td>
              <td className="p-3 w-1/6">Pending</td>
              <td className="p-3 w-1/6">Link</td>
            </tr>
            <tr className="hover:bg-gray-100 border-gray-300 border-y">
              <td className="p-3 w-1/6">123</td>
              <td className="p-3 w-1/6">12 june 2023</td>
              <td className="p-3 w-1/6">Prepaid</td>
              <td className="p-3 w-1/6">Rs 444</td>
              <td className="p-3 w-1/6">Pending</td>
              <td className="p-3 w-1/6">Link</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;
