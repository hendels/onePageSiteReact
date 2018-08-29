import React from 'react';
// import classes from './Toolbar.css';
import classNames from "classnames";
import { Link } from "react-router-dom";
// import classes from '../../../assets/jss/material-kit-react';
import NavigationItems from '../NavigationItems/NavigationItems';
import withStyles from "@material-ui/core/styles/withStyles";
import Header from '../Header/Header.jsx';
import HeaderLinks from '../Header/HeaderLinks.jsx';
import componentsStyle from '../../../assets/jss/material-kit-react/views/components.jsx';

import Parallax from "../../Parallax/Parallax.jsx";
import GridContainer from "../../Grid/GridContainer.jsx";
import GridItem from "../../Grid/GridItem.jsx";
import Button from "../../CustomButtons/Button.jsx";
import Footer from '../../Footer/Footer.jsx';
import SectionCarousel from '../../Carousel/SectionCarousel.jsx';

import FirstText from '../../../sections/FirstText.jsx';
import SecondText from '../../../sections/SecondText.jsx';
import InfoCards from '../../../sections/InfoCards.jsx';
import PricingTable from '../../../sections/PricingTable.jsx';
//css

//icons
import People from "@material-ui/icons/People";

class Toolbar extends React.Component{

    render(){
        const { classes, ...rest } = this.props;
        return(
        <div>      
            <Header
                brand="Logo_Button"
                rightLinks={<HeaderLinks />}
                fixed
                color="transparent"
                showBrand
                changeColorOnScroll={{
                height: 350,
                color: "black"                
                }}
                {...rest}
            />                 
            <Parallax image={require('../../../assets/img/healthy_person_1.jpg')}>
            <div className={classes.container}>
                <GridContainer>
                <GridItem>
                    <div className={classes.brand}>
                    <p>  &nbsp;</p>
                    <p>  &nbsp;</p>
                    <h1 className={classes.title}>Dietetyka i Odchudzanie.</h1>
                    <h3 className={classes.subtitle}>
                    At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium 
                    voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi.
                    </h3>
                    <GridContainer justify="center">
                        <GridItem>
                            <Link to={"/aboutme"} className={classes.link}>
                                <Button color="rose" round size="sm">
                                    <People className={classes.icons} /> O mnie
                                </Button>
                            </Link>
                        </GridItem>
                    </GridContainer>
                    </div>
                </GridItem>
                </GridContainer>
            </div>
            </Parallax>
            <div className={classNames(classes.main, classes.mainRaised)}>
                <FirstText/>
                <InfoCards/>
                <SecondText/>
            </div>
            <Footer/>
        </div>
            
            
        )
    }
}

export default withStyles(componentsStyle)(Toolbar);

