import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import { BrowserRouter } from 'react-router-dom';
import LandingPage from './components/Navigation/Toolbar/Toolbar.js';
import AboutMePage from './pages/ProfilePage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import PricingPage from './pages/PricingPage.jsx';

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
            <Route exact path="/contact" component={Contact}/>
            <Route exact path="/pricing" component={Pricing}/>
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
const Contact = () => {
  return <div><ContactPage/></div>
}
const Pricing = () => {
  return <div><PricingPage/></div>
}

export default App;
