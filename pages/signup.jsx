import Link from "next/link";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Signup = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
  });

  return (
    <section className="bg-gray-50">
      <ToastContainer />
      <div className="flex flex-col items-center px-6 mx-auto md:h-screen py-12 lg:py-24">
        <div className="w-full bg-white rounded-lg shadow-xl md:mt-0 sm:max-w-md xl:p-0 ">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight w-full text-center tracking-tight text-gray-900 md:text-2xl ">
              Create your new account.
            </h1>
            <form
              className="space-y-4 md:space-y-6"
              action="#"
              onSubmit={async (e) => {
                e.preventDefault();

                const res = await fetch("http://localhost:3000/api/signup", {
                  method: "POST", // or 'PUT'
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify(userData),
                });

                const resData = await res.json();

                console.log(resData);
                setUserData({
                  name: "",
                  email: "",
                  password: "",
                });
                toast.success("Welcome to the club!", {
                  position: "top-center",
                  autoClose: 2000,
                  hideProgressBar: true,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: "light",
                });
              }}
            >
              <div>
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={userData.name}
                  onChange={(e) => {
                    setUserData((preValues) => {
                      return { ...preValues, name: e.target.value };
                    });
                  }}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                  placeholder="Jhon doe"
                  required
                />
              </div>
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
                  required
                  value={userData.email}
                  onChange={(e) => {
                    setUserData((preValues) => {
                      return { ...preValues, email: e.target.value };
                    });
                  }}
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                  required
                  value={userData.password}
                  onChange={(e) => {
                    setUserData((preValues) => {
                      return { ...preValues, password: e.target.value };
                    });
                  }}
                />
              </div>

              <button
                type="submit"
                className="w-full text-white bg-slate-800 hover:bg-slate-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Register
              </button>
              <p className="text-sm font-light text-gray-500 ">
                Already have an account yet?{" "}
                <Link
                  href={"/login"}
                  className="font-medium text-primary-600 hover:underline "
                >
                  Log in
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export async function getServerSideProps(context) {
  return {
    props: { message: "he" },
  };
}

export default Signup;
