import BestSellingProducts from '@/Components/BestSellingProducts';
import FeaturedCategories from '@/Components/FeatureCard';
import Hero from '@/Components/Hero';
import React from 'react';

const HomeLayout = () => {
  return (
    <div>
      <Hero/>
      <FeaturedCategories/>
      <BestSellingProducts/>
    </div>
  );
};

export default HomeLayout;