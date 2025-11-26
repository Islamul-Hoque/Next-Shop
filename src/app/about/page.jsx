"use client";
import React from "react";
import { motion } from "framer-motion";

const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
}

const aboutCards = [
{
    id: 1,
    title: "Our Mission",
    description:"Empower shoppers with a seamless experience that blends speed, simplicity, and quality—so buying what you love feels effortless.",
},
{
    id: 2,
    title: "Our Vision",
    description:"Redefine eCommerce by merging clean design, strong technology, and customer obsession — creating a brand people trust long-term.",
},
{
    id: 3,
    title: "Our Values",
    description:"We operate with innovation, honesty, and a commitment to excellence — always pushing to deliver better experiences every day.",
},
]

const About = () => {
    return (
        <div className="py-20 px-6 md:px-16 bg-linear-to-br from-gray-50 via-white to-gray-100">
            <div className="max-w-7xl mx-auto">

                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }} className="text-center mb-16" >
                    <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900"> About <span className="text-gradient">NextShop</span> </h2>
                    <p className="text-center text-gray-600 max-w-3xl mx-auto mt-4 mb-12">Welcome to NextShop! We are passionate about delivering quality products and  a seamless shopping experience. Our platform is designed with care, focusing   on clean design, responsiveness, and user-friendly interactions. </p>
                </motion.div>

                <motion.div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3" initial="hidden"  whileInView="visible" viewport={{ once: true, amount: 0.3 }} transition={{ staggerChildren: 0.15 }} >
                    {aboutCards.map((card) => (
                        <motion.div key={card.id} variants={cardVariants} className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-md hover:shadow-xl p-6 text-center border border-gray-100 transition-all hover:scale-[1.04]" >
                            <h3 className="text-xl font-bold text-gray-900 mb-2">{card.title}</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">{card.description}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default About;