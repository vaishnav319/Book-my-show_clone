import React from 'react';
//props -> src, title,subtitle, isDark(bool)
const Poster = (props) => {
  return (
    <>
      <div className='ml-10'>
        <div className='flex flex-col items-start gap-2 px-3 mt-5'>
          <div className='lg:h-80 md:h-70 sm:h-60'>
            <img
              src={props.src}
              alt={props.title}
              className='w-full h-full rounded-xl'
            />
          </div>
          <h3
            className={`lg:text-lg md:test-md sm:text-sm  font-bold ${
              props.isDark ? 'text-white' : 'text-gray-700'
            }`}
          >
            {props.title}
          </h3>
          <p
            className={`lg:text-sm md:text-xs sm-text-xs lg:font-bold ${
              props.isDark ? 'text-white' : 'text-gray-700'
            }`}
          >
            {props.subtitle}
          </p>
        </div>
      </div>
    </>
  );
};

export default Poster;
