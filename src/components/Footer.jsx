import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className='text-center text-lg-start bg-light text-muted'>
      <section className='container'>
        <div className='container text-center text-md-start pt-2'>
          <div className='row mt-3 pt-3 '>
            <div className='col-md-3 col-lg-3 col-xl-3 mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
              <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
                <li className='nav-item'>
                  <Link className='nav-link active ' to={"!#"}>
                    Home
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link className='nav-link ' to={"!#"}>
                    CataLog
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link className='nav-link ' to={"!#"}>
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div className='col-md-5 col-lg-5 col-xl-5 mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <i className='fas fa-gem '></i>Get in Touch
              </h6>
              <p>
                Here you can use rows and columns to organize your footer
                content. Lorem ipsum dolor sit amet, consectetur adipisicing
                elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Ullam ipsum labore fugit cupiditate nisi consequatur ut mollitia
                necessitatibus quaerat eaque rerum nulla, atque minima magnam
                omnis dignissimos reiciendis, facere quos!
              </p>
            </div>

            <div className='col-md-3 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4 '>
              <h6 className='text-uppercase fw-bold mb-4'>newsletter</h6>
              <p>Promotions, new products and sales. Directly to your inbox.</p>
              <div className='input-group mb-3'>
                <input
                  type='text'
                  className='form-control  rounded-0'
                  placeholder="email"
                  aria-label="email"
                  aria-describedby='basic-addon2'
                />
                <span className='input-group-text' id='basic-addon2'>
                 Subscribe
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div
        className='text-center p-4'
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}
      >
        © 2021 Copyright:
        <Link className='text-reset fw-bold' href='!#'>
         <span className='ps-2'> ClientShop </span>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
