"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import { FaStar, FaQuoteLeft } from 'react-icons/fa'; 

const testimonials = [
  { id: 1, name: "Alice Johnson", photo: "https://randomuser.me/api/portraits/women/1.jpg", rating: 5, review: "Amazing products and super fast delivery. The quality exceeded my expectations. Highly recommended to everyone!", position: "CEO, TechNova Inc.", date: "2025-10-21" },
  { id: 2, name: "Mark Thompson", photo: "https://randomuser.me/api/portraits/men/2.jpg", rating: 3.5, review: "Great quality and customer service. The shopping experience was smooth and hassle-free. Will definitely shop again soon.", position: "Marketing Manager, Global X", date: "2025-09-15" },
  { id: 3, name: "Sophia Lee", photo: "https://randomuser.me/api/portraits/women/3.jpg", rating: 5, review: "Absolutely love the collection. Every item is stylish, high-quality, and surprisingly affordable. A true gem!", position: "Lead Designer, Creatio Studio", date: "2025-08-29" },
  { id: 4, name: "David Kim", photo: "https://randomuser.me/api/portraits/men/4.jpg", rating: 4, review: "Good variety of products. The website is very easy to use and navigate. Finding what I needed was a breeze.", position: "Software Engineer, Innovate Solutions", date: "2025-07-10" },
  { id: 5, name: "Emma Wilson", photo: "https://randomuser.me/api/portraits/women/5.jpg", rating: 4, review: "Quick delivery and excellent packaging. My items arrived in perfect condition. Totally satisfied with my purchase!", position: "Project Lead, Beta Corp", date: "2025-06-03" },
  { id: 6, name: "Liam Brown", photo: "https://randomuser.me/api/portraits/men/6.jpg", rating: 5, review: "The customer support is fantastic and product quality is top-notch. They truly care about their customers. Five stars!", position: "Freelancer", date: "2025-05-18" },
];

const CustomerTestimonials = () => {
  return (
    <section className="py-20 px-6 md:px-16 bg-gradient-to-r from-purple-50 to-indigo-50 text-gray-800">
      <div className="container mx-auto max-w-6xl text-center mb-12">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-3"> What Our <span className="text-gradient">Customers Say</span> </h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto"> Real reviews from real people. Hear what they love about NextShop! </p>
      </div>

      <Swiper
        loop={true}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          scale: 0.9,
          depth: 100,
          modifier: 2,
          slideShadows: false,
        }}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="mySwiper"
        breakpoints={{
          320: { slidesPerView: 1, coverflowEffect: { depth: 50, modifier: 1.5 } },
          640: { slidesPerView: 1, coverflowEffect: { depth: 70, modifier: 1.8 } },
          768: { slidesPerView: 2, coverflowEffect: { depth: 80, modifier: 1.5 } },
          1024: { slidesPerView: 3, coverflowEffect: { depth: 100, modifier: 2 } },
        }}
      >
        {testimonials.map((t) => (
          <SwiperSlide key={t.id}>
            <div className="bg-white p-6 md:p-8 rounded-3xl shadow-xl flex flex-col gap-4 border border-purple-100 transform transition-all duration-300 hover:scale-[1.02] h-full overflow-hidden">
              <div className="flex justify-between items-center text-purple-200 opacity-60 mb-2">
                <FaQuoteLeft size={36} />
                <div className="flex items-center mt-1">
                  {[...Array(5)].map((_, i) => ( <FaStar key={i}  size={14}  className={i < Math.floor(t.rating) ? 'text-yellow-500' : 'text-gray-300'}  /> ))}
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed text-lg">{t.review}</p>
              <div className="grow"></div>
              <div className="border-t border-gray-200 mt-4 mb-2"></div>
              <div className="flex items-center gap-4 mt-2">
                <div className="w-14 h-14 rounded-full bg-purple-200 p-1 overflow-hidden flex-shrink-0">
                  <img className="rounded-full object-cover w-full h-full" src={t.photo} alt={t.name} />
                </div>
                <div className="text-left">
                  <h3 className="text-xl font-bold text-gray-900">{t.name}</h3>
                  <p className="text-gray-500 text-sm">{t.position}</p>
                  <p className="text-gray-400 text-sm">{t.date}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default CustomerTestimonials;