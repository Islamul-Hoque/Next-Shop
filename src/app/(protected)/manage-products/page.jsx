"use client";

import React, { useContext, useEffect, useState } from "react";
import Link from "next/link";
import { FaStar } from "react-icons/fa";
import Swal from "sweetalert2";
import axios from "axios";
import { AuthContext } from "../../../../Context/AuthProvider";
import Loading from "../../../Components/Loading"
import PrivateRoute from "@/Components/PrivateRoute/PrivateRoute";

const ManageProducts = () => {
  const [products, setProducts] = useState([]);
  const [fetching, setFetching] = useState(true); 
  const { user, loading } = useContext(AuthContext);

  useEffect(() => {
    const userEmail = user?.email || user?.providerData?.[0]?.email;
    setFetching(true);
    axios.get(`https://next-shop-api-server.vercel.app/manage-products?email=${userEmail}`)
      .then((res) => {
        setProducts(res.data);
        setFetching(false);
      })
      .catch(() => setFetching(false));
  }, [user]);

  if (loading || fetching ) return <Loading/>

  if (!products.length) {
    return (
      <div className="flex flex-col items-center justify-center py-20 bg-linear-to-r from-purple-50 to-indigo-50">
        <h2 className="text-4xl font-bold text-gray-800">No products found</h2>
        <p className="text-gray-500 mt-2">Start by adding your first product.</p>
        <Link href="/add-product" className="mt-4 btn-primary">  Add Product </Link>
      </div>
    );
  }

  const handleDeleteProduct = (id, title) => {
    const userEmail = user?.email || user?.providerData?.[0]?.email;

    Swal.fire({
      title: "Are you sure?",
      text: `You are about to delete "${title}"!`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`https://next-shop-api-server.vercel.app/manage-products/${id}?email=${userEmail}`)
          .then((res) => {
            if (res.data.deletedCount) {
              Swal.fire("Deleted!", `"${title}" has been deleted successfully! 🗑️`, "success")
              setProducts((prev) => prev.filter((product) => product._id !== id));
            } else {
              Swal.fire("Failed!", "Product not found or already deleted.", "error")
            }
          })
          .catch(() => {
            Swal.fire("Error!", "Failed to delete product.", "error")
          })
      }
    })
  }

  return (
    <PrivateRoute>
    <div className="py-20 px-6 md:px-16 bg-linear-to-r from-purple-50 to-indigo-50">
        <h1 className="text-4xl text-center font-extrabold text-gray-900 mb-12"> Manage <span className="text-gradient">Products</span> </h1>

        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 max-w-7xl mx-auto">
            {products.map((product) => (
            <div key={product._id} className="card rounded-xl overflow-hidden shadow hover:shadow-lg transition duration-300 transform hover:scale-[1.02] group bg-gray-50 border border-gray-200" >
                <div className="relative w-full h-[18.1rem] bg-gray-100 overflow-hidden"> <img src={product.image}  alt={product.title}  className="w-full h-full object-cover transition duration-300 hover:scale-105" /> </div>

                <div className="p-4 flex-1 flex flex-col">
                    <span className="text-xs font-semibold tracking-wider text-purple-600 bg-purple-100 px-2 py-0.5 rounded-full w-fit mb-2"> {product.category}  </span>
                    <h2 className="font-bold text-lg truncate text-gray-900 mb-1">{product.title}</h2>
                    <p className="text-sm text-gray-600 line-clamp-2 min-h-[41px]">{product.desc}</p>

                    <div className="mt-3 flex items-center justify-between pt-2 border-t border-gray-100">
                        <p className="font-extrabold text-xl text-purple-700"> ${Number(product.price).toFixed(2)} </p>
                        <div className="flex items-center text-sm font-medium text-gray-700"> <FaStar size={14} className="text-yellow-500 mr-1" /> <span>{product.rating}</span></div>
                    </div>

                    <div className="flex justify-between items-center gap-4 mt-4">
                      <div className="w-1/2"><Link href={`/all-products/${product._id}`} className=" btn-primary-w-full">  Details </Link></div>
                      <div className="w-1/2"><button onClick={() => handleDeleteProduct(product._id, product.title)}  className=" btn w-full btn-error text-white" > Delete </button></div>
                    </div>

                </div>
            </div>))}
        </div>
    </div>
  </PrivateRoute>
  );
};

export default ManageProducts;