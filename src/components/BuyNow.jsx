import React from 'react';
import { Link } from 'react-router-dom';

const BuyNow = () => {
  return (
    <>
      <div className='container-fluid d-lg-flex'>
        <div
          className='row col-lg-7 justify-content-end bgwhite'
          style={{ height: '100%' }}
        >
          <div className='col-lg-9 p-5'>
            <div className='row'>
              <h3>ClientShop</h3>
            </div>
            <div className='row mt-4'>
              <span>
                Cart {'>'} Information {'>'} Shipping{' '}
              </span>
              <form>
                <div className='form-group mt-4'>
                  <h4>Contact Information</h4>
                  <input
                    type='email'
                    className='form-control'
                    id='exampleFormControlInput1'
                    placeholder='Email'
                  />
                </div>
                <div className='form-group mt-2'>
                  <div className='form-check'>
                    <input
                      className='form-check-input'
                      type='checkbox'
                      value=''
                      id='flexCheckDefault'
                    />
                    <label className='form-check-label'>
                      Email me with new and offer
                    </label>
                  </div>
                </div>
                <div className='form-group mt-2'>
                  <h4>Shipping Address</h4>
                  <select
                    className='form-select form-select-md border mt-2'
                    aria-label='.form-select-md example'
                  >
                    <option defaultValue>Pakistan</option>
                    <option value='1'>afg</option>
                    <option value='2'>eng</option>
                    <option value='3'>ind</option>
                  </select>
                </div>
                <div className='form-group mt-2'>
                  <div className='d-md-flex col-md-12'>
                    <input
                      type='text'
                      className='form-control me-1'
                      id='exampleFormControlInput1'
                      placeholder='First Name'
                      
                    />
                    <input
                      type='text'
                      className='form-control ms-1'
                      id='exampleFormControlInput1'
                      placeholder='Last Name'
                      
                    />
                  </div>
                </div>
                <div className='form-group mt-2'>
                  <input
                    type='text'
                    className='form-control'
                    id='exampleFormControlInput1'
                    placeholder='Address'
                  />
                </div>
                <div className='form-group mt-2'>
                  <div className='d-md-flex'>
                    <input
                      type='text'
                      className='form-control me-1'
                      id='exampleFormControlInput1'
                      placeholder='City'
                    />
                    <input
                      type='text'
                      className='form-control m'
                      id='exampleFormControlInput1'
                      placeholder='Postal Code'
                    />
                  </div>
                </div>
                <div className='form-group mt-2'>
                  <input
                    type='phone'
                    className='form-control'
                    id='exampleFormControlInput1'
                    placeholder='Phone'
                  />
                </div>
                <div className='form-group mt-2'>
                  <div className='form-check'>
                    <input
                      className='form-check-input'
                      type='checkbox'
                      value=''
                      id='flexCheckDefault'
                    />
                    <label className='form-check-label'>
                      Email me with new and offer
                    </label>
                  </div>
                </div>
                <div className=' d-flex justify-content-between mt-4'>
                <div className="col-lg-6">
                  <Link className='nav-link ' to={"/cartmodel"}>
                    {'<'} Return to cart
                  </Link>
                  </div>
                  <div className="col-lg-6 d-flex justify-content-end">
                  <div
                    className='btn btn-primary'
                    style={{ backgroundColor: '#528EC1' }}
                  >
                    Continue to Shipping
                  </div>
                  </div>
                </div>
              </form>
              <div className='mt-5'>
                <hr className='mt-5' />
                <span>All right reserved ClientSHop</span>
              </div>
            </div>
          </div>
        </div>
        <div className='row col-lg-5' style={{ height: '100vh' }}>
          <div className='col-lg-9 p-5'>
            <div className='row'>
              <div className='d-flex mt-2 '>
                <div className='col-3'>
                  <img
                    src='https://images.pexels.com/photos/1580267/pexels-photo-1580267.jpeg?auto=compress&cs=tinysrgb&w=400'
                    className='col-12 '
                    alt='...'
                  />
                </div>
                <div className='col-9 d-flex'>
                  <div className='col-8 mx-3'>
                    <h6 className='card-text'>
                      Lorem ipsum dolor sit adipisicing elit.
                    </h6>
                    <span>40/7</span>
                  </div>
                  <div className='col-4 d-flex justify-content-end'>
                    <h6 className=' '>RS : 3999.00</h6>
                  </div>
                </div>
              </div>
              <hr className='mt-4'/>
            </div>
            <div className="row">

                <div className="col-6">
                    <span>Subtotal</span>
                </div>
                <div className="col-6 d-flex justify-content-end">
                    <h5>Rs : 3999.00</h5>
                </div>
                <div className="col-6">
                    <span>Shipping</span>
                </div>
                <div className="col-6 d-flex justify-content-end">
                    <span>calculated in next step</span>
                </div>
            <hr className='mt-4'/>
            </div>
            <div className="row">
                <div className="col-6">
                    <span>Toatal</span>
                </div>
                <div className="col-6 d-flex justify-content-end">
                    <h5>RS : 3999.00</h5>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BuyNow;
