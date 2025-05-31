
import React from 'react';
import Hero from '@/components/Hero';
import LatestPosts from '@/components/LatestPosts';
import HowItWorks from '@/components/HowItWorks';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <LatestPosts />
      <HowItWorks />
      <Footer />
    </div>
  );
};

export default Index;
