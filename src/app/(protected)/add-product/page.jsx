"use client";

import React from "react";
import { toast } from "react-toastify";
import axios from "axios";

const AddProduct = () => {
    const categories = ["Electronics", "Home & Furniture", "Audio & Music", "Apparel", "Photography", "Accessories"];

    const handleSubmit = async(e) => {
        e.preventDefault();

    const newProductData = {
        title: e.target.title.value,
        price: parseFloat(e.target.price.value),
        desc: e.target.desc.value,
        full_description: e.target.full_description.value,
        category: e.target.category.value,
        image: e.target.image.value,
        brand: e.target.brand.value,
        stock: parseInt(e.target.stock.value),
        sku: e.target.sku.value,
        features: e.target.features.value.split(",").map(f => f.trim()),
        rating: 0
    };

    console.log("Checking product data before POST:", newProductData);

    // fetch("https://next-shop-api-server.vercel.app/all-products", {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify(newProductData)
    // })
    // .then(res => res.json())
    // .then(data => {
    //     if(data.insertedId){ toast.success(`"${newProductData.title}" added successfully!`);
    //     e.target.reset() }
    // })
    // .catch(err => { toast.error(`Failed to add ${newProductData.title}. Try again!`); });
    try {
        const res = await axios.post( "https://next-shop-api-server.vercel.app/all-products", newProductData )

        if (res.data.insertedId) { toast.success(`"${newProductData.title}" added successfully!`);
            e.target.reset();
        }
    } catch (err) { toast.error(`Failed to add ${newProductData.title}. Try again!`) }
}

    return (
        <div className="px-6 md:px-10">
            <div className="mx-auto p-8 rounded-2xl shadow-sm bg-white border border-gray-200 my-16">
            <h2 className="text-[2rem] md:text-[2.8rem] font-bold text-center mb-8 mt-3 text-gray-900">Add <span className='text-gradient'>Product</span></h2>
        <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
            <div>
                <label className="label font-medium mb-1">Product Title</label>
                <input type="text" name="title" placeholder="Microwave Oven Panasonic 25L" className="input bg-gray-50 w-full" required />
            </div>
            <div>
                <label className="label font-medium mb-1">Category</label>
                <select name="category" className="select bg-gray-50 select-bordered w-full" required>
                    <option disabled>Select Category</option>
                    { categories.map((category, index) =>  <option key={index} value={category} >{category}</option> )}
                </select>
            </div>

            <div>
                <label className="label font-medium mb-1">Price ($)</label>
                <input type="number" name="price" placeholder="92.5" className="input bg-gray-50 w-full" required />
            </div>
            <div>
                <label className="label font-medium mb-1">Stock</label>
                <input type="number" name="stock" placeholder="15" className="input bg-gray-50 w-full" required />
            </div>
            <div>
                <label className="label font-medium mb-1">Brand</label>
                <input type="text" name="brand" placeholder="Panasonic" className="input bg-gray-50 w-full" required />
            </div>
            <div>
                <label className="label font-medium mb-1">SKU</label>
                <input type="text" name="sku" placeholder="PNO-25L-A7" className="input bg-gray-50 w-full" required />
            </div>
            <div className="md:col-span-2">
                <label className="label font-semibold mb-1">Image URL</label>
                <input type="text" name="image" placeholder="https://images-na.ssl-images-amazon.com/images/I/51SdVrTUf8L._UL500_.jpg" className="input bg-gray-50 w-full" required />
            </div>
            <div className="md:col-span-2">
                <label className="label font-semibold mb-1">Short Description</label>
                <input type="text" name="desc" placeholder="25L capacity, perfect for heating, cooking, and defrosting food quickly." className="input bg-gray-50 w-full" required />
            </div>
            <div className="md:col-span-2">
                <label className="label font-semibold mb-1">Full Description</label>
                <textarea name="full_description" placeholder="Panasonic control panel are easy to use and reliable. Clean interior and exterior with minimal signs of use. Energy-efficient." className="textarea bg-gray-50 textarea-bordered w-full h-24" rows={3} required></textarea>
            </div>
            <div className="md:col-span-2">
                <label className="label font-semibold mb-1">Features (comma separated)</label>
                <input type="text" name="features" placeholder="25 Liter Capacity, Multiple Power Settings, Easy Clean Interior" className="input bg-gray-50 w-full" required />
            </div>
        </div>
            <div> <button type="submit" className="btn-primary-w-full mt-4">Add Product</button> </div>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;