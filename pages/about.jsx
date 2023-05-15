import React, { useEffect } from "react";
import { useRouter } from "next/router";

const About = () => {
  const router = useRouter();
  useEffect(() => {
    if (!localStorage.getItem("userToken")) {
      router.push("/");
    }
  }, []);



  return (
    <div className="mx-auto max-w-7xl py-6 px-4 md:px-6">
      <h1 className="text-3xl font-bold mb-4 text-center md:text-left">
        My Profile
      </h1>
      <div className="flex flex-wrap -m-2">
        <div className="p-2 w-1/2">
          <div className="relative">
            <label htmlFor="name" className="leading-7 text-sm text-gray-600">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              // value={userData.name}
              // onChange={(e) => {
              //   handleInputChange(e);
              // }}
              className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
        <div className="p-2 w-1/2">
          <div className="relative">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              // value={userData.email}
              // readOnly={true}
              className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
        <div className="p-2 w-full">
          <div className="relative">
            <label
              htmlFor="address"
              className="leading-7 text-sm text-gray-600"
            >
              Address
            </label>
            <textarea
              id="address"
              name="address"
              // value={userData.address}
              // onChange={(e) => {
              //   handleInputChange(e);
              // }}
              className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            ></textarea>
          </div>
        </div>
        <div className="p-2 w-1/2">
          <div className="relative">
            <label htmlFor="phone" className="leading-7 text-sm text-gray-600">
              Phone
            </label>
            <input
              type="text"
              id="phone"
              name="phone"
              // value={userData.phone}
              // maxLength={10}
              // onChange={(e) => {
              //   handleInputChange(e);
              // }}
              className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
        <div className="p-2 w-1/2">
          <div className="relative">
            <label
              htmlFor="pincode"
              className="leading-7 text-sm text-gray-600"
            >
              Pincode
            </label>
            <input
              type="text"
              id="pincode"
              name="pincode"
              // value={userData.pincode}
              // maxLength={6}
              // onChange={(e) => {
              //   handlePincodeChange(e);
              // }}
              className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
        <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center"></div>
      </div>
    </div>
  );
};

export default About;
