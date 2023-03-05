import React, { useState } from "react";
import Link from "next/link";
import { BiCartAlt } from "react-icons/bi";
import { AiFillCloseCircle } from "react-icons/ai";
import CartItem from "./CartItem";

const Navbar = ({ cart, addToCart, removeFromCart, clearCart, subTotal }) => {
  // console.log(cart, addToCart, removeFromCart, clearCart, subTotal);
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <div className="sticky top-0 bg-white z-10">
      <header className="text-gray-600 body-font shadow-md">
        <div className="container mx-auto flex flex-wrap p-4 flex-col md:flex-row items-center">
          <Link
            href={"/"}
            className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
          >
            <span className="ml-3 text-xl cursor-pointer">DevelopersWear</span>
          </Link>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap space-x-14 items-center text-base justify-center">
            <Link href={"/tshirts"} className=" hover:text-gray-900">
              T-shirts
            </Link>
            <Link href={"/hoodies"} className=" hover:text-gray-900">
              Hoodies
            </Link>
            <Link href={"/mugs"} className=" hover:text-gray-900">
              Mugs
            </Link>
            <Link href={"/stickers"} className=" hover:text-gray-900">
              Stickers
            </Link>
          </nav>
          <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
            <BiCartAlt
              className="text-2xl"
              onClick={() => {
                setIsCartOpen(isCartOpen ? false : true);
              }}
            />
          </button>
        </div>
      </header>

      <div
        className={` sidebar flex flex-col space-y-5 overflow-x-auto absolute top-0 right-0 w-full md:w-1/2 lg:w-1/3 bg-slate-50 h-screen p-5 md:p-10 shadow-2xl transition-transform ease-in-out duration-500 ${
          isCartOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <header
          className={` cart w-full flex justify-between text-lg lg:text-xl`}
        >
          <span>Your Cart</span>
          <AiFillCloseCircle
            className="lg:text-3xl cursor-pointer"
            onClick={() => setIsCartOpen(isCartOpen ? false : true)}
          />
        </header>

        <div className="items">
          {Object.keys(cart).length == 0 && (
            <div className="w-full text-center"> Your cart is empty</div>
          )}
          {Object.keys(cart).map((k) => {
            return (
              <CartItem
                key={k}
                name={k}
                desc={cart[k].name}
                size={cart[k].size}
                price={cart[k].price}
                variant={cart[k].variant}
                quantity={cart[k].qty}
                addToCart={addToCart}
                removeFromCart={removeFromCart}
              />
            );
          })}
        </div>

        <div className="btns w-full flex justify-between space-x-2">
          <button
            type="submit"
            onClick={clearCart}
            className="px-4 py-2 w-1/2 hover:bg-slate-500 hover:text-white text-slate-900 rounded"
          >
            Clear cart
          </button>
          <button
            type="submit"
            className="px-4 py-2 w-1/2 bg-slate-700 text-white rounded"
          >
            <Link
              href={"/checkout"}
              onClick={() => {
                setIsCartOpen(false);
              }}
            >
              Checkout
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
