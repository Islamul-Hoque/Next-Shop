"use client";
import React from "react";
import Link from "next/link";
import { FaStar } from 'react-icons/fa'; 
import { motion } from "framer-motion"; 

const bestSellingProducts = [
{ 
    id: 101, 
    name: "Pro Wireless Headset X", 
    desc: "Noise cancellation, superior bass quality.", 
    price: "149.99", 
    rating: 4.5, 
    categoryName: "Audio & Music", 
    imgUrl: "/images/headset.jpg" 
},
{ 
    id: 102, 
    name: "Classic Cotton T-Shirt", 
    desc: "Premium cotton, comfortable fit, available in all sizes.", 
    price: "29.00", 
    rating: 4.0, 
    categoryName: "Apparel", 
    imgUrl: "/images/tshirt.jpg" 
},
{ 
    id: 103, 
    name: "Ultra Slim Laptop", 
    desc: "Lightweight, long-lasting battery, 12th gen processor.", 
    price: "999.50", 
    rating: 4.9, 
    categoryName: "Electronics", 
    imgUrl: "/images/laptop.jpg" 
},
];

const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
};

const BestSellingProducts = () => {
    return (
        <section className="py-20 px-6 md:px-16 bg-white text-gray-800"> 
            <div className="container mx-auto max-w-6xl">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-extrabold text-gray-900 mb-3">Explore Our <span className="text-gradient">Top 3 Bestsellers</span></h2>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">Trusted and loved by our community. Grab yours before they run out!</p>
                </div>

                <motion.div 
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.4 }}
                    transition={{ staggerChildren: 0.15 }}> 
                    
                    {bestSellingProducts.map((product) => (
                        <motion.div 
                            key={product.id}
                            variants={cardVariants}
                            className="group flex flex-col items-center text-center p-6 rounded-xl border border-gray-200 bg-gray-50 shadow-md transform transition-all duration-300 hover:scale-[1.03] hover:shadow-lg cursor-pointer">
                            
                            <div className="relative h-48 bg-gray-100 flex items-center justify-center">
                                <span className="text-sm text-gray-400">[{product.name} Image]</span>
                            </div>
                            
                            <div className="p-5 space-y-3">
                                <div className="flex items-center justify-between">
                                    <span className="text-xs font-semibold uppercase tracking-wider text-purple-600 bg-purple-50 px-2 py-1 rounded-full">{product.categoryName}</span>
                                    <div className="flex items-center text-sm font-medium text-gray-700">
                                        <FaStar size={12} className="text-yellow-500 mr-1" />
                                        <span>{product.rating}</span>
                                    </div>
                                </div>
                                
                                <h3 className="text-xl font-bold text-gray-900 truncate">{product.name}</h3>
                                <p className="text-sm text-gray-600 line-clamp-2 h-10">{product.desc}</p>
                                
                                <div className="flex items-center justify-between pt-2 border-t border-gray-100">
                                    <div className="text-2xl font-extrabold text-[#632ee3]">${product.price}</div>
                                    <Link 
                                        href={`/products/${product.id}`}
                                        className="inline-flex items-center text-sm font-semibold text-white bg-[#632ee3] px-4 py-2 rounded-lg transition-colors duration-300 hover:bg-purple-700">
                                        Buy Now
                                    </Link>
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