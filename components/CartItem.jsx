import Image from "next/image";
import React from "react";
import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";
import { MdOutlineDeleteOutline } from "react-icons/md";

const CartItem = (props) => {
  return (
    <div className="p-2 flex shadow-md bg-white my-2">
      <img
        className="w-36"
        src={
          "https://www.stickerpress.in/media/products/800x800/24dc9561f16a4f6781c6b78692187d1a.jpg"
        }
      />
      <div className="right p-2 flex flex-col space-y-2">
        <div className="name&desc text-lg flex flex-col">
          <span className="name">{props.name}</span>
          <span className="description text-gray-400">{props.desc}</span>
        </div>
        <div className="price">{props.price}</div>
        <div className="quantityManager flex items-center space-x-2">
          <AiFillMinusCircle
            onClick={() => {
              props.removeFromCart(
                props.name,
                1,
                props.price,
                props.desc,
                props.size,
                props.varient
              );
            }}
            className="text-xl cursor-pointer"
          />
          <div className="quantity">{props.quantity}</div>
          <AiFillPlusCircle
            onClick={() => {
              props.addToCart(
                props.name,
                1,
                props.price,
                props.desc,
                props.size,
                props.varient
              );
            }}
            className="text-xl cursor-pointer"
          />
          <MdOutlineDeleteOutline
            onClick={() => {
              props.removeFromCart(
                props.name,
                props.quantity,
                props.price,
                props.desc,
                props.size,
                props.varient
              );
            }}
            className="text-xl cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default CartItem;
