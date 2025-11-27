import React from "react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative flex items-center justify-center min-h-[70vh] md:min-h-[85vh] px-6 md:px-16 overflow-hidden bg-linear-to-br from-[#1b003a] via-[#330058] to-[#5b008d]">
      <div className="absolute inset-0 bg-black/10 backdrop-blur-sm"></div>

      <div className="absolute top-[5%] left-[5%] w-48 h-48 md:w-96 md:h-96 bg-[#9347d4] rounded-full mix-blend-lighten filter blur-4xl opacity-10 animate-blob z-30"></div>
      <div className="absolute bottom-[10%] right-[5%] w-64 h-64 md:w-[450px] md:h-[450px] bg-[#673ab7] rounded-full mix-blend-lighten filter blur-4xl opacity-10 animate-blob animation-delay-2000 z-30"></div>
      <div className="absolute top-[20%] right-[15%] w-36 h-36 md:w-72 md:h-72 bg-[#b39ddb] rounded-full mix-blend-lighten filter blur-4xl opacity-10 animate-blob animation-delay-4000 z-30"></div>
      <div className="absolute bottom-[0%] left-[20%] w-28 h-28 md:w-64 md:h-64 bg-[#7e57c2] rounded-full mix-blend-lighten filter blur-4xl opacity-20 animate-blob animation-delay-6000 z-30"></div>

      <div className="relative z-40 text-center max-w-4xl text-white"> 
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 leading-tight text-white drop-shadow-md animate-fade-in-up">
          Welcome to <span className="text-gradient">NextShop</span>
        </h1>
        <p className="sm:text-lg md:text-xl text-white mb-10 px-4 md:px-0 opacity-90 animate-fade-in-up animation-delay-300">  Discover cutting-edge products, manage your cart effortlessly, and experience a seamless shopping journey. Your next favorite item awaits! </p>

        <Link href="/all-products" className="btn shadow-none text-white border-none bg-[linear-gradient(125.07deg,#632EE3,#9F62F2_100%)] hover:opacity-90" > Browse Products </Link>
      </div>
    </section>
  );
}