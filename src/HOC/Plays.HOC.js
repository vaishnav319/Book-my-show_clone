//Transforms component into another component
//Adding additional functionalities to the existing components.

import React from 'react';
import { Route } from 'react-router-dom';

//Layouts
import PlaysLayout from '../layouts/Plays.Layout';

const PlaysHOC = ({ component: Component, ...rest }) => {
  //component
  //props -> path exact
  return (
    <>
      <Route
        {...rest}
        component={(props) => (
          <PlaysLayout>
            <Component {...props} />
          </PlaysLayout>
        )}
      />
    </>
  );
};

export default PlaysHOC;
