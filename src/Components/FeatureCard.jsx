"use client";
import React from "react";
import { FaLaptop, FaTshirt, FaHeadphones, FaCamera } from 'react-icons/fa'; 
import { motion } from "framer-motion"; 

const categories = [
{ 
    id: 1, 
    name: "Electronics", 
    description: "Smartphones, Laptops, Gadgets & Accessories.", 
    icon: FaLaptop, 
    slug: "electronics" 
},
{ 
    id: 2, 
    name: "Apparel", 
    description: "Trendy clothes for men and women.", 
    icon: FaTshirt, 
    slug: "apparel" 
},
{ 
    id: 3, 
    name: "Audio & Music", 
    description: "Headphones, Speakers, and Audio Gear.", 
    icon: FaHeadphones, 
    slug: "audio" 
},
{ 
    id: 4, 
    name: "Photography", 
    description: "Cameras, Lenses, and Studio Equipment.", 
    icon: FaCamera, 
    slug: "photography" 
},
];


const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function FeaturedCategories() {


    return (
        <section className="py-20 px-6 md:px-16 bg-gray-50 text-gray-800"> 
            <div className="container mx-auto max-w-6xl">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-extrabold text-gray-900 mb-3">Explore Our <span className="text-gradient">Top Categories</span></h2>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">Find exactly what you need from our curated collection of trending categories.</p>
                </div>

                <motion.div 
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
                    initial="hidden"
                    whileInView="visible"
                  
                    viewport={{ once: false, amount: 0.3 }}
                    
                    transition={{ staggerChildren: 0.15 }}> 
                    
                    {categories.map((category) => (
                        <motion.div 
                            key={category.id}
                            variants={cardVariants}
                            
                            className="group block p-6 rounded-xl border border-gray-200 bg-white shadow-lg transform transition-all duration-300 ease-out hover:scale-[1.05] hover:shadow-purple-200/50 cursor-pointer group-hover:delay-0">
                            
                            <div className="text-center">
                                <div className="mb-4 inline-block p-4 rounded-full bg-[#632ee3]/10 text-[#632ee3] transition-colors duration-300 group-hover:bg-[#632ee3]/20">
                                    <category.icon size={32} />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{category.name}</h3>
                                <p className="text-sm text-gray-600">{category.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}