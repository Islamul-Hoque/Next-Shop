import React from "react";
import Link from "next/link";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#1b003a] text-white py-12 px-6 md:px-12 border-t border-purple-800">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">

        <div className="space-y-4">
          <Link href="/" className="flex items-center gap-2">
            <h1 className="text-[1.8rem] text-white font-bold">  Next<span className="text-gradient">Shop</span> </h1>
          </Link>
          <p className="text-gray-400 text-sm">  Discover the next generation of online shopping. Quality products, seamless experience.  </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4 text-white">Quick Links</h3>
          <ul className="space-y-2 text-gray-400">
            <li><Link href="/" className="hover:text-[#632ee3] transition-colors duration-200">Home</Link></li>
            <li><Link href="/all-products" className="hover:text-[#632ee3] transition-colors duration-200">All Products</Link></li>
            <li><Link href="/about" className="hover:text-[#632ee3] transition-colors duration-200">About Us</Link></li>
            <li><Link href="/contact" className="hover:text-[#632ee3] transition-colors duration-200">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4 text-white">Support</h3>
          <ul className="space-y-2 text-gray-400">
            <li><Link href="/privacy" className="hover:text-[#632ee3] transition-colors duration-200">Privacy Policy</Link></li>
            <li><Link href="/returns" className="hover:text-[#632ee3] transition-colors duration-200">Returns & Refunds</Link></li>
            <li><Link href="/shipping" className="hover:text-[#632ee3] transition-colors duration-200">Shipping Info</Link></li>
            <li><Link href="/faq" className="hover:text-[#632ee3] transition-colors duration-200">FAQ</Link></li>
          </ul>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold mb-4 text-white">Connect With Us</h3>
          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-[#1877F2] transform transition duration-300 hover:scale-125"><FaFacebookF size={24} /></a>
            {/* <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-[#1DA1F2] transform transition duration-300 hover:scale-125"><FaTwitter size={24} /></a> */}
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white transform transition duration-300 hover:scale-125"><FaXTwitter size={24} /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-[#E4405F] transform transition duration-300 hover:scale-125"><FaInstagram size={24} /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-[#0A66C2] transform transition duration-300 hover:scale-125"><FaLinkedinIn size={24} /></a>
          </div>
        </div>
      </div>

      <div className="border-t border-purple-700 pt-8 mt-12 text-center text-gray-500 text-sm">
        <p>&copy; 2025 NextShop. All rights reserved.</p>
      </div>
    </footer>
  );
}
export default Footer;