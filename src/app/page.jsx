import BestSellingProducts from '@/Components/BestSellingProducts';
import CustomerTestimonials from '@/Components/CustomerTestimonials';
import FeaturedCategories from '@/Components/FeatureCard';
import Hero from '@/Components/Hero';
import React from 'react';

const HomeLayout = () => {
  return (
    <div>
      <Hero/>
      <FeaturedCategories/>
      <BestSellingProducts/>
      <CustomerTestimonials/>
    </div>
  );
};

export default HomeLayout;