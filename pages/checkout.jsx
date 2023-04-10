import CartItem from "@/components/CartItem";
import Head from "next/head";
import { useRouter } from "next/router";
import Script from "next/script";
import React from "react";

const Checkout = ({ cart, addToCart, removeFromCart, clearCart, subTotal }) => {
  const router = useRouter();

  const initiatePayment = async () => {
    const response = await fetch("http://localhost:3000/api/createorder", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ subTotal }),
    });
    const { order } = await response.json();
    console.log(order.id);
    const options = {
      key: "rzp_test_jARP83mcReHUUL",
      amount: subTotal * 100,
      currency: "INR",
      name: "Example Corp.",
      description: "Test payment",
      handler: function (response) {
        console.log(response);
        router.push("/orderDetail");
      },
      prefill: {
        name: "John Doe",
        email: "john@example.com",
        contact: "9999999999",
      },
      notes: {
        address: "Example address",
      },
      theme: {
        color: "#F37254",
      },
    };
    const loadRazorpay = () => {
      const rzp = new window.Razorpay(options);
      rzp.open();
    };

    if (window.Razorpay) {
      loadRazorpay();
    } else {
      window.addEventListener("load", loadRazorpay);
    }
  };

  return (
    <section className="text-gray-600 body-font relative flex flex-col lg:flex-row w-full space-y-2 lg:space-y-0 lg:space-x-2 p-3 lg:p-14">
      <Script src="https://checkout.razorpay.com/v1/checkout.js"></Script>

      <div className="container p-5 w-full lg:w-2/3">
        <div className="text-center w-full">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            Checkout
          </h1>
        </div>
        <div className="my-5">Delivery Details</div>
        <div className="">
          <div className="flex flex-wrap -m-2">
            <div className="p-2 w-1/2">
              <div className="relative">
                <label
                  htmlFor="name"
                  className="leading-7 text-sm text-gray-600"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="p-2 w-1/2">
              <div className="relative">
                <label
                  htmlFor="email"
                  className="leading-7 text-sm text-gray-600"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="p-2 w-full">
              <div className="relative">
                <label
                  htmlFor="message"
                  className="leading-7 text-sm text-gray-600"
                >
                  Address
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                ></textarea>
              </div>
            </div>
            <div className="p-2 w-1/2">
              <div className="relative">
                <label
                  htmlFor="name"
                  className="leading-7 text-sm text-gray-600"
                >
                  Phone
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="p-2 w-1/2">
              <div className="relative">
                <label
                  htmlFor="email"
                  className="leading-7 text-sm text-gray-600"
                >
                  Pincode
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="p-2 w-1/2">
              <div className="relative">
                <label
                  htmlFor="name"
                  className="leading-7 text-sm text-gray-600"
                >
                  City
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="p-2 w-1/2">
              <div className="relative">
                <label
                  htmlFor="email"
                  className="leading-7 text-sm text-gray-600"
                >
                  State
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center"></div>
          </div>
        </div>
      </div>
      <div
        className={` sidebar flex flex-col space-y-5 w-full md:w-1/2 lg:w-1/3 h-full p-5`}
      >
        <header
          className={`cart w-full flex justify-between text-lg lg:text-xl`}
        >
          <span>Order Summary</span>
        </header>

        <div className="items">
          {Object.keys(cart).length == 0 && (
            <div className="w-full text-center"> Your cart is empty</div>
          )}
          {Object.keys(cart).map((k) => {
            return (
              <CartItem
                key={k}
                itemCode={k}
                quantity={cart[k].qty}
                price={cart[k].price}
                title={cart[k].title}
                size={cart[k].size}
                color={cart[k].color}
                category={cart[k].category}
                desc={cart[k].desc}
                img={cart[k].img}
                addToCart={addToCart}
                removeFromCart={removeFromCart}
              />
            );
          })}
        </div>
        <div className="totalpriceDetails flex flex-col items-center space-y-4">
          <div className="divider w-full h-0.5 bg-gray-200 z-20"></div>
          <div className="subTotal flex justify-between w-full">
            <span>Subtotal</span>
            <span>${subTotal}</span>
          </div>
          <div className="Shipping flex justify-between w-full">
            <span>Shipping</span>
            <span>$5</span>
          </div>
          <div className="taxes flex justify-between w-full">
            <span>Taxes</span>
            <span>$3</span>
          </div>
          <div className="divider w-full h-0.5 bg-gray-200"></div>
          <div className="Total flex justify-between w-full">
            <span>Total</span>
            <span>${subTotal + 5 + 3}</span>
          </div>
        </div>
        {/* <Link href={"/orderDetail"}> */}
        <button
          className="text-white w-full bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
          onClick={() => {
            initiatePayment();
          }}
        >
          Confirm Order & Pay
        </button>
        {/* </Link> */}
      </div>
    </section>
  );
};

export default Checkout;
