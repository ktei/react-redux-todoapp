
import React from 'react';
import Router from './Router';

const App = () => (
  <React.Fragment>
    <nav className="navbar navbar-light bg-light">
      <div className="container">
        <span className="navbar-brand mb-0 h1">Todo App</span>
      </div>
    </nav>
    <div className="container" style={{ marginTop: 10 }}>
      <Router />
    </div>
  </React.Fragment>
);

export default App;
