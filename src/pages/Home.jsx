import React from 'react';
import AboutProduct from '../components/AboutProduct';
import Cart from '../components/Cart';
import Slider from '../components/Slider';

const Home = () => {
  return (
    <>
      <Slider />
      <Cart />
      <AboutProduct />
      <Cart />
    </>
  );
};

export default Home;
