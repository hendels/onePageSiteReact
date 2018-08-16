import React, {Component} from 'react';
import Aux from '../Auxy/Auxy';
import LandingPage from '../../components/Navigation/Toolbar/Toolbar';
import AboutMePage from '../../pages/ProfilePage.jsx';

import Header from '../../components/Navigation/Header/Header.jsx';
import HeaderLinks from '../../components/Navigation/Header/HeaderLinks.jsx';

import { Route } from 'react-router-dom';

class Layout extends Component {

    render () {
        const { classes, ...rest } = this.props;
        return (
            <div>
                {/* <Header
                    brand="Logo_Button"
                    rightLinks={<HeaderLinks />}
                    fixed
                    color="transparent"
                    changeColorOnScroll={{
                    height: 400,
                    color: "black"
                    }}
                    {...rest}
                /> */}
                <Route path="/" render={Landing}/>
                <Route path="/aboutme" render={AboutMe}/>
                {/*<Route path="/category/hubs" render={OffersListHubs}/>
                <Route path="/category/wheels" render={OffersListWheels}/>
                <Route path="/category/dhframes" render={OffersListDhFrames}/>
                <Route path="/category/enduroframes" render={OffersListEnduroFrames}/> */}
                {/* <OffersList/> */}
            </div>)
        
    }
}

const AboutMe = () => {
    return <div><AboutMePage/></div>
}
const Landing = () => {
    return <div><LandingPage/></div>
}
const OffersListDhFrames = () => {
    return <div>asd</div>
}
const OffersListEnduroFrames = () => {
    return <div>asd</div>
}
const OffersListHubs = () => {
    return <div>asd</div>
}
export default Layout;