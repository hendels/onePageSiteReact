import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
import Camera from "@material-ui/icons/Camera";
import Palette from "@material-ui/icons/Palette";
import Favorite from "@material-ui/icons/Favorite";
// core components
import Header from "../components/Navigation/Header/Header.jsx";
import HeaderLinks from "../components/Navigation/Header/HeaderLinks.jsx";

import Footer from "../components/Footer/Footer.jsx";
import Button from "../components/CustomButtons/Button.jsx";
import GridContainer from "../components/Grid/GridContainer.jsx";
import GridItem from "../components/Grid/GridItem.jsx";
// import NavPills from "components/NavPills/NavPills.jsx";
import Parallax from "../components/Parallax/Parallax.jsx";

import profile from "../assets/img/thumbnails/face_vector.jpg";
import PricingTable from '../sections/PricingTable.jsx';

import profilePageStyle from "../assets/jss/material-kit-react/views/profilePage.jsx";

class ProfilePage extends React.Component {
  render() {
    const { classes, ...rest } = this.props;
    const imageClasses = classNames(
      classes.imgRaised,
      classes.imgRoundedCircle,
      classes.imgFluid
    );
    const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
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
              <h3 className={classes.title}>Cennik</h3>
            {/* </div> */}
              <p style={{textJustify: "inter-word"}}>
              Pri postulant repudiandae ad,
              at latine sanctus explicari vix. Vix ne labore veritus, amet saepe quo ad. Ut brute erant paulo est,
              te utamur nostrum cum, has omnium mentitum an.
              {" "}
              </p>
              
            </div>
            <div className={classes.container}>
              <PricingTable/>
            </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default withStyles(profilePageStyle)(ProfilePage);
