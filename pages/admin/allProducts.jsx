import AdminSidebar from "@/components/AdminSidebar";
import React from "react";

const AllProducts = () => {
  return (
    <div className="flex justify-end bg-slate-100">
      <AdminSidebar />
      <div className="flex w-4/5">AllProducts</div>
    </div>
  );
};

export default AllProducts;
