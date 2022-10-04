import React from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';
import CartModel from "../CartModel"
import { useState } from 'react';

const Navbar = () => {

  const [openModel , setOpenModel] = useState(false)


  return (
    <>
    <div style={{ backgroundColor: '#182E49' }}>
      <div className='container pt-5'>
        <div className='row'>
          <div className='logo col-lg-6 col-md-12 text-center text-lg-start'>
            <Link to={'/'} className='nav-link'>
              <h3 className='c-white h3'>CLIENTSHOP</h3>
            </Link>
          </div>
          <div className='col-lg-6'>
            <div className='row'>
              <div className='d-flex justify-content-center justify-content-md-center col-md-12 justify-content-lg-end'>
                <p className='c-white'>shopping all over pakistan</p>
              </div>
            </div>
            <div className='row justify-content-end'>
              <div className='col-md-6 d-sm-none d-none d-lg-block'>
                <div className='input-group c-white '>
                  <input
                    type='text'
                    className='form-control c-white bg-input searchinput border border-0  rounded-0'
                    placeholder='Search ... '
                    aria-label=''
                  />
                  <span className='bi bi-search bg-input seachicon'></span>
                </div>
              </div>
              <div className='col-3 d-sm-none d-none d-lg-block'  >
                <div className='input-group rounded btn bg-input col-2 border border-0  rounded-0'>
                  <span className='bi bi-cart c-white ' onClick={(e)=>{setOpenModel(true)}}> CART</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr style={{ color: 'gray', height: '2px' }} />
      <div className='container'>
        <div className='row justify-content-end'></div>
        <div className=' justify-content-between'>
          <div className='col-3'></div>
          <div className=''>
            <nav className='navbar navbar-expand-lg col-12'>
              <button
                className='navbar-toggler bg-input shadow-none c-white'
                type='button'
                data-bs-toggle='collapse'
                data-bs-target='#navbarTogglerDemo01'
                aria-controls='navbarTogglerDemo01'
                aria-expanded='false'
                aria-label='Toggle navigation'
              >
                <span className='bi bi-list bg-input c-white'></span>
              </button>
              <div className='col-3 d-lg-block  d-lg-none'  >
                <div className='input-group rounded btn bg-input col-2'>
                  <span className='bi bi-cart c-white' onClick={(e)=>{setOpenModel(true)}}> Cart</span>
                </div>
              </div>

              <div className='collapse navbar-collapse' id='navbarTogglerDemo01'>
                <div className='mt-2 d-flex d-lg-none d-sm-block '>
                  <div className='input-group '>
                    <input
                      type='text'
                      className='form-control c-white bg-input searchinput'
                      placeholder='Search ... '
                      aria-label=''
                    />
                    <span className='bi bi-search bg-input seachicon c-white'></span>
                  </div>
                </div>
                <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
                  <li className='nav-item'>
                    <Link
                      className='nav-link active c-white'
                      aria-current='page'
                      to={"/"}
                    >
                      HOME
                    </Link>
                  </li>
                  <li className='nav-item'>
                    <Link className='nav-link c-white' to={"/catalog"}>
                      CATALOG
                    </Link>
                  </li>
                  <li className='nav-item'>
                    <Link className='nav-link c-white' to={"/contact"}>
                      CONTACT
                    </Link>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
    <div className="d-flex justify-content-center" >
    {openModel && (
        <CartModel close={(e)=>setOpenModel(false)} />
      )}
      </div>
    </>
  );
};

export default Navbar;
