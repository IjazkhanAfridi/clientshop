import React from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <>
      <div className='bg-white ' style={{ height: '100vh' }}>
        <div className='container pt-3 mb-4'>
          <div className=''>
            <span className='d-flex'>
              <Link to={'/'} className='nav-link me-2'>
                {' '}
                HOME{' '}
              </Link>{' '}
              {' > '}CONTACT
            </span>
            <hr />
          </div>
          <div className='container'>
            <div className='row justify-content-center'>
              <form className='col-lg-8'>
                <div className='form-group mt-4'>
                  <h3>Contact</h3>
                  <input
                    style={{ backgroundColor: '#EEEEEE' }}
                    type='name'
                    className='form-control'
                    id='exampleFormControlInput1'
                    placeholder='Name'
                  />
                </div>
                <div className='form-group mt-4'>
                  <input
                    style={{ backgroundColor: '#EEEEEE' }}
                    type='email'
                    className='form-control'
                    id='exampleFormControlInput1'
                    placeholder='Email'
                  />
                </div>
                <div className='form-group mt-4'>
                  <input
                    style={{ backgroundColor: '#EEEEEE' }}
                    type='phone'
                    className='form-control'
                    id='exampleFormControlInput1'
                    placeholder='Phone'
                  />
                </div>
                <div className='form-group mt-4'>
                  <textarea
                    style={{ backgroundColor: '#EEEEEE' }}
                    placeholder='Message'
                    className='form-control'
                    id='exampleFormControlTextarea1'
                    rows='5'
                  ></textarea>
                </div>
                <div className=' d-flex justify-content-end py-4'>
                  <div
                    className='btn btn-primary col-2 border border-0  rounded-0'
                    style={{ backgroundColor: '#528EC1' }}
                  >
                    send
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
