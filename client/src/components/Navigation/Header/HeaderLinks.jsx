/*eslint-disable*/
import React from "react";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";
// @material-ui/icons
import { Apps, CloudDownload } from "@material-ui/icons";

// core components
import CustomDropdown from '../../CustomDropdown/CustomDropdown.jsx';
import Button from "../../CustomButtons/Button.jsx";

import headerLinksStyle from '../../../assets/jss/material-kit-react/components/headerLinksStyle.jsx';
import Logo from '../../../assets/img/logo_napis.svg';

import classesImp from '../../Logo/Logo.css';

function HeaderLinks({ ...props }) {
  const { 
    classes, 
    dontShowAboutMe 
  } = props;
  return (
    <List className={classes.list}>
      <Link to={"/contact"} className={classes.navLink}>
          Kontakt
      </Link>
      {/* <Button
          color="transparent"
          target="_blank"
        > */}
        <Link to={"/pricing"} className={classes.navLink}>
          Cennik
        </Link>
      {/* </Button> */}
      {!dontShowAboutMe ? 
      (
        <Link to={"/aboutme"} className={classes.navLink}>
          O Mnie
        </Link>
        ):(
        <span/>
      )}
        <Link to={"/"} className={classes.navLink}>
          Opinie klientów
        </Link>
      <Tooltip
          id="instagram-facebook"
          title="Polub nas!"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
        <Button
            justIcon
            color="transparent"
            href="https://www.facebook.com/dietetykaiodchudzanie"
            className={classes.margin5}
          >
            <i className={classes.socialIcons + " fab fa-facebook"} />
        </Button>
      </Tooltip>
      <Tooltip
          id="instagram"
          title="Obserwuj nas!"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            justIcon
            color="transparent"
            href="https://www.facebook.com/dietetykaiodchudzanie"
            className={classes.margin5}
          >
            <i className={classes.socialIcons + " fab fa-instagram"} />
          </Button>
      </Tooltip>
      

    </List>
    
  );
}

export default withStyles(headerLinksStyle)(HeaderLinks);
