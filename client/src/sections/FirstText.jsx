import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons

// core components
import GridContainer from "../components/Grid/GridContainer.jsx";
import GridItem from "../components/Grid/GridItem.jsx";

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
              <h2>Technologia BIA</h2>
              <h4>
              Et harum quidem rerum facilis est et expedita distinctio. 
              Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil 
              impedit quo minus id quod maxime placeat facere possimus, omnis voluptas 
              assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut 
              officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates 
              repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur 
              a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur
               aut perferendis doloribus asperiores repellat."
              </h4>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    );
  }
}

export default withStyles(completedStyle)(SectionCompletedExamples);
