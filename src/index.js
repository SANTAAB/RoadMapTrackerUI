
import './index.css';
import Dashboard from './Dashboard';
import React from 'react'
import { render } from 'react-dom'
import {
      HashRouter,
      Route
    } from 'react-router-dom'

    window.React = React
render( 
  <HashRouter>
    <div className="main">
      <Route exact path="/" component={Dashboard} /> 
    </div>
  </HashRouter>,
  document.getElementById('root')
  //document.getElementById('react-container')
)



//ReactDOM.render(<Dashboard />, document.getElementById('root'));
