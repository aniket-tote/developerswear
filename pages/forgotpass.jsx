import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

const Forgotpass = () => {
  const router = useRouter();
  useEffect(() => {
    if (localStorage.getItem("token")) {
      router.push("/");
    }
  }, []);
  return (
    <section className="bg-gray-50">
      <div className="flex flex-col items-center px-6 mx-auto md:h-screen py-12 lg:py-24">
        <div className="w-full bg-white rounded-lg shadow-xl md:mt-0 sm:max-w-md xl:p-0 ">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight w-full text-center tracking-tight text-gray-900 md:text-2xl ">
              Confirm your email
            </h1>
            <form className="space-y-4 md:space-y-6" action="#">
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                  placeholder="name@company.com"
                  required=""
                />
              </div>

              <button
                type="submit"
                className="w-full text-white bg-slate-800 hover:bg-slate-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
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
