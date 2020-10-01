import React from 'react';
import { Router } from '@reach/router';
import Layout from '../components/layout';
import PositionDetail from '../components/PositionDetail';

const App = () => {
  return (
    <Layout>
      <Router basepath="/position">
        <PositionDetail path="/:id" />
      </Router>
    </Layout>
  );
};
export default App;
