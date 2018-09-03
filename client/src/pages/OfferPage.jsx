import React from 'react';
import classNames from "classnames";
import GridContainer from "../components/Grid/GridContainer.jsx";
import GridItem from "../components/Grid/GridItem.jsx";
import Grid from '@material-ui/core/Grid';

import Parallax from "../components/Parallax/Parallax.jsx";

import Stepper from '../sections/Stepper.jsx';
import Header from "../components/Navigation/Header/Header.jsx";
import HeaderLinks from "../components/Navigation/Header/HeaderLinks.jsx";
import Footer from "../components/Footer/Footer.jsx";
//style
import withStyles from "@material-ui/core/styles/withStyles";
import profilePageStyle from "../assets/jss/material-kit-react/views/profilePage.jsx";

class OfferPage extends React.Component {
    render(){
        const { classes, ...rest } = this.props;
        return (
            <div>
            <Header
                color="transparent"
                brand="Dietetyka i Odchudzanie"
                rightLinks={<HeaderLinks />}
                fixed          
                changeColorOnScroll={{
                    height: 200,
                    color: "white"
                }}
                {...rest}
            />
            <Parallax small filter image={require("../assets/img/dark_healthy_2.jpg")} />
            <div className={classNames(classes.main, classes.mainRaised)}>
                <div className={classes.description}>
                {/* <div className={classes.name}> */}
                <h3 className={classes.title}>Przebieg wizyty</h3>
                {/* </div> */}
                {/* <p style={{textJustify: "inter-word"}}>
                Pri postulant repudiandae ad,
                at latine sanctus explicari vix. Vix ne labore veritus, amet saepe quo ad. Ut brute erant paulo est,
                te utamur nostrum cum, has omnium mentitum an.
                {" "}
                </p> */}
                
                </div>
                <div className={classes.container}>
                    <GridContainer justify="flex-start">
                    <Stepper/>
                    </GridContainer>
                    {/* <Grid container justify="flex-start">
                    <Stepper/>
                    </Grid> */}
                    
                    <p>  &nbsp;</p>
                    <p>  &nbsp;</p>
                    <p>  &nbsp;</p>
                    <p>  &nbsp;</p>
                </div>
            </div>
            <p>  &nbsp;</p>
            <p>  &nbsp;</p>
            <p>  &nbsp;</p>
            <p>  &nbsp;</p>
            <p>  &nbsp;</p>
            <p>  &nbsp;</p>
            <p>  &nbsp;</p>
            <p>  &nbsp;</p>
            <p>  &nbsp;</p>
            <p>  &nbsp;</p>
            <Footer />
            
            </div>
        )
    }
}

export default withStyles(profilePageStyle)(OfferPage);