import React from "react";
import { Link } from "react-router-dom";
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
import CustomInput from "../components/CustomInput/CustomInput.jsx";
import profile from "../assets/img/thumbnails/face_vector.jpg";


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
            {/* <div className={classes.description}> */}
            <div className={classes.container}>
              <p>  &nbsp;</p>
              <p>  &nbsp;</p>
              <h2>
              Zadzwoń i umów się na wizytę lub przyjdź osobiście w godz. 9-12.
              </h2>
              <h3>
              (od poniedziałku do piątku).
              </h3>
              <p>  &nbsp;</p>
              <h4>
              Działoszyn
              </h4>
              <h4>
              ul. Piłsudskiego 21
              </h4>
              <h4>
              (w budynku Ośrodka Zdrowia)
              </h4>
              <Button color="primary" round size="lg"><Favorite /> 502 125 790</Button>
              {/* <p style={{textJustify: "inter-word"}}>
              Pro ea assum dicit invidunt. Mei doming fabellas electram at, enim voluptua cum ea. 
              Ea duo tempor quodsi alienum, mea te tibique accusata conceptam. Ipsum copiosae ne quo,
              ei sea tantas nostrud. Mea et iriure volumus. At graeco labitur eam. Eum ut porro persequeris 
              reprehendunt, ullum dissentiunt id pro, usu et illum pericula interpretaris.

              {" "}
              </p> */}
              <p>  &nbsp;</p>
              <p>  &nbsp;</p>              
            {/* </div> */}
            
              <h3>
              Lub wyślij wiadomość:
              </h3>
              <GridContainer justify="center">
                <GridItem xs={1} sm={4} md={2} lg={4}>
                  <CustomInput
                    labelText="Imię"
                    id="float"
                    formControlProps={{
                      fullWidth: false
                    }}
                  />
                </GridItem>
                <GridItem xs={1} sm={4} md={2} lg={4}>
                  <CustomInput
                    labelText="E-mail"
                    id="float"
                    formControlProps={{
                      fullWidth: false
                    }}
                  />
                </GridItem>
                <GridItem xs={1} sm={4} md={2} lg={4}>
                  <CustomInput
                    labelText="Telefon"
                    id="float"
                    formControlProps={{
                      fullWidth: false
                    }}
                  />
                </GridItem>
                <GridItem xs={1} sm={1} md={2} lg={12}>
                  <CustomInput
                    labelText="Treść"
                    id="float"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
              </GridContainer>
              <GridContainer justify="center">
                  <GridItem>
                      <Link to={"/send"} className={classes.link}>
                          <Button color="rose" round size="lg">
                              Wyślij
                          </Button>
                      </Link>
                  </GridItem>
              </GridContainer>
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
    );
  }
}

export default withStyles(profilePageStyle)(ProfilePage);
