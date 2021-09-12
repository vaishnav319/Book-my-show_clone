import React from 'react';
import { BiChevronRight, BiChevronLeft } from 'react-icons/bi';
//component
import Slider from 'react-slick';
import Cast from '../Poster/Cast.component';

const CastSlider = (props) => {
  const settings = {
    infinite: true,
    autoplay: false,
    slidesToShow: 4,
    slidesToScroll: 4,
    InitialSlide: 0,
    nextArrow: (
      <div>
        <div className='next-slick-arrow bg-black bg-opacity-75 backdrop-filter  text-black  rounded-3xl left-10  absolute'>
          <BiChevronRight />
        </div>
      </div>
    ),

    prevArrow: (
      <div>
        <div className='prev-slick-arrow bg-black bg-opacity-75 backdrop-filter  text-black right-5  rounded-3xl absolute'>
          <BiChevronLeft />
        </div>
      </div>
    ),
  };
  return (
    <>
      <Slider {...settings}>
        {props.images.map((image) => (
          <Cast {...image} />
        ))}
      </Slider>
    </>
  );
};

export default CastSlider;
