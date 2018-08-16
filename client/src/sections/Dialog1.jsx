import React from "react";
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
import image from '../assets/img/photos/3.JPG';

function Transition(props) {
  return <Slide direction="down" {...props} />;
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
  render() {
    const { classes } = this.props;
    return (
      // <div className={classes.section}>
        <div className={classes.container}>
            {/* <GridContainer> */}
              {/* <GridItem xs={12} sm={12} md={6} lg={4}> */}
                <Button
                  color="success"
                  size="sm"
                  onClick={() => this.handleClickOpen("classicModal")}
                >
                  {/* <LibraryBooks className={classes.icon} />Classic */}
                  Więcej
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
                    <h4 className={classes.modalTitle}>Analiza składu organizmu.</h4>
                  </DialogTitle>
                  <DialogContent
                    id="classic-modal-slide-description"
                    className={classes.modalBody}
                  >
                  <img
                    style={{display: "block", borderRadius: "8px", 
                    marginLeft: "auto",
                    marginRight: "auto",
                    width: "50%"}}
                    // className={classes.imgCardTop}
                    src={image}
                    alt="Card-img-cap"
                  />
                    <p>
                      Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia, there live the blind
                      texts. Separated they live in Bookmarksgrove right at
                      the coast of the Semantics, a large language ocean. A
                      small river named Duden flows by their place and
                      supplies it with the necessary regelialia. It is a
                      paradisematic country, in which roasted parts of
                      sentences fly into your mouth. Even the all-powerful
                      Pointing has no control about the blind texts it is an
                      almost unorthographic life One day however a small line
                      of blind text by the name of Lorem Ipsum decided to
                      leave for the far World of Grammar.
                    </p>
                  </DialogContent>
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
              {/* </GridItem> */}
            {/* </GridContainer> */}
        </div>
      // </div>
    );
  }
}

export default withStyles(javascriptStyles)(SectionJavascript);
