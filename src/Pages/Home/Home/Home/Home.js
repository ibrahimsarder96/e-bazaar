import React from 'react';
import Banner from '../Banner';
import Products from '../Products';

const Home = () => {
  return (
    <div className='max-w-[1440px] mx-auto'>
      <Banner></Banner>
      <Products></Products>
    </div>
  );
};

export default Home;