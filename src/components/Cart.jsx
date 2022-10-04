import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CartModel from './CartModel';

const Cart = () => {
  const [openModel, setOpenModel] = useState(false);



  return (
    <>
      <div className='container mb-4'>
        <hr className='mb-5' />
        <div className='row'>
          <div className='img-fluid col-lg-6 col-sm-12'>
            <img
              src='https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=400'
              alt='...'
            />
          </div>
          <div className='product-detail col-lg-6 col-sm-12'>
            <h3 className='product-detail h3'>
              this is beautiful product titel for you
            </h3>
            <h2 className='product-price mt-2'>Rs : 3999.00</h2>
            <div className='row mt-5'>
              <div className='dropdown '>
                <div className='form-group mt-4 col-4'>
                  <span className='h4'>size</span>
                  <select
                    className='form-select form-select-lg mb-3 border rounded rounded-0'
                    aria-label='.form-select-lg example'
                  >
                    <option defaultValue>select</option>
                    <option value='1'>1</option>
                    <option value='2'>2</option>
                    <option value='3'>3</option>
                  </select>
                </div>
              </div>
            </div>

            <div className='col '>
              <button
                type='button'
                className='btn rounded-0 mt-2 col-3  priamry-outline-btn'
                onClick={(e) => setOpenModel(true)}
              >
                Add to cart
              </button>
            </div>
            <div className='col'>
            <Link className='nav-link' to={"/checkout"} >
              <button
                className='btn col-3 mt-2 btn-primary border border-0 rounded rounded-0 primary-btn'
                type='submit'
              >
                Buy it Now
              </button>
              </Link>
            </div>
            <div className='col mt-5'>
              <Link to={'/productdetail'} className='a nav-link link-color'>
               full detail <i className="bi bi-arrow-right"></i>
              </Link>
            </div>
            <div className=' pt-4'>
              <Link to={'!#'} className='a btn btn-sm btn-primary fb-color rounded rounded-0'>
              <i className="bi bi-facebook"></i> facebook
              </Link>
              <Link to={'!#'} className='a  btn btn-sm tw-color m-2 rounded rounded-0'>
              <i className="bi bi-twitter"></i> twetter
              </Link>
              <Link to={'!#'} className='a  btn btn-sm btn-danger m-2 rounded rounded-0'>
              <i className="bi bi-pinterest"></i> pinterset
              </Link>
            </div>
          </div>
        </div>
      </div>
      {openModel && <CartModel close={(e) => setOpenModel(false)} />}
    </>
  );
};

export default Cart;
