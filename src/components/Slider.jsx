import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';

function Slider() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <>
      <div className='container mt-5 mb-4'>
        <Carousel activeIndex={index} onSelect={handleSelect}>
          <Carousel.Item>
        <Link to={"/productdetail"} className="nav-link">
            <img
              style={{ objectFit: 'cover', height: '500px' }}
              className='d-block w-100'
              src='https://images.pexels.com/photos/19090/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=400'
              alt='First slide'
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Link>
          </Carousel.Item>
          <Carousel.Item>
        <Link to={"/productdetail"} className="nav-link">
            <img
              style={{ objectFit: 'cover', height: '500px' }}
              className='d-block w-100'
              src='https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=400'
              alt='Second slide'
            />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Link>
          </Carousel.Item>
          <Carousel.Item>
        <Link to={"/productdetail"} className="nav-link">
            <img
              style={{ objectFit: 'cover', height: '500px' }}
              className='d-block w-100'
              src='https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=400'
              alt='Third slide'
            />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
            </Link>
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
}

export default Slider;
