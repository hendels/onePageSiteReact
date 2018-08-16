import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import { BrowserRouter } from 'react-router-dom';
import LandingPage from './components/Navigation/Toolbar/Toolbar.js';
import AboutMePage from './pages/ProfilePage.jsx';
import "./assets/scss/material-kit-react.css?v=1.1.0";

//forgoten :D
import Layout from './hoc/Layout/Layout';

class App extends Component {
  render() {
    return (
      <div >
        <BrowserRouter>
          <div>
            <Route exact path="/" component={Landing}/>
            <Route exact path="/aboutme" component={AboutMe}/>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

const AboutMe = () => {
  return <div><AboutMePage/></div>
}
const Landing = () => {
  return <div><LandingPage/></div>
}

export default App;
