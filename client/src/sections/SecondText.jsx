import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons

// core components
import GridContainer from "../components/Grid/GridContainer.jsx";
import GridItem from "../components/Grid/GridItem.jsx";
import SectionCarousel from '../components/Carousel/SectionCarousel.jsx';
import Button from '../components/CustomButtons/Button.jsx';

import completedStyle from "../assets/jss/material-kit-react/views/components-sections/completedStyle.jsx";
import { container } from "../assets/jss/material-kit-react";

class SectionCompletedExamples extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <div className={container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={8}>
              <h2>Zadbaj o swoje zdrowie</h2>
              <h4>
              Temporibus autem quibusdam et aut 
              officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates 
              repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur 
              a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur
              aut perferendis doloribus asperiores repellat.
              </h4>              
            </GridItem>
            <GridItem xs={12} sm={12} md={8}>
              <SectionCarousel/>   
            </GridItem>
          </GridContainer>
        </div>
      </div>
    );
  }
}

export default withStyles(completedStyle)(SectionCompletedExamples);
