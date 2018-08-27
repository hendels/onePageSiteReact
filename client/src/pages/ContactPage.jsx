
import React from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
// import mailgun from 'mailgun-js';
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
import Phone from "@material-ui/icons/Phone";
import Email from "@material-ui/icons/Email";
// core components
import Header from "../components/Navigation/Header/Header.jsx";
import HeaderLinks from "../components/Navigation/Header/HeaderLinks.jsx";
import Input from "@material-ui/core/Input"
import Footer from "../components/Footer/Footer.jsx";
import Button from "../components/CustomButtons/Button.jsx";
import GridContainer from "../components/Grid/GridContainer.jsx";
import GridItem from "../components/Grid/GridItem.jsx";
import Parallax from "../components/Parallax/Parallax.jsx";
import CustomInput from "../components/CustomInput/CustomInput.jsx";
import Grid from '@material-ui/core/Grid';
//style
import profilePageStyle from "../assets/jss/material-kit-react/views/profilePage.jsx";

class ProfilePage extends React.Component {
  constructor(){
    super();
    this.state = {
      phoneText: '',
      messageText: '',
      nameText: '',
      emailText: ''
    };
    this.handleChangePhone = this.handleChangePhone.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeMessage = this.handleChangeMessage.bind(this);
    this.handleSendEmail = this.handleSendEmail.bind(this);
  }
  
  handleChangePhone({target}) {
    this.setState ({
      phoneText: target.value
    });
    console.log(this.state.phoneText);
    
  }
  handleChangeEmail({target}) {
    this.setState ({
      emailText: target.value
    });
    console.log(this.state.emailText);
  }
  handleChangeName({target}) {
    this.setState ({
      nameText: target.value
    });
    console.log(this.state.nameText);
  }
  handleChangeMessage({target}) {
    this.setState ({
      messageText: target.value
    });
    console.log(this.state.messageText);
  }
  async handleSendEmail(e){
    e.preventDefault();
    console.log('clicked!');
    const {       
      phoneText,
      messageText,
      nameText,
      emailText
    } = this.state;

    const emailForm = await axios.post('/api/emailForm', {
      phoneText: phoneText,
      messageText: messageText,
      nameText: nameText,
      emailText: emailText
    }) 

  }
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
              <Grid container spacing={40} justify="space-between">
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
                  <Button color="info" href="tel:+502125790"><Phone />502 125 790</Button>
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
                      fullWidth: false,
                      onChange: this.handleChangeName
                    }}
                  />
                </GridItem>
                <GridItem xs={4} sm={4} md={4} lg={4}>
                  <CustomInput
                    labelText="E-mail"
                    id="float"
                    formControlProps={{
                      fullWidth: false,
                      onChange: this.handleChangeEmail
                    }}
                  />
                </GridItem>
                <GridItem xs={4} sm={4} md={4} lg={4}>
                  <CustomInput
                    labelText="Telefon"
                    id="float"
                    formControlProps={{
                      fullWidth: false,
                      onChange: this.handleChangePhone
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={12} lg={12}>
                  <CustomInput
                    labelText="Treść"
                    id="float"
                    formControlProps={{
                      fullWidth: true,
                      onChange: this.handleChangeMessage
                      // multiline
                    }}
                  />
                </GridItem>
              </GridContainer>
              <Grid container justify="flex-start">
                <Grid item>
                  <Button color="info" onClick ={this.handleSendEmail}>
                      Wyślij
                  </Button>
                </Grid>
                <Grid item>
                  <Button onClick={this.sendEmail} color="rose">
                      Wyczyść
                  </Button>
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
