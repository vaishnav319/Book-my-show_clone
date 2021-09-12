import React from 'react';

//components
import Navbar from '../components/Navbar/navbar.component';
const DefaultLayout = (props) => {
  return (
    <>
      <Navbar />
      {props.children}
    </>
  );
};

export default DefaultLayout;
