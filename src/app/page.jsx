import BestSellingProducts from '@/Components/BestSellingProducts';
import CoreValues from '@/Components/CoreValues';
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
      <CoreValues/>
    </div>
  );
};

export default HomeLayout;