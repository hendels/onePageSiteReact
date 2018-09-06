/*eslint-disable*/
import React from "react";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import Tooltip from "@material-ui/core/Tooltip";
// @material-ui/icons

// core components
import Button from "../../CustomButtons/Button.jsx";

import headerLinksStyle from '../../../assets/jss/material-kit-react/components/headerLinksStyle.jsx';

function HeaderLinks({ ...props }) {
  const { 
    classes, 
  } = props;
  return (
    <List className={classes.list}>
      <Link to={"/aboutme"} className={classes.navLink}>
        O Mnie
      </Link>
      <Link to={"/offer"} className={classes.navLink}>
        Oferta
      </Link>
      <Link to={"/pricing"} className={classes.navLink}>
        Cennik
      </Link>
      <Link to={"/contact"} className={classes.navLink}>
          Kontakt
      </Link>
      {/* <Link to={"/"} className={classes.navLink}>
        Opinie klientów
      </Link> */}
      <Tooltip
          id="instagram-facebook"
          title="Polub nas!"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
        <Button
            justIcon
            color="transparent"
            // style={{display: "table-cell"}}
            href="https://www.facebook.com/dietetykaiodchudzanie"
            target="_blank"
            className={classes.margin5}
          >
            <i className={classes.socialIcons + " fab fa-facebook"} />
        </Button>
      </Tooltip>
    </List>
    
  );
}

export default withStyles(headerLinksStyle)(HeaderLinks);
