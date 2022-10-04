import React from 'react';
import { Link } from 'react-router-dom';

const AboutProduct = () => {
  return (
    <div className='container'>
      <hr className='mb-5' />
      <div className='row'>
        <div className='product-detail col-md-7 col-sm-12'>
          <h3 className='product-detail h3'>
            this is beautiful product titel for you
          </h3>
          <p className='p'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus quidem illum tenetur, repellendus accusantium
            doloribus reprehenderit incidunt. Excepturi ducimus tempora iure
            minus tenetur, officia esse ad voluptates exercitationem doloribus
            veniam
          </p>
          <Link className='nav-link' to={'/checkout'}>
            <button className='btn primary-btn rounded rounded-0'>
              buy now
            </button>
          </Link>
        </div>
        <div className='img-fluid col-md-5 col-sm-12'>
          <img
            src='https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=400'
            alt='...'
          />
        </div>
      </div>
    </div>
  );
};

export default AboutProduct;
