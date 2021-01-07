import React from 'react';
import {  Route } from 'react-router-dom';
import Layout from './components/layout';



const MainRoute = ({ Component, path, exact, purpose, auth, ...rest }) => {
    return (
      <Route exact={exact} path={path} render={(props) => {
        return (
          <Layout>
            <Component {...props} />
          </Layout>
        );
      }} />
    );
  };

  export default MainRoute;
  