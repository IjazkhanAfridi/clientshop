import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import ProductImages from './assets/Images';

const Products = () => {
  const [grid, setGrid] = useState(true);

  return (
    <>
      <div className='container mb-4'>
        <div className='row mt-2'>
          <span className='p-3 d-flex '><Link to={"/"} className="nav-link me-2"> Home </Link>{'>'} Products</span>
          <hr />
        </div>
        <div className='row '>
          <div className='col-lg-2 d-lg-block d-none mt-2'>
            <h4>SHOP BY</h4>
            <Link to={'/products'} className='nav-link link-color'>
              Peshaweri chappal
            </Link>
            <Link to={'/products'} className='nav-link link-color'>
              zalmi chappal
            </Link>
          </div>
          <div className='col-sm-10 border-start border-4'>
            <div className='row '>
              <div className='col-lg-6 '>
                <h2>Products</h2>
              </div>
              <div className='col-lg-6 '>
                <div className='row justify-content-end '>
                  <div className='d-flex col-lg-12 col-6'>
                    <div className='mt-2 col-lg-3 col-5'>
                      <span className='h5'>sort by</span>
                    </div>
                    <div className='col-lg-5 col-8'>
                      <select
                        className='form-select form-select-lg border border-0  rounded-0'
                        aria-label='.form-select-md example'
                      >
                        <option defaultValue>select</option>
                        <option value='1'>1</option>
                        <option value='2'>2</option>
                        <option value='3'>3</option>
                      </select>
                    </div>

                    <div className='mx-2 col-lg-4 d-lg-block d-none'>
                      <div className=' border outline btn-lg d-flex justify-content-center'>
                        <span
                          className='bi bi-grid mx-3 ' style={{fontSize: "25px", color: "#585858"}}
                          onClick={() => setGrid(true)}
                        ></span>
                        <span
                          className='bi bi-list mx-3 fw-bolder 'style={{fontSize: "25px", color: "#585858"}}
                          onClick={() => setGrid(false)}
                        ></span>
                      </div>
                    </div>
                  </div>
                  <div className='col-6 d-flex d-lg-none  justify-content-end'>
                    <span className='d-block '>
                      <button
                        className='btn btn-primary'
                        type='button'
                        data-bs-toggle='collapse'
                        data-bs-target='#collapseExample'
                        aria-expanded='false'
                        aria-controls='collapseExample'
                      >
                        Filters
                      </button>
                    </span>
                  </div>
                </div>
                <div className=' d-block d-lg-none '>
                  <div className='collapse' id='collapseExample'>
                    <div className='card card-body'>
                      <div className='col-lg-2 '>
                        <h4>SHOP BY</h4>
                        <Link to={'/products'} className='nav-link'>
                          Peshaweri chappal
                        </Link>
                        <Link to={'/products'} className='nav-link'>
                          zalmi chappal
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='row  '>
              <div className='d-flex flex-wrap '>
                {ProductImages.map((val, id) => {
                  return (
                    <div
                      className={grid ? '  col-md-6 col-lg-3 px-1 ' : 'd-lg-flex '}
                      key={id}
                    >
                      <Link to={'/productdetail'} className='nav-link'>
                        <div
                          className={
                            grid
                              ? 'card mt-2 justify-content-center border border-0 rounded-0'
                              : 'd-flex mt-2 border border-0 rounded-0'
                          }
                        >
                          <img
                            src={val.src}
                            className={grid ? 'card-img-top' : 'col-4 '}
                            alt='...'
                          />
                          <div className={grid ? 'card-body' : 'col-8 d-flex'}>
                            <div className={grid ? 'card-text' : 'col-8 mx-3'}>
                              <h4 className='card-text'>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit.
                              </h4>
                              <p className='card-text'>{val.desc}</p>
                            </div>
                            <h3 className={grid ? 'card-text mt-2' : 'col-4 d-flex justify-content-end '}>RS : 3999.00</h3>
                          </div>
                        </div>
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
