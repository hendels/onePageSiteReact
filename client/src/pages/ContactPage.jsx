import React from "react";
import { Link } from "react-router-dom";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
import Camera from "@material-ui/icons/Camera";
import Palette from "@material-ui/icons/Palette";
import Phone from "@material-ui/icons/Phone";
import Email from "@material-ui/icons/Email";
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
import Grid from '@material-ui/core/Grid';

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
              <b>Zadzwoń i umów się na wizytę </b>
              </h2>
              <h3>
              lub przyjdź osobiście w godz. <b>9:00-12:00</b> (od poniedziałku do piątku).
              </h3>              
              <p>  &nbsp;</p>
              <Grid container spacing={48} justify="space-between">
                <Grid item xs={6}>
                    <h4><b>
                    Działoszyn
                    </b></h4>
                    <h4>
                    ul. Piłsudskiego 21a
                    </h4>
                    <h4>
                    (w budynku Ośrodka Zdrowia)
                    </h4>
                </Grid>
                <Grid item xs={6} direction="column-reverse">
                  <Button color="info" ><Phone /> 502 125 790</Button>
                  <Button color="success" ><Email /> malgorzata.karolak@gmail.com</Button>
                  <Button color="facebook" ><i className={classes.socialIcons + "  fab fa-facebook"} /> /dietetykaiodchudzanie</Button>
                </Grid>
              </Grid>
              <p>  &nbsp;</p>
              <p>  &nbsp;</p>              
            {/* </div> */}
              <h3>
              Lub wyślij wiadomość:
              </h3>
              <GridContainer justify="flex-start">
                <GridItem xs={4} sm={4} md={4} lg={4}>
                  <CustomInput
                    labelText="Imię"
                    id="float"
                    formControlProps={{
                      fullWidth: false
                    }}
                  />
                </GridItem>
                <GridItem xs={4} sm={4} md={4} lg={4}>
                  <CustomInput
                    labelText="E-mail"
                    id="float"
                    formControlProps={{
                      fullWidth: false
                    }}
                  />
                </GridItem>
                <GridItem xs={4} sm={4} md={4} lg={4}>
                  <CustomInput
                    labelText="Telefon"
                    id="float"
                    formControlProps={{
                      fullWidth: false
                    }}
                  />
                </GridItem>
                <GridItem xs={10} sm={10} md={10} lg={10}>
                  <CustomInput
                    labelText="Treść"
                    id="float"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
              </GridContainer>
              <Grid container justify="flex-start">
                <Grid item>
                  <Link to={"/send"} className={classes.link}>
                    <Button color="info">
                        Wyślij
                    </Button>
                  </Link>
                </Grid>
                <Grid item>
                  {/* <Link to={"/api/passwords"} className={classes.link}> */}
                    <Button href="/api/passwords" color="rose">
                        Wyczyść
                    </Button>
                  {/* </Link> */}
                </Grid>
              </Grid>
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
    );
  }
}

export default withStyles(profilePageStyle)(ProfilePage);
