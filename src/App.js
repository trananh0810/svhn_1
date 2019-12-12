import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import RouterApp from './router/RouterApp';

function App() {
  return (
      <Router>
        <RouterApp/>
      </Router>
  );
}

export default App;