import { BiChevronRight, BiChevronLeft } from 'react-icons/bi';

const settings = {
  infinite: true,
  autoplay: false,
  slidesToShow: 5,
  slidesToScroll: 2,
  InitialSlide: 0,
  nextArrow: (
    <div>
      <div className='next-slick-arrow bg-gray-800 text-black rounded-xl absolute'>
        <BiChevronRight />
      </div>
    </div>
  ),

  prevArrow: (
    <div>
      <div className='prev-slick-arrow bg-gray-800 text-black rounded-xl absolute'>
        <BiChevronLeft />
      </div>
    </div>
  ),
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
      },
    },
  ],
};

export default settings;
