import React, { useContext } from 'react';
import { BiShareAlt } from 'react-icons/bi';
import { AiTwotoneHeart } from 'react-icons/ai';
//context
import { MovieContext } from '../../context/Movie.context';
import MovieInfo from './MovieInfo.component';
const MovieHero = () => {
  const { movie } = useContext(MovieContext);
  const genres = movie.genres?.map(({ name }) => name).join(', ');
  const languages = movie.spoken_languages
    ?.map(({ english_name }) => english_name)
    .join(', ');
  return (
    <>
      <div className='lg:hidden w-full'>
        <img
          src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
          alt='cover poster'
        />
      </div>
      <div className='flex flex-col gap-3 lg:hidden'>
        <div className='flex flex-col-reverse gap-3 px-4 my-3'>
          <div className='text-black flex flex-col gap-2 md:px-4'>
            <div className='flex'>
              <AiTwotoneHeart className='text-vaish-300 ' size={30} />
              <span className='mr-2 ml-1'>{movie.vote_average}/10 ratings</span>
            </div>

            <h4>{movie.vote_count} votes</h4>
            <h4>{languages}</h4>
            <h4>
              {movie.runtime} min • {genres}
            </h4>
          </div>
        </div>
      </div>
      <div className='pl-4 lg:hidden'>
        <button class='bg-vaish-300  text-white mx-auto  py-2 px-5 rounded-md '>
          Book tickets
        </button>
      </div>
      <div className='relative hidden lg:block' style={{ height: '30rem' }}>
        <div
          className='absolute z-10 w-full h-full'
          style={{
            backgroundImage:
              'linear-gradient(90deg, rgb(34, 34, 34) 24.97%, rgb(34, 34, 34) 38.3%, rgba(34, 34, 34, 0.04) 97.47%, rgb(34, 34, 34) 100%)',
          }}
        ></div>
        <div>
          <MovieInfo />
        </div>
        <div>
          <button className='btn flex px-4 py-2 text-xl text-white bg-opacity-50 backdrop-filter backdrop-blur bg-navCol-800 absolute top-12 right-20 rounded-md'>
            <BiShareAlt className='mt-1 mr-2' size={25} /> Share
          </button>
        </div>

        <img
          src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
          alt='poster'
          className='mx-auto w-full h-full'
        />
      </div>
    </>
  );
};

export default MovieHero;
