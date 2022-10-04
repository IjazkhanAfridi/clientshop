import React from 'react';
import { useState } from 'react';
import CartModel from './CartModel';
import "swiper/css/bundle";
import ImgSlider from './productSlider/ImgSlider';
import { Link } from 'react-router-dom';

const ProductDetail = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className='section'>
        <div className='container mb-4'>
        <div className="row my-2">
          <span className='d-flex'><Link to={"/"} className="nav-link me-2"> Home {"> "} </Link> Product Tital</span>
        </div>
          <hr className='mb-5' />
          <div className='row'>
            <div className='col-lg-6 '>
              <ImgSlider  />
            </div>
            <div className='product-detail col-lg-6'>
              <h3 className='product-detail h3'>
                this is beautiful product titel for you
              </h3>
              <h2 className='product-price'>Rs : 3999.00</h2>
              <div className='row mt-5'>
                <div className='dropdown '>
                  <div className='form-group mt-4 col-4'>
                    <span className='h4'>size</span>
                    <select
                      className='form-select form-select-lg mb-3 border border-0  rounded-0'
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

              <div className=' '>
                <button
                  onClick={(e) => setOpen(true)}
                  type='button'
                  className='btn mt-2 col-3 btn-outline-primary rounded-0 priamry-outline-btn'
                >
                  <span className='bi bi-cart'></span> Add to cart
                </button>
              </div>
              <div className=''>
              <Link to={"/checkout"}>
                <button
                  className='btn col-3 mt-2 btn-primary btn-color border border-0  rounded-0 '
                  type='submit'
                >
                  Buy it Now
                </button>
                </Link>
              </div>
              <hr />
              <div className='productdetail mt-5'>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Tempore quos impedit iusto aut vero voluptas earum natus
                  aspernatur adipisci, excepturi, placeat voluptatum sapiente
                  sed iste accusamus beatae necessitatibus eos ut.
                </p>
                <ul>
                  <li>love this product</li>
                  <li>get for better expreience</li>
                  <li>wish you best of luck</li>
                  <li>try your best</li>
                </ul>
              </div>
              <div className=' pt-5'>
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
        <div>{open && <CartModel close={(e) => setOpen(false)} />}</div>
      </div>
    </>
  );
};

export default ProductDetail;
