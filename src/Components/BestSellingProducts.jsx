"use client";
import React from "react";
import { FaStar } from 'react-icons/fa'; 
import { motion } from "framer-motion"; 

const bestSellingProducts = [
{ 
    id: 101, 
    name: "Pro Wireless Headset X", 
    desc: "Noise cancellation, superior bass quality.", 
    price: "149.99", 
    rating: 4.9, 
    categoryName: "Audio & Music", 
    imgUrl: "https://i.ibb.co.com/Fbzjx21z/05w-Uuc0b-PVnl2q-Lo5l-POZVf-1-fit-lim-size-1200x630-v1595592206.jpg" 
},
{ 
    id: 102, 
    name: "Wireless Earbuds", 
    desc: "True wireless, long battery life, fast charging.", 
    price: "79.99", 
    rating: 4.7, 
    categoryName: "Accessories", 
    imgUrl: "https://i.ibb.co.com/3Ymr7yjr/9-12.jpg" 
},
{ 
    id: 103, 
    name: "Gaming Mouse", 
    desc: "High precision, RGB lights, ergonomic design.", 
    price: "59.99", 
    rating: 4.9, 
    categoryName: "Electronics", 
    imgUrl: "https://i.ibb.co.com/YTQ23LmC/gaming-mice-1600-x-900-wallpaper-vitcrhi4vf0gfvzn.jpg" 
}
];

const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
};

const BestSellingProducts = () => {
    return (
        <section className="pb-20 px-6 md:px-16 bg-linear-to-r from-purple-50 to-indigo-50 text-gray-800"> 
            <div className="container mx-auto max-w-6xl">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-extrabold text-gray-900 mb-3">Our Top <span className="text-gradient"> 3 Bestsellers</span></h2>
                    <p className="text-gray-600 text-lg text-center w-[90%] mx-auto">Popular among our users. Explore these top selections even though they are currently out of stock</p>
                </div>

                <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8" initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.4 }} transition={{ staggerChildren: 0.15 }}> 
                    {bestSellingProducts.map((product) => (
                        <motion.div key={product.id} variants={cardVariants} className="group flex flex-col overflow-hidden rounded-xl border border-gray-200 bg-gray-50 shadow-md transform transition-all duration-300 hover:scale-[1.03] hover:shadow-lg cursor-pointer">
                            <div className="relative w-full h-[18.1rem] bg-gray-100 overflow-hidden">
                                <img src={product.imgUrl} alt={product.name} className="w-full h-full object-cover transition duration-300 hover:scale-105" />
                            </div>

                            <div className="p-4 flex-1 flex flex-col justify-between">
                                <div>
                                    <span className="text-xs font-semibold tracking-wider text-purple-600 bg-purple-100 px-2 py-0.5 rounded-full w-fit mb-2">{product.categoryName}</span>
                                    <h2 className="font-bold text-lg truncate text-gray-900 mb-1">{product.name}</h2>
                                    <p className="text-sm text-gray-600 line-clamp-2 min-h-[40px]">{product.desc}</p>
                                </div>

                                <div className="mt-3 flex items-center justify-between pt-2 border-t border-gray-100">
                                    <p className="font-extrabold text-xl text-purple-700">${Number(product.price).toFixed(2)}</p>
                                    <div className="flex items-center text-sm font-medium text-gray-700"><FaStar size={14} className="text-yellow-500 mr-1" />
                                    <span>{product.rating}</span>
                                    </div>
                                    <div className="badge badge-outline badge-error">Out of Stock</div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
export default BestSellingProducts;