import Link from "next/link";
import React from "react";

const Forgotpass = () => {
  return (
    <section class="bg-gray-50">
      <div class="flex flex-col items-center px-6 mx-auto md:h-screen py-12 lg:py-24">
        <div class="w-full bg-white rounded-lg shadow-xl md:mt-0 sm:max-w-md xl:p-0 ">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 class="text-xl font-bold leading-tight w-full text-center tracking-tight text-gray-900 md:text-2xl ">
              Confirm your email
            </h1>
            <form class="space-y-4 md:space-y-6" action="#">
              <div>
                <label
                  for="email"
                  class="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                  placeholder="name@company.com"
                  required=""
                />
              </div>

              <button
                type="submit"
                class="w-full text-white bg-slate-800 hover:bg-slate-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Get link to reset password
              </button>
              
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Forgotpass;
