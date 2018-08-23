import React from "react";
// material-ui components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import Card from "../components/Card/Card.jsx";
import CardBody from "../components/Card/CardBody.jsx";
import Button from "../components/CustomButtons/Button.jsx";
import GridContainer from "../components/Grid/GridContainer.jsx";
import GridItem from "../components/Grid/GridItem.jsx";

import imagesStyles from "../assets/jss/material-kit-react/imagesStyles.jsx";

import { cardTitle, imageInsideCard } from "../assets/jss/material-kit-react.jsx";
//sections
import Dialog1 from '../sections/Dialog1.jsx';
//css 
//images
import imageCard1 from '../assets/img/thumbnails/body.png';
import imageCard2 from '../assets/img/thumbnails/dietary3.jpg';
import imageCard3 from '../assets/img/thumbnails/brain.png';
import imageCard4 from '../assets/img/thumbnails/motivation2.png';


const style = {
  ...imagesStyles,
  cardTitle,
  imageInsideCard
};

class Cards extends React.Component {
  render() {
    const { classes } = this.props;
    return (
    <GridContainer justify="center">
    {/* <div style={{display: "flex", flexWrap: "nowrap", alignItems: "center", justifyContent: "center"}}> */}
      <Card style={{width: "20rem"}}>
        <img
          style={{height: "180px", width: "100%", display: "block"}}
          className={classes.imgCardTop}
          src={imageCard1}
          alt="Card-img-cap"
        />
        <CardBody>
          <h4 className={classes.cardTitle}>Analiza składu organizmu</h4>
          <p>
              Erant harum noster ei sea, in modo nominavi per. Ne primis pertinacia mei, 
             diceret tractatos honestatis et eam, mel erant possit verear ut.
          </p>
          <Dialog1/>
        </CardBody>
      </Card>
      <Card style={{width: "20rem"}}>
        <img
          style={{height: "180px", width: "100%", display: "block"}}
          className={classes.imgCardTop}
          src={imageCard2}
          alt="Card-img-cap"
        />
        <CardBody>
          <h4 className={classes.cardTitle}>Indywidualna dieta</h4>
          <p>
              Erant harum noster ei sea, in modo nominavi per. Ne primis pertinacia mei, 
             diceret tractatos honestatis et eam, mel erant possit verear ut.
          </p>
          <Dialog1/>
        </CardBody>
      </Card>
      <Card style={{width: "20rem"}}>
        <img
          style={{height: "180px", width: "100%", display: "block"}}
          className={classes.imgCardTop}
          src={imageCard3}
          alt="Card-img-cap"
        />
        <CardBody>
          <h4 className={classes.cardTitle}>Psychologiczna pomoc</h4>
          <p>
              Erant harum noster ei sea, in modo nominavi per. Ne primis pertinacia mei, 
             diceret tractatos honestatis et eam, mel erant possit verear ut.
          </p>
          <Dialog1/>
        </CardBody>
      </Card>
      <Card style={{width: "20rem"}}>
        <img
          style={{height: "180px", width: "100%", display: "block"}}
          className={classes.imgCardTop}
          src={imageCard4}
          alt="Card-img-cap"
        />
        <CardBody>
          <h4 className={classes.cardTitle}>Wsparcie i motywacja</h4>
          <p>
              Erant harum noster ei sea, in modo nominavi per. Ne primis pertinacia mei, 
             diceret tractatos honestatis et eam, mel erant possit verear ut.
          </p>
          <Dialog1/>
        </CardBody>
      </Card>
    {/* </div> */}
    </GridContainer>
    );
  }
}

export default withStyles(style)(Cards);