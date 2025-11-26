"use client";
import React, { useContext } from "react";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import { IoIosMail } from "react-icons/io";
import { AuthContext } from "../../../Context/AuthProvider";
import { toast } from "react-toastify";
import Loading from "../../Components/Loading"

const Contact = () => {
    const {user, loading} = useContext(AuthContext);
    if(loading) return <Loading/>

    const handleSubmit = (e) => {
    e.preventDefault()
    toast.success('Message sent successfully')
    e.target.reset()
}

    return (
        <section className="py-20 px-6 md:px-16 bg-gradient-to-br from-purple-50 via-white to-indigo-50">
            <div className="max-w-7xl mx-auto">
                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }} className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">Contact <span className="text-gradient">NextShop</span></h2>
                    <p className="text-gray-600 max-w-2xl mx-auto mt-5 text-lg">Have questions or feedback? Fill out the form or reach us directly.</p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12">
                    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="card bg-white shadow-xl border border-gray-100">
                        <div className="card-body space-y-6">
                            <h3 className="text-2xl font-bold text-gray-900">Get in touch with us</h3>
                            <p className="text-gray-600">We’re always open to hearing from you. Whether it’s a bug report, feature idea, or a general question about the dashboard – just reach out.</p>
                            <div className="space-y-4 text-sm text-slate-700">
                                <div className="flex items-start gap-3">
                                    <div className="w-9 h-9 rounded-full bg-purple-100 flex items-center justify-center text-purple-600"><IoIosMail /></div>
                                    <div>
                                        <p className="font-semibold text-slate-900">Email</p>
                                        <p className="text-slate-600">support@nextshop.com</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="w-9 h-9 rounded-full bg-purple-100 flex items-center justify-center text-purple-600"><FaClock /></div>
                                    <div>
                                        <p className="font-semibold text-slate-900">Working Hours</p>
                                        <p className="text-slate-600">Sunday – Thursday, 10:00 AM – 7:00 PM</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="w-9 h-9 rounded-full bg-purple-100 flex items-center justify-center text-purple-600"><MdMessage /></div>
                                    <div>
                                        <p className="font-semibold text-slate-900">We can help with</p>
                                        <p className="text-slate-600">General questions, feature suggestions, and bug reports.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="w-9 h-9 rounded-full bg-purple-100 flex items-center justify-center text-purple-600"><FaPhoneAlt /></div>
                                    <div>
                                        <p className="font-semibold text-slate-900">Phone</p>
                                        <p className="text-slate-600">+880 1234 567890</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="w-9 h-9 rounded-full bg-purple-100 flex items-center justify-center text-purple-600"><FaMapMarkerAlt /></div>
                                    <div>
                                        <p className="font-semibold text-slate-900">Address</p>
                                        <p className="text-slate-600">Chattogram, Bangladesh</p>
                                    </div>
                                </div>
                                <p className="text-gray-500 text-sm mt-4 pl-3 border-l-2 border-purple-500"><span className="font-medium text-gray-700">Response time:</span> usually within 24 hours.</p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.form onSubmit={handleSubmit} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="card bg-white shadow-xl border border-gray-100">
                        <div className="card-body space-y-4">
                            <div><label className="block text-sm font-medium text-slate-700 mb-1">Your Name</label><input defaultValue={user?.displayName} required placeholder="Enter your name" className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm bg-slate-50 focus:outline-none focus:ring-2 focus:ring-purple-400"/></div>
                            <div><label className="block text-sm font-medium text-slate-700 mb-1">Email Address</label><input defaultValue={user?.email || user?.providerData?.[0]?.email} required type="email" placeholder="you@example.com" className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm bg-slate-50 focus:outline-none focus:ring-2 focus:ring-purple-400"/></div>
                            <div><label className="block text-sm font-medium text-slate-700 mb-1">Subject</label><input required placeholder="What is this about?" className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm bg-slate-50 focus:outline-none focus:ring-2 focus:ring-purple-400"/></div>
                            <div><label className="block text-sm font-medium text-slate-700 mb-1">Message</label><textarea required rows={4} placeholder="Write your message here..." className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm bg-slate-50 focus:outline-none focus:ring-2 focus:ring-purple-400 resize-none"/></div>
                            <button type="submit" className="btn-primary-w-full">Send Message</button>
                        </div>
                    </motion.form>
                </div>
            </div>
        </section>
    );
};

export default Contact;