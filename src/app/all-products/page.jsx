import Link from "next/link";
import { FaStar } from "react-icons/fa";

const API_URL = "https://next-shop-api-server.vercel.app/all-products";

const AllProductsPage = async() => {
    const res = await fetch(API_URL, { cache: "no-store" });
    const products = await res.json();
    const categories = ["Electronics", "Home & Furniture", "Audio & Music", "Apparel", "Photography", "Accessories"];

return (
    <div className="p-4 md:p-8">
        <div className="text-center mb-10">
            <h1 className="text-4xl font-extrabold text-gray-900 mb-3"> Discover Our <span className="text-gradient">Product Collection</span> </h1>
            <p className="text-md lg:text-lg text-gray-600 max-w-2xl mx-auto"> Find your perfect match. Filter by category or use the search bar to explore our entire catalog.</p>
        </div>

        <div className="mb-8 flex justify-center gap-8">
            <label className="input w-[12rem] md:w-[20rem] flex items-center gap-2">
                <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">  <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor"> <circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /> </g> </svg>
                <input   type="search" className="outline-none bg-transparent w-full" placeholder="search Apps" required />
            </label>

            <select defaultValue="Pick a Category"className="select w-[12rem] md:w-[20rem]" >
                <option disabled={true}>Pick a Category</option>
                { categories.map((category, index) =>  <option key={index}>{category}</option> )}
            </select>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 max-w-7xl mx-auto">
            { products.map( product => 
            <div key={product._id} className="card rounded-xl overflow-hidden shadow hover:shadow-lg transition duration-300 transform hover:scale-[1.02] group bg-gray-50 border border-gray-200"  >
                <div className="relative w-full h-[18.1rem] bg-gray-100 overflow-hidden"> <img src={product.image}  alt={product.title}  className="w-full h-full object-cover transition duration-300 hover:scale-105" /> </div>

                <div className="p-4 flex-1 flex flex-col">
                    <span className="text-xs font-semibold tracking-wider text-purple-600 bg-purple-100 px-2 py-0.5 rounded-full w-fit mb-2"> {product.category}</span>
                    <h2 className="font-bold text-lg truncate text-gray-900 mb-1">{product.title}</h2>
                    <p className="text-sm text-gray-600 line-clamp-2 min-h-[40px]">{product.desc}</p>

                    <div className="mt-3 flex items-center justify-between pt-2 border-t border-gray-100">
                        <p className="font-extrabold text-xl text-purple-700">${Number(product.price).toFixed(2)}</p>
                        <div className="flex items-center text-sm font-medium text-gray-700">
                            <FaStar size={14} className="text-yellow-500 mr-1" /> <span>{product.rating}</span>
                        </div>
                    </div>
                    <Link href={`/all-products/${product._id}`} className="mt-4 btn-primary-w-full" > Details </Link>
                </div>
            </div>)}
        </div>
    </div>
)}

export default AllProductsPage;