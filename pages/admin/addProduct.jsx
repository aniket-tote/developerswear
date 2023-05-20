import AdminSidebar from "@/components/AdminSidebar";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddProduct = () => {
  const [product, setProduct] = useState({
    title: "",
    desc: "",
    img: "",
    category: "tshirt",
    size: "XS",
    color: "",
    price: "",
    availableQty: "",
  });

  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);
  };

  const handleChange = (e) => {
    setProduct((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  return (
    <div className="flex justify-end bg-slate-100">
      <AdminSidebar />
      <main className="p-8 w-4/5 flex flex-col">
        <h1 className="text-2xl font-bold mb-4">Add Products</h1>

        <form
          method="POST"
          className="w-full flex flex-wrap gap-4"
          onSubmit={async (e) => {
            e.preventDefault();
            if (product.category === "mug") {
              setProduct((prev) => {
                return { ...prev, size: "" };
              });
            }
            if (product.category === "sticker") {
              setProduct((prev) => {
                return { ...prev, size: "", color: "" };
              });
            }
            if (selectedImage) {
              try {
                const formData = new FormData();
                formData.append("file", selectedImage);
                formData.append("upload_preset", "ml_default");

                const responseCloudinary = await fetch(
                  "https://api.cloudinary.com/v1_1/dkyipn99j/image/upload",
                  {
                    method: "POST",
                    body: formData,
                  }
                );
                if (responseCloudinary.ok) {
                  const data = await responseCloudinary.json();
                  const imageUrl = data.secure_url;

                  console.log("Image URL:", imageUrl);
                  setProduct((prev) => {
                    return { ...prev, img: imageUrl };
                  });

                  const updatedProduct = { ...product, img: imageUrl };

                  const response = await fetch(
                    "http://localhost:3000/api/addproducts",
                    {
                      method: "POST",
                      headers: {
                        "Content-Type": "application/json",
                      },
                      body: JSON.stringify([
                        {
                          ...updatedProduct,
                        },
                      ]),
                    }
                  );

                  const responseData = await response.json();
                  if (responseData.success) {
                    toast.success(`Product Added`, {
                      position: "top-center",
                      autoClose: 2000,
                      hideProgressBar: true,
                      closeOnClick: true,
                      pauseOnHover: true,
                      draggable: true,
                      progress: undefined,
                      theme: "light",
                    });
                    setProduct({
                      title: "",
                      desc: "",
                      img: "",
                      category: "tshirt",
                      size: "XS",
                      color: "",
                      price: "",
                      availableQty: "",
                    });
                  } else {
                    toast.error(responseData.message, {
                      position: "top-center",
                      autoClose: 2000,
                      hideProgressBar: true,
                      closeOnClick: true,
                      pauseOnHover: true,
                      draggable: true,
                      progress: undefined,
                      theme: "light",
                    });
                  }
                } else {
                  console.error("Error uploading image:", response.statusText);
                }
              } catch (error) {
                console.error("Error uploading image:", error);
              }
            } else {
              console.log("No image selected");
            }
          }}
        >
          <div className="w-1/3">
            <label
              htmlFor="title"
              className="block mb-1 text-sm font-medium text-gray-900 "
            >
              Title
            </label>
            <input
              type="text"
              name="title"
              id="title"
              className="w-full rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out text-gray-900"
              required
              value={product.title}
              onChange={(e) => {
                handleChange(e);
              }}
            />
          </div>
          <div className="w-1/3">
            <label
              htmlFor="desc"
              className="block mb-1 text-sm font-medium text-gray-900 "
            >
              Description
            </label>
            <input
              type="text"
              name="desc"
              id="desc"
              value={product.desc}
              className="w-full rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out text-gray-900"
              onChange={(e) => {
                handleChange(e);
              }}
            />
          </div>
          <div className="w-1/3">
            <label
              htmlFor="color"
              className="block mb-1 text-sm font-medium text-gray-900 "
            >
              Color
            </label>
            <input
              type="text"
              name="color"
              id="color"
              value={product.color}
              className="w-full rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out text-gray-900"
              onChange={(e) => {
                handleChange(e);
              }}
            />
          </div>
          <div className="w-1/3">
            <label
              htmlFor="price"
              className="block mb-1 text-sm font-medium text-gray-900 "
            >
              Price (in Rupees)
            </label>
            <input
              type="number"
              name="price"
              id="price"
              value={product.price}
              className="w-full rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out text-gray-900"
              onChange={(e) => {
                handleChange(e);
              }}
            />
          </div>
          <div className="w-1/3">
            <label
              htmlFor="availableQty"
              className="block mb-1 text-sm font-medium text-gray-900 "
            >
              Available Quantity
            </label>
            <input
              type="number"
              name="availableQty"
              id="availableQty"
              value={product.availableQty}
              className="w-full rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out text-gray-900"
              onChange={(e) => {
                handleChange(e);
              }}
            />
          </div>
          <div className="">
            <label
              htmlFor="category"
              className="block mb-1 text-sm font-medium text-gray-900 "
            >
              Category
            </label>
            <select
              name="category"
              id="category"
              value={product.category}
              onChange={(e) => {
                handleChange(e);
              }}
              className=" bg-white border border-gray-300 hover:border-indigo-500 px-4 py-2.5 rounded leading-tight focus:outline-none focus:shadow-outline"
            >
              <option value="tshirt">Tshirt</option>
              <option value="hoodie">Hoodie</option>
              <option value="mug">Mug</option>
              <option value="sticker">Sticker</option>
            </select>
          </div>
          {(product.category === "tshirt" || product.category === "hoodie") && (
            <div className="">
              <label
                htmlFor="size"
                className="block mb-1 text-sm font-medium text-gray-900 "
              >
                Size
              </label>
              <select
                name="size"
                id="size"
                value={product.size}
                onChange={(e) => {
                  handleChange(e);
                }}
                className=" bg-white border border-gray-300 hover:border-indigo-500 px-4 py-2.5 rounded leading-tight focus:outline-none focus:shadow-outline"
              >
                <option value="XS">XS</option>
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
                <option value="XL">XL</option>
                <option value="XXL">XXL</option>
              </select>
            </div>
          )}
          <div>
            <label htmlFor="imageUpload">Upload Image:</label>
            <input
              type="file"
              id="imageUpload"
              accept="image/*"
              onChange={handleImageChange}
            />
          </div>
          <div className="w-full pl-[33%] mt-3">
            <button
              type="submit"
              className="w-max h-max px-4 py-2 bg-indigo-500 hover:bg-indigo-600 rounded text-white place-self-end mb-1"
            >
              Add
            </button>
          </div>
        </form>
      </main>
    </div>
  );
};

export default AddProduct;
