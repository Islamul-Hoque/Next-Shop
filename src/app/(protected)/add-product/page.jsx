"use client";

import React, { useContext } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { AuthContext } from "../../../../Context/AuthProvider";
import Loading from "../../../Components/Loading"
import PrivateRoute from "@/Components/PrivateRoute/PrivateRoute";

const AddProduct = () => {
    const categories = ["Electronics", "Home & Furniture", "Audio & Music", "Apparel", "Photography", "Accessories"];
    const { user, loading } = useContext(AuthContext)

    if(loading) return <Loading/>
    const handleSubmit = async(e) => {
        e.preventDefault();

    const imageUrl = e.target.image.value.trim()
    const newProductData = {
        title: e.target.title.value,
        price: parseFloat(e.target.price.value),
        desc: e.target.desc.value,
        full_description: e.target.full_description.value,
        category: e.target.category.value,
        image: imageUrl || "https://i.ibb.co.com/xSY1MdVy/Gemini-Generated-Image-kbgxx4kbgxx4kbgx.png",
        brand: e.target.brand.value,
        stock: parseInt(e.target.stock.value),
        sku: e.target.sku.value,
        features: e.target.features.value.split(",").map(f => f.trim()),
        rating: 0,
        createdAt: new Date().toISOString(),
        userEmail: user?.email || user?.providerData?.[0]?.email
    };

    try {
        const res = await axios.post( "https://next-shop-api-server.vercel.app/all-products", newProductData )
        if (res.data.insertedId) { toast.success(`"${newProductData.title}" added successfully!`);
            e.target.reset();
        }
    } catch (err) { toast.error(`Failed to add ${newProductData.title}. Try again!`) }
}

    return (
        <PrivateRoute>
        <div className="py-20 px-6 md:px-16 bg-linear-to-r from-purple-50 to-indigo-50">
            <div className="mx-auto p-8 rounded-2xl shadow-sm bg-white border border-gray-200 py-16">
            <h2 className="text-[2rem] md:text-[2.8rem] font-bold text-center mb-8 mt-3 text-gray-900">Add <span className='text-gradient'>Product</span></h2>
            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                    <div>
                        <label className="label font-medium mb-1">Product Title</label>
                        <input type="text" name="title" placeholder="Enter product name" className="input focus:border border-slate-300 rounded-[0.4rem] px-3 py-2 text-sm bg-slate-50 focus:outline-none focus:ring-2 focus:ring-purple-400 w-full" required />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Category</label>
                        <select name="category" className="select border-slate-300 rounded-[0.4rem] px-3 py-2 text-sm bg-slate-50 focus:outline-none focus:ring-2 focus:ring-purple-400  w-full" required>
                            <option disabled>Select Category</option>
                            { categories.map((category, index) =>  <option key={index} value={category} >{category}</option> )}
                        </select>
                    </div>

                    <div>
                        <label className="label font-medium mb-1">Price ($)</label>
                        <input type="number" name="price" placeholder="Enter price" className="input border border-slate-300 rounded-[0.4rem] px-3 py-2 text-sm bg-slate-50 focus:outline-none focus:ring-2 focus:ring-purple-400  w-full" required />
                    </div>
                    <div>
                        <label className="label font-medium mb-1">Stock</label>
                        <input type="number" name="stock" placeholder="Enter stock quantity" className="input border-slate-300 rounded-[0.4rem] px-3 py-2 text-sm bg-slate-50 focus:outline-none focus:ring-2 focus:ring-purple-400 w-full" required />
                    </div>
                    <div>
                        <label className="label font-medium mb-1">Brand</label>
                        <input type="text" name="brand" placeholder="Enter brand name" className="input border-slate-300 rounded-[0.4rem] px-3 py-2 text-sm bg-slate-50 focus:outline-none focus:ring-2 focus:ring-purple-400 w-full" required />
                    </div>
                    <div>
                        <label className="label font-medium mb-1">SKU</label>
                        <input type="text" name="sku" placeholder="Enter product SKU" className="input border-slate-300 rounded-[0.4rem] px-3 py-2 text-sm bg-slate-50 focus:outline-none focus:ring-2 focus:ring-purple-400 w-full" required />
                    </div>
                    <div className="md:col-span-2">
                        <label className="label font-semibold mb-1">Image URL</label>
                        <input type="text" name="image" placeholder="Enter image URL (Optional)" className="input border-slate-300 rounded-[0.4rem] px-3 py-2 text-sm bg-slate-50 focus:outline-none focus:ring-2 focus:ring-purple-400 w-full" />
                    </div>
                    <div className="md:col-span-2">
                        <label className="label font-semibold mb-1">Features (comma separated)</label>
                        <input type="text" name="features" placeholder="25 Liter Capacity, Multiple Power Settings, Easy Clean Interior" className="input border-slate-300 rounded-[0.4rem] px-3 py-2 text-sm bg-slate-50 focus:outline-none focus:ring-2 focus:ring-purple-400 w-full" required />
                    </div>
                    <div className="md:col-span-2">
                        <label className="label font-semibold mb-1">Short Description</label>
                        <input type="text" name="desc" placeholder="Enter a brief description" className="input border-slate-300 rounded-[0.4rem] px-3 py-2 text-sm bg-slate-50 focus:outline-none focus:ring-2 focus:ring-purple-400 w-full" required />
                    </div>
                    <div className="md:col-span-2">
                        <label className="label font-semibold mb-1">Full Description</label>
                        <textarea name="full_description" placeholder="Enter full product details" className="textarea border-slate-300 rounded-[0.4rem] px-3 py-2 text-sm bg-slate-50 focus:outline-none focus:ring-2 focus:ring-purple-400 textarea-bordered w-full h-24" rows={3} required></textarea>
                    </div>
                </div>
                <div> <button type="submit" className="btn-primary-w-full mt-4">Add Product</button> </div>
            </form>
        </div>
    </div>
    </PrivateRoute>
    );    
};

export default AddProduct;