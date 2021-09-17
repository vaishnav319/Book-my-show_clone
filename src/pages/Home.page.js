import axios from 'axios';
import React, { useState, useEffect } from 'react';
import EntertainmentCardSlider from '../components/Entertainment/Entertainmentcard.component';
import PosterSlider from '../components/PosterSlider/PosterSlider.component';
import { Link } from 'react-router-dom';
const HomePage = () => {
  const [recommendedMovies, setRecommendedMovies] = useState([]);
  const [premierMovies, setPremierMovies] = useState([]);
  const [onlineStreamEvents, setOnlineStreamEvents] = useState([]);

  useEffect(() => {
    const requestPopularMovies = async () => {
      const getPopularMovies = await axios.get('/movie/popular');
      setRecommendedMovies(getPopularMovies.data.results);
      console.log(getPopularMovies);
    };

    requestPopularMovies();
  }, []);

  useEffect(() => {
    const requestTopRatedMovies = async () => {
      const getTopRatedMovies = await axios.get('/movie/top_rated');
      setPremierMovies(getTopRatedMovies.data.results);
    };

    requestTopRatedMovies();
  }, []);

  useEffect(() => {
    const requestUpcomingMovies = async () => {
      const getUpcomingMovies = await axios.get('/movie/upcoming');
      setOnlineStreamEvents(getUpcomingMovies.data.results);
    };

    requestUpcomingMovies();
  }, []);

  return (
    <>
      <div className='flex flex-col gap-10'>
        <div className='container mx-auto px-4'>
          <h1 className='text-2xl font-bold text-gray-800'>
            The best of Entertainment
          </h1>
          <EntertainmentCardSlider />
        </div>
        <div className='container mx-auto px-4 md:px-12 my-8'>
          <PosterSlider
            title='Recommended Movies'
            subtitle='List of recommended movies'
            images={recommendedMovies}
            isDark={false}
          />
        </div>

        <div className='bg-navCol-200 py-16'>
          <div className='container mx-auto px-4'>
            <div className='flex'>
              <img
                src='https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png'
                alt='Rupay'
                className='w-full h-full'
              />
            </div>
            <PosterSlider
              title='Premiers'
              subtitle='Brand new releases every Friday'
              images={premierMovies}
              isDark={true}
            />
          </div>
        </div>
      </div>

      <div className='container mx-auto px-4 md:px-12 my-8'>
        <PosterSlider
          title='Online Streaming Event'
          subtitle=''
          images={onlineStreamEvents}
          isDark={false}
        />
      </div>
    </>
  );
};

export default HomePage;
