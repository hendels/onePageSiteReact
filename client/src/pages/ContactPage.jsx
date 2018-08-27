
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
    this.chandleChangePhone = this.chandleChangePhone.bind(this);
    this.chandleChangeEmail = this.chandleChangeEmail.bind(this);
    this.chandleChangeName = this.chandleChangeName.bind(this);
    this.chandleChangeMessage = this.chandleChangeMessage.bind(this);
  }
  
  chandleChangePhone({target}) {
    this.setState ({
      phoneText: target.value
    });
    console.log(this.state.phoneText);
    
  }
  chandleChangeEmail({target}) {
    this.setState ({
      emailText: target.value
    });
    console.log(this.state.emailText);
  }
  chandleChangeName({target}) {
    this.setState ({
      nameText: target.value
    });
    console.log(this.state.nameText);
  }
  chandleChangeMessage({target}) {
    this.setState ({
      messageText: target.value
    });
    console.log(this.state.messageText);
  }
  sendEmail(){
    // const api_key = process.env.MAILGUN_API_KEY;
    // const domain = process.env.MAILGUN_DOMAIN;
    // const mailgunApiKey = "ccc83115d2c795ebc91860bdae499400-a4502f89-cc1c9ae8";
    // const mailgunDomain = 'sandboxa0f967162ee142029018cbc3d1852cc5.mailgun.org';
    // const mailgun = require('mailgun-js')({apiKey: api_key || mailgunApiKey, domain: domain || mailgunDomain});
    // const data = {
    //   from: 'Power User <' + this.state.emailText + '>',
    //   to: 'p.harendarz@gmail.com',
    //   subject: 'Wiadomość ze strony',
    //   text: this.state.messageText
    // };
     
    // mailgun.messages().send(data, function (error, body) {
    //   if (error) {
    //     console.log(error);
    //   }
    //   console.log(body);
    // });
  }
  // sendData = () => {
  //   const url = '/api/senddata';
  //   const reactData = {email: this.state.emailText, message: this.state.messageText, name: this.state.nameText, phone: this.state.phoneText};
  //   axios.post(url, reactData)
  //      .then(res => console.log('Data send : ' + this.state.messageText))
  //      .catch(err => console.log(err.data))
  //   }
  onSetResult = (result, skip) =>{
    // this.setState(applySetResult(result, skip));
    // console.log(result);
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
                      onChange: this.chandleChangeName
                    }}
                  />
                </GridItem>
                <GridItem xs={4} sm={4} md={4} lg={4}>
                  <CustomInput
                    labelText="E-mail"
                    id="float"
                    formControlProps={{
                      fullWidth: false,
                      onChange: this.chandleChangeEmail
                    }}
                  />
                </GridItem>
                <GridItem xs={4} sm={4} md={4} lg={4}>
                  <CustomInput
                    labelText="Telefon"
                    id="float"
                    formControlProps={{
                      fullWidth: false,
                      onChange: this.chandleChangePhone
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={12} lg={12}>
                  <CustomInput
                    labelText="Treść"
                    id="float"
                    formControlProps={{
                      fullWidth: true,
                      onChange: this.chandleChangeMessage
                      // multiline
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
                    <Button onClick={this.sendEmail} color="rose">
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
