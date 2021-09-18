import React, { useState, useContext } from 'react';
import { BiChevronRight } from 'react-icons/bi';
import { AiTwotoneHeart } from 'react-icons/ai';
import PaymentModal from '../PaymentModal/Payment.component';
//context
import { MovieContext } from '../../context/Movie.context';

const MovieInfo = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [price, setPrice] = useState(0);

  const buyMovies = () => {
    setIsOpen(true);
    setPrice(300);
  };
  const { movie } = useContext(MovieContext);
  const genres = movie.genres?.map(({ name }) => name).join(', ');
  const languages = movie.spoken_languages
    ?.map(({ english_name }) => english_name)
    .join(', ');

  return (
    <div>
      <PaymentModal setIsOpen={setIsOpen} isOpen={isOpen} price={price} />
      <div className='absolute z-30  h-96 left-64 top-10'>
        <img
          src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
          className='h-full w-64 rounded-xl'
          alt='image'
        />
        <div className='absolute w-96  h-96 left-80  top-1 '>
          <div>
            <h1 className='text-white font-bold text-3xl'>
              {movie.original_title}
            </h1>
            <div className='text-white flex-row justify-evenly py-5'>
              <div className=' font-semibold text-2xl  flex '>
                <AiTwotoneHeart className='text-vaish-300 ' size={30} />
                <span className='mr-2 ml-1'>
                  {movie.vote_average}/10 ratings
                </span>
                <span className='font-light text-lg flex mt-1'>
                  {movie.vote_count} votes
                  <BiChevronRight className='mt-2' size={15} />
                </span>
              </div>
            </div>
            <div className='bg-vaish-100 text-white px-5 py-2 rounded-lg flex justify-between'>
              <div>
                <h3 className='font-semibold'>Add your rating & review</h3>
                <h5 className='text-vaish-200'>Your ratings matter</h5>
              </div>
              <div>
                <button class='bg-gray-100  text-vaish-100 font-bold py-2 mt-1 px-4 rounded-xl'>
                  Rate now
                </button>
              </div>
            </div>
            <div className='  text-vaish-100 mt-5 px-2 font-semibold rounded-sm bg-gray-100'>
              2D, 3D, 4D, 5D, IMAX 2D, MX4D, 4DX
            </div>
            <div className=' text-vaish-100 mt-2 px-2  font-semibold rounded-sm max-w-xs bg-gray-100'>
              {languages}
            </div>
            <div className='text-white mt-2 py-2 text-base font-thin rounded-sm '>
              <h4>
                {movie.runtime} min • {genres} • {movie.release_date}
              </h4>
            </div>
            <button
              onClick={buyMovies}
              class='bg-vaish-300  text-white mt-10 py-2 mt-1 px-11 rounded-lg'
            >
              Book tickets
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieInfo;
