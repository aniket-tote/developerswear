import { useRouter } from "next/router";
import React, { useRef, useState } from "react";
// import axios from "axios";
import mongoose from "mongoose";
import Product from "@/models/Product";

const Slug = ({ addToCart, tshirt, varients, buyNow }) => {
  const pincodeInput = useRef();
  const [availabilityMessage, setAvailabilityMessage] = useState("");

  const checkAvailability = async () => {
    let response = await fetch(`http://localhost:3000/api/pincode`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ pincode: pincodeInput.current.value }),
    });
    let data = await response.json();
    setAvailabilityMessage(data.message);
  };

  const changevarient = (color, size) => {
    let url = `http://localhost:3000/product/${varients[color][size]["slug"]}`;
    window.location = url;
  };

  return (
    <>
      <div>
        <section className="text-gray-600 body-font overflow-hidden">
          <div className="container px-5 py-12 mx-auto">
            <div className="lg:w-4/5 mx-auto flex flex-wrap">
              <img
                alt="ecommerce"
                className="lg:w-1/2 w-full aspect-square object-cover object-center rounded"
                src={tshirt.data.img}
              />
              <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                <h2 className="text-sm title-font text-gray-500 tracking-widest">
                  BRAND NAME HERE
                </h2>
                <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                  {tshirt.data.title}
                </h1>
                <div className="flex mb-2">
                  <span className="flex items-center">
                    <svg
                      fill="currentColor"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-4 h-4 text-indigo-500"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                    </svg>
                    <svg
                      fill="currentColor"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-4 h-4 text-indigo-500"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                    </svg>
                    <svg
                      fill="currentColor"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-4 h-4 text-indigo-500"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                    </svg>
                    <svg
                      fill="currentColor"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-4 h-4 text-indigo-500"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                    </svg>
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-4 h-4 text-indigo-500"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                    </svg>
                    <span className="text-gray-600 ml-3">4 Reviews</span>
                  </span>
                </div>
                <div className="leading-relaxed">
                  {tshirt.data.desc.split("\\n").map((e) => {
                    return <div key={e}>{e}</div>;
                  })}
                </div>
                <div className="flex mt-3 pb-3 border-b-2 border-gray-200 mb-4 space-x-12">
                  <div className="flex flex-col space-y-2">
                    <div className="mr-3">
                      <span className="font-semibold">Color </span> :{" "}
                      {tshirt.data.color}
                    </div>
                    <div className="colors flex space-x-1 items-center">
                      {Object.keys(varients).map((e) => {
                        return (
                          <button
                            key={e}
                            onClick={() => {
                              changevarient(e, Object.keys(varients[e])[0]);
                            }}
                            className={`rounded-full focus:outline-none ${
                              e == "white" || e == "black"
                                ? "bg-" + e
                                : "bg-" + e + "-700"
                            } ${e === "maroon" ? "bg-red-700" : ""} 
                            ${e === "grey" ? "bg-gray-400" : ""} ${
                              e === "navy" ? "bg-blue-900" : ""
                            }
                            ${
                              e === tshirt.data.color
                                ? "border-black border-2 w-8 h-8 "
                                : "border-gray-300 border w-6 h-6 "
                            }`}
                          ></button>
                        );
                      })}
                    </div>
                  </div>
                  <div className="flex flex-col ml-6 space-y-2">
                    <div className="mr-3">
                      <span className="font-semibold">Size </span>:{" "}
                      {tshirt.data.size}
                    </div>
                    <div className="relative">
                      <select
                        onChange={(e) => {
                          changevarient(tshirt.data.color, e.target.value);
                        }}
                        value={tshirt.data.size}
                        className="rounded border appearance-none border-gray-300 py-1 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10"
                      >
                        {Object.keys(varients[tshirt.data.color]).map((e) => {
                          return <option key={e}>{e}</option>;
                        })}
                      </select>
                      <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          className="w-4 h-4"
                          viewBox="0 0 24 24"
                        >
                          <path d="M6 9l6 6 6-6"></path>
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between">
                  <span className="title-font font-medium text-2xl text-gray-900">
                    Price: ₹{tshirt.data.price}
                  </span>
                  <div className="btns flex space-x-4">
                    <button
                      onClick={() => {
                        buyNow(
                          tshirt.data.slug,
                          1,
                          tshirt.data.price,
                          tshirt.data.title,
                          tshirt.data.size,
                          tshirt.data.color,
                          tshirt.data.category,
                          tshirt.data.img,
                          tshirt.data.desc
                        );
                      }}
                      className="flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"
                    >
                      Buy now
                    </button>
                    <button
                      onClick={() => {
                        addToCart(
                          tshirt.data.slug,
                          1,
                          tshirt.data.price,
                          tshirt.data.title,
                          tshirt.data.size,
                          tshirt.data.color,
                          tshirt.data.category,
                          tshirt.data.img,
                          tshirt.data.desc
                        );
                      }}
                      className="flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"
                    >
                      Add to cart
                    </button>
                    <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500">
                      <svg
                        fill="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="w-full mt-5">
                  <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                    Check availability in your city
                  </h2>
                  <div className="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start">
                    <div className="relative w-56 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
                      <label
                        htmlFor="footer-field"
                        className="leading-7 text-sm text-gray-600"
                      >
                        Pincode
                      </label>
                      <input
                        ref={pincodeInput}
                        type="number"
                        id="footer-field"
                        name="footer-field"
                        className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      />
                    </div>
                    <button
                      onClick={checkAvailability}
                      className="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"
                    >
                      Check
                    </button>
                  </div>
                  <p className="text-gray-500 text-sm mt-2 md:text-left text-center">
                    {availabilityMessage}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export async function getServerSideProps(context) {
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.URL);
  }

  let product = await Product.findOne({ slug: context.params.slug });

  let varients = await Product.find({ title: product.title });

  let colorSizeSlug = {};

  for (let item of varients) {
    if (Object.keys(colorSizeSlug).includes(item.color)) {
      colorSizeSlug[item.color][item.size] = { slug: item.slug };
    } else {
      colorSizeSlug[item.color] = {};
      colorSizeSlug[item.color][item.size] = { slug: item.slug };
    }
  }

  return {
    props: {
      tshirt: JSON.parse(JSON.stringify({ data: product })),
      varients: JSON.parse(JSON.stringify(colorSizeSlug)),
    },
  };
}

export default Slug;
