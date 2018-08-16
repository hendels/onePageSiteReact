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

import profile from "../assets/img/thumbnails/face.png";


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
          rightLinks={<HeaderLinks dontShowAboutMe/>}
          fixed          
          changeColorOnScroll={{
            height: 200,
            color: "white"
          }}
          {...rest}
        />
        <Parallax small filter image={require("../assets/img/dark_healthy_2.jpg")} />
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div>
            <div className={classes.container}>
              <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={6}>
                  <div className={classes.profile}>
                    <div>
                      <img src={profile} alt="..." className={imageClasses} />
                    </div>
                    <div className={classes.name}>
                      <h3 className={classes.title}>Małgorzata Karolak</h3>
                      <h6>DIETETYK</h6>
                    </div>
                  </div>
                </GridItem>
              </GridContainer>
              <div className={classes.description}>
                <p>
                Invenire aliquando sit ad. Homero feugait commune eum te, intellegam assueverit ne vix. 
                Iriure voluptua ad vis, delenit petentium ex mea. Vix saepe graecis percipitur no, his te 
                vero liber dissentiunt. Eos reque consetetur ut, cu mucius maiorum pertinax eos. Ea pro
                agam nobis veritus, causae facilis sea te.

                Pro ea assum dicit invidunt. Mei doming fabellas electram at, enim voluptua cum ea. 
                Ea duo tempor quodsi alienum, mea te tibique accusata conceptam. Ipsum copiosae ne quo,
                ei sea tantas nostrud. Mea et iriure volumus. At graeco labitur eam. Eum ut porro persequeris 
                reprehendunt, ullum dissentiunt id pro, usu et illum pericula interpretaris.

                Repudiare scribentur ad per, eam id hinc corrumpit dissentiet. Sit esse quas graeco id, 
                mei ad quis consul consulatu. Cu ius vidisse scribentur. Malis errem dissentiet et pri, ne 
                modo electram neglegentur duo, paulo accusata neglegentur at nec. Pri postulant repudiandae ad,
                at latine sanctus explicari vix. Vix ne labore veritus, amet saepe quo ad. Ut brute erant paulo est,
                te utamur nostrum cum, has omnium mentitum an.
                {" "}
                </p>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default withStyles(profilePageStyle)(ProfilePage);
