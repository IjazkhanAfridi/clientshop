import React from 'react';

const CartModel = (props) => {
  return (
    <>
      <div
        className='model'
        style={{
          width: '100%',
          height: '100vh',
          backgroundColor: 'rgba(0, 0, 0, 0.4)',
          boxSizing: 'border-box',
          position: 'fixed',
          top: '0px',
          bottom: '0px',
          right: '0px',
          left: '0px',
          zIndex: '2',

        }}
      >
        <div className='container' style={{ height: '100vh'}}>
          <div
            className='row justify-content-center'
            style={{ height: '100vh' }}
          >
            <div
              className='col-lg-8 align-items-center rounded'
              style={{   position:"fixed",background: "white",height: "auto",top:"50%",left:"50%",transform: "translate(-50%,-50%)"}}
            >
              <div className='row justify-content-between mt-4'>
                <div className='col-6'>
                  <h3>Shopping Cart</h3>
                </div>
                <div className='col-6 d-flex justify-content-end'>
                  <button className='btn-close' onClick={props.close}></button>
                </div>
              </div>
              <hr />
              <div className='row'>
                <div className='col-3'>
                  <img
                  className='col-12'
                  style={{objectFit:"cover"}}
                    src='https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=400'
                    alt='....'
                  />
                </div>
                <div className='col-4'>
                  <h5>Lorem ipsum dolor sit Lorem ipsum dolor sit amet.</h5>
                  <span>007</span>
                  <h6>40/7</h6>
                </div>
                <div className='col-1 d-flex justify-content-center'>
                  <span>1 X</span>
                </div>
                <div className='col-3 d-flex justify-content-end'>
                  <h5>Rs : 3999.00</h5>
                </div>
                <div className='col-1 d-flex justify-content-end'>
                  <button className='btn-close'></button>
                </div>
              </div>
              <hr />
              <div className='row justify-content-end my-3'>
                <div className='col-12 d-flex flex-column align-items-end'>
                  <span className='d-flex justify-content-end'>
                    Subtotal<h5 className='ms-3'>Rs 38999.00</h5>
                  </span>

                  <p>Lorem ipsum dolor sit amet consectetur.</p>
                  <button className='btn btn-primary mt-4 border border-0 rounded-0 primary-btn'>
                    <span className='bi bi-cart'></span> Checkout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartModel;
