"use client";
import React from "react";
import { motion } from "framer-motion";

const values = [
    {
        id: 1,
        title: "Fast & Free Shipping",
        description: "Free delivery for all orders over $50, delivered within 3-5 days.",
        img: "https://cdn-icons-png.flaticon.com/128/11153/11153339.png",
    },
    {
        id: 2,
        title: "100% Secure Checkout",
        description: "Your payment details are protected with 256-bit encryption.",
        img: "https://cdn-icons-png.flaticon.com/128/4744/4744315.png",
    },
    {
        id: 3,
        title: "24/7 Customer Support",
        description: "Got questions? Get instant help from our dedicated support team.",
        img: "https://cdn-icons-png.flaticon.com/128/4961/4961759.png",
    },
    {
        id: 4,
        title: "30 Day Money Back",
        description: "If you are not 100% satisfied, you can return your purchase easily.",
        img: "https://cdn-icons-png.flaticon.com/128/3235/3235967.png",
    },
];

const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
};

const CoreValues = () => {
    return (
        <section className="py-20 px-6 md:px-16 bg-white text-gray-800">
            <div className="container mx-auto max-w-6xl">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-extrabold text-gray-900 mb-3"> Our <span className="text-gradient">Core Values</span> </h2>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">  Commitment to quality, reliability, and unparalleled customer service. </p>
                </div>

                <motion.div  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"initial="hidden"  whileInView="visible" viewport={{ once: false, amount: 0.4 }} transition={{ staggerChildren: 0.15 }}> 
                    {values.map((value) => (
                        <motion.div key={value.id} variants={cardVariants} className="group flex flex-col items-center text-center p-6 rounded-xl border border-gray-200 bg-gray-50 shadow-md transform transition-all duration-300 hover:scale-[1.03] hover:shadow-lg cursor-pointer">
                            
                            <div className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full transition-all duration-300 group-hover:scale-110">
                                <img  src={value.img}   alt={value.title}  className="w-12 h-12 object-contain"  />
                            </div>

                            <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>

                            <p className="text-sm text-gray-600 line-clamp-3">{value.description}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
export default CoreValues;