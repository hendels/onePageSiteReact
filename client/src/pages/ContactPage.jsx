
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
//sections
import MailConfirmation from '../sections/MailConfirm.jsx';
//style
import profilePageStyle from "../assets/jss/material-kit-react/views/profilePage.jsx";
//hoc?
import Aux from '../hoc/Auxy/Auxy.js';
class ProfilePage extends React.Component {
  constructor(){
    super();
    this.state = {
      phoneText: '',
      messageText: '',
      nameText: '',
      emailText: '',
      errorEmail: false,
      errorPhone: false,
      errorMessage: false,
      updateComponent: true
    };
    this.handleChangePhone = this.handleChangePhone.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeMessage = this.handleChangeMessage.bind(this);
    // this.handleSendEmail = this.handleSendEmail.bind(this);
    this.handleClearFormFields = this.handleClearFormFields.bind(this);
    // this.handleCheckingFormValues = this.handleCheckingFormValues.bind(this);

  }
  
  handleChangePhone({target}) {
    this.setState ({phoneText: target.value}, () => {
      console.log(`state: ${this.state.phoneText}, value: ${target.value}`);
    });
    console.log(this.state.phoneText);
    
  }
  handleChangeEmail({target}) {
    this.setState ({emailText: target.value}, () => {
      console.log(`state: ${this.state.emailText}, value: ${target.value}`);
    });
  }
  handleChangeName({target}) {
    this.setState ({nameText: target.value}, () => {
      console.log(`state: ${this.state.nameText}, value: ${target.value}`);
    });
  }
  handleChangeMessage({target}) {
    this.setState ({messageText: target.value}, () => {
      console.log(`state: ${this.state.messageText}, value: ${target.value}`);
    });
    // console.log(this.staste.messageText);
  }
  // async handleSendEmail(e){
  //   e.preventDefault();
  //   console.log('clicked!');
  //   const {       
  //     phoneText,
  //     messageText,
  //     nameText,
  //     emailText
  //   } = this.state;

  //   const emailForm = await axios.post('/api/emailForm', {
  //     phoneText: phoneText,
  //     messageText: messageText,
  //     nameText: nameText,
  //     emailText: emailText
  //   }) 
  // }
  handleClearFormFields(){
    //e.preventDefault();
    // alert('call from parent');
    this.setState({
      phoneText: '',
      emailText: '',
      nameText: '',
      messageText: '',
      errorEmail: false,
      errorPhone: false,
      errorMessage: false
    })
    console.log('update from child!');
  }
  
  // componentWillMount(){
  //   //this.handleCheckingFormValues(true);
  // }
  // componentDidMount(){
  //   this.handleCheckingFormValues(true);
  // }
  // componentDidUpdate(prevState){
  //   console.log('componentDidUpdate')
  //   if (this.state.messageText !== prevState.messageText) {
  //     this.handleCheckingFormValues(true);
  //   }
  // }
  // shouldComponentUpdate(nextProps, nextState){
  //   // console.log('SHOULD');
  //   // if (this.state.updateComponent === undefined)
  //   //   return true;
  //   // else
  //   //   return this.state.updateComponent;
  // }
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
            <div className={classes.container}>
              <p>  &nbsp;</p>
              <p>  &nbsp;</p>
              <h3>
              <b>Zadzwoń i umów się na wizytę </b>
              </h3>
              <h4>
              lub przyjdź osobiście w godz. <b>9:00-12:00</b> (od poniedziałku do piątku).
              </h4>              
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
                  <Button color="success" href="mailto:malgorzata.karolak4@onet.pl"><Email /> malgorzata.karolak4@onet.pl</Button>
                  <Button color="facebook" style={{display: "table-cell"}} href="https://www.facebook.com/dietetykaiodchudzanie" target="_blank"><i className={classes.socialIcons + "  fab fa-facebook"} /> /dietetykaiodchudzanie</Button>
                </Grid>
              </Grid>
              <p>  &nbsp;</p>
              <p>  &nbsp;</p>              
              <h3>
              Lub wyślij wiadomość:
              </h3>
              <GridContainer justify="flex-start">
                <GridItem xs={4} sm={4} md={4} lg={4}>
                  <CustomInput
                    labelText="Imię"
                    id="nameInput"
                    value={this.state.nameText}
                    formControlProps={{
                      fullWidth: false,
                      onChange: this.handleChangeName
                    }}
                  />
                </GridItem>
                <GridItem xs={4} sm={4} md={4} lg={4}>
                  <CustomInput
                    labelText="E-mail"
                    id="emailInput"
                    value={this.state.emailText}
                    // error={this.state.errorEmail}
                    formControlProps={{
                      fullWidth: false,
                      onChange: this.handleChangeEmail
                    }}
                  />
                </GridItem>
                <GridItem xs={4} sm={4} md={4} lg={4}>
                  <CustomInput
                    labelText="Telefon"
                    id="phoneInput"
                    value={this.state.phoneText}
                    // error={this.state.errorPhone}
                    formControlProps={{
                      fullWidth: false,
                      onChange: this.handleChangePhone
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={12} lg={12}>
                  <CustomInput
                    labelText="Treść"
                    id="messageInput"
                    value={this.state.messageText}
                    // error={this.state.errorMessage}
                    formControlProps={{
                      fullWidth: true,
                      onChange: this.handleChangeMessage,
                      // multiline
                    }}
                  />
                </GridItem>
              </GridContainer>
              <Grid container justify="flex-start">
                <Grid item>
                  <MailConfirmation mailFormDetails={this.state} clearFormFields={this.handleClearFormFields}/>
                </Grid>
                <Grid item>
                  <Button color="rose" onClick={() => {
                    this.setState({
                      phoneText: '',
                      emailText: '',
                      nameText: '',
                      messageText: '',
                      errorEmail: false,
                      errorPhone: false,
                      errorMessage: false
                    })
                  }}>
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
