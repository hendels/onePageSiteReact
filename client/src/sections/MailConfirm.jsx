import React from "react";
import axios from 'axios';
// react plugin for creating date-time-picker
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Slide from "@material-ui/core/Slide";
import IconButton from "@material-ui/core/IconButton";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
// @material-ui/icons
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import Close from "@material-ui/icons/Close";
// core components
import GridContainer from "../components/Grid/GridContainer.jsx";
import GridItem from "../components/Grid/GridItem.jsx";
import Button from "../components/CustomButtons/Button.jsx";
import javascriptStyles from "../assets/jss/material-kit-react/views/components-sections/javascriptStyles.jsx";
//img

function Transition(props) {
  return <Slide direction="right" {...props} />;
}

class SectionJavascript extends React.Component {
  anchorElLeft = null;
  anchorElTop = null;
  anchorElBottom = null;
  anchorElRight = null;
  constructor(props) {
    super(props);
    this.state = {
      classicModal: false,
      openLeft: false,
      openTop: false,
      openBottom: false,
      openRight: false
    };
    this.handleSendEmail = this.handleSendEmail.bind(this);
    this.handleSendAndClear = this.handleSendAndClear.bind(this);
    this.handleCheckingFormValues = this.handleCheckingFormValues.bind(this);
  }
  handleClickOpen(modal) {
    var x = [];
    x[modal] = true;
    this.setState(x);
  }
  handleClose(modal) {
    var x = [];
    x[modal] = false;
    this.setState(x);
  }
  async handleSendEmail(){
    //e.preventDefault();

    console.log('clicked!');
    const {       
      phoneText,
      messageText,
      nameText,
      emailText,
    } = this.props.mailFormDetails;

    const emailForm = await axios.post('/api/emailForm', {
      phoneText: this.props.mailFormDetails.phoneText,
      messageText: this.props.mailFormDetails.messageText,
      nameText: this.props.mailFormDetails.nameText,
      emailText: this.props.mailFormDetails.emailText
    }) 
  }
  async handleSendAndClear(){
    //e.preventDefault();
    const {       
      errorEmail,
      errorPhone,
      errorMessage
    } = this.props.mailFormDetails;
    
    const errString = await this.handleCheckingFormValues();
    if (errString !== undefined){
      alert(errString);
    } else {    
      this.handleSendEmail();
      this.handleClickOpen("classicModal");
      this.props.clearFormFields();
    }
      
  }
  handleEmailValidation(value){
      let emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
      if (emailValid !== null)
        if (emailValid.length > 3){
          this.setState({errorEmail: false}, () => {})
        } else 
          this.setState({errorEmail: true}, () => {})
      else
        this.setState({errorEmail: true}, () => {})
  }
  handlePhoneValidation(value){
    let phoneValid = value.match(/\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{3})/);
    if (phoneValid !== null)
      if (phoneValid.length > 0){
        this.setState({errorPhone: false}, () => {})
      } else 
        this.setState({errorPhone: true}, () => {})      
    else
      this.setState({errorPhone: true}, () => {}) 
  }
  handleMessageValidation(value){
    if (value === '' )
      this.setState({errorMessage: true}, () => {})
    else
      this.setState({errorMessage: false}, () => {}) 
  }
  async handleCheckingFormValues(){
    console.log('--------------------check validations-------------------');
    var arrErr = [];
    await this.handleEmailValidation(this.props.mailFormDetails.emailText);
    await this.handlePhoneValidation(this.props.mailFormDetails.phoneText);
    await this.handleMessageValidation(this.props.mailFormDetails.messageText);

    console.log('messageErr:::' + null + ' | state - errorMessage:::' + this.state.errorMessage);
    if (this.state.errorEmail) arrErr.push('Błąd w Polu Email\n');
    if (this.state.errorPhone) arrErr.push('Błąd w Polu Telefon\n');
    if (this.state.errorMessage) arrErr.push('Pole Wiadomość nie może być puste\n');
    if (this.state.errorEmail || this.state.errorPhone || this.state.errorMessage) {
      var errString = arrErr.join("");
      return errString;
    }
    return undefined;
    
  }
  componentDidMount(){
    this.handleCheckingFormValues();
  }
  render() {
    const { classes } = this.props;
    return (
        <div className={classes.container}>
                <Button
                  color="success"                  
                  onClick={this.handleSendAndClear}
                >
                  Wyślij
                </Button>
                <Dialog
                  classes={{
                    root: classes.center,
                    paper: classes.modal
                  }}
                  open={this.state.classicModal}
                  TransitionComponent={Transition}
                  keepMounted
                  onClose={() => this.handleClose("classicModal")}
                  aria-labelledby="classic-modal-slide-title"
                  aria-describedby="classic-modal-slide-description"
                >
                  <DialogTitle
                    id="classic-modal-slide-title"
                    disableTypography
                    className={classes.modalHeader}
                  >
                    <IconButton
                      className={classes.modalCloseButton}
                      key="close"
                      aria-label="Close"
                      color="inherit"
                      onClick={() => this.handleClose("classicModal")}
                    >
                      <Close className={classes.modalClose} />
                    </IconButton>
                    <h4 className={classes.modalTitle}>Dziękujemy za wiadomość!</h4>
                  </DialogTitle>
                  <DialogActions className={classes.modalFooter}>
                    <Button
                      onClick={() => this.handleClose("classicModal")}
                      color="danger"
                      simple
                    >
                      Zamknij
                    </Button>
                  </DialogActions>
                </Dialog>
        </div>
    );
  }
}

export default withStyles(javascriptStyles)(SectionJavascript);
