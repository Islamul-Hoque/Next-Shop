"use client";
import React, { useContext, useEffect, useState } from "react"
import Link from "next/link";
import { toast } from "react-toastify"
import { AuthContext } from "../../Context/AuthProvider";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const { user, signOutUser } = useContext(AuthContext)
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  const activeClass = (href) =>
    pathname === href ? "font-bold pb-1 text-[#632ee3] border-b-2 border-[#632ee3] transition-colors duration-200"  : "text-gray-700 hover:text-[#632ee3] transition-colors duration-200";

  useEffect(() => { 
      setMounted(true)
  }, []);

  const handleLogOut = () => {
      signOutUser()
          .then(() => toast.success("You've been successfully logged out!"))
          .catch((error) => toast.error(error.code));
  };

  const links = <>
      <li><Link href="/" className={activeClass("/")}>Home</Link></li>
      <li><Link href="/all-products"className={activeClass("/all-products")}>ALL Products</Link></li>
      <li><Link href="/about"className={activeClass("/about")}>About</Link></li>
      <li><Link href="/contact" className={activeClass("/contact")}>Contact</Link></li>
  </>

  return (
    <div className="navbar bg-white  px-6 md:px-8 shadow-md sticky top-0 z-50">
      <div className="navbar-start">
          <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-ghost md:hidden"> <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg> </div>
              <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"> {links} </ul>
          </div>

            <Link href="/" className="flex items-center gap-2"> <h1 className="text-[1.3rem] text-black font-bold"> Next<span className="text-gradient">Shop</span> </h1>   </Link>
      </div>

      <div className="navbar-center hidden md:flex">  <ul className="font-semibold menu menu-horizontal px-1 gap-2"> {links} </ul> </div>

      <div className="navbar-end gap-3">

      { mounted && user ? (
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full"> 
                <img src={user?.photoURL ? user.photoURL : "https://i.ibb.co/RTyj1cSs/1559144-200.png"} alt={user?.displayName || "User"}/>
                </div>
          </div>

            <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-56 shadow p-2">
              <li className="">
                <div className="flex flex-col">
                  <span className="font-semibold text-[1.1rem] text-gray-800">{user?.displayName || "User"}</span>
                  {user && <span className="text-sm text-black">{user?.email || user?.providerData?.[0]?.email }</span>}
                </div>
              </li>

              <li > <Link href="/add-product" className="">  Add Product  </Link> </li>
              <li > <Link href="/manage-products" className="">  Manage Products </Link></li>
              <li><div onClick={handleLogOut}  className="text-red-600 hover:bg-red-50" > Logout</div></li>
            </ul>

              </div>
          ) : (
              <div className="flex items-center gap-3">
                <Link href="/login" className="btn-secondary ">Login</Link>
                <Link href="/register" className="btn-primary">Register</Link>
              </div>
          )}
            </div>
        </div>
    );
}