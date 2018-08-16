import React from "react";
// react component for creating beautiful carousel
import Carousel from "react-slick";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
import LocationOn from "@material-ui/icons/LocationOn";
// core components
import GridContainer from "../Grid/GridContainer.jsx";
import GridItem from "../Grid/GridItem.jsx";
import Card from "../Card/Card.jsx";
import carouselStyle from "../../assets/jss/material-kit-react/views/components-sections/carouselStyle.jsx";
import image1 from "../../assets/img/photos/hires_1.JPG";
import image2 from "../../assets/img/photos/hires_2.JPG";
import image3 from "../../assets/img/photos/hires_3.JPG";
//import classess from './Carousel.css';

class SectionCarousel extends React.Component {
  render() {
    const { classes } = this.props;
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false
    };
    return (
      <div className={classes.section}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={8} className={classes.marginAuto}>
              <Card carousel>
                <Carousel {...settings}>
                  <div>
                    <img
                      src={image1}
                      alt="First slide"
                      className="slick-image"
                    />
                    <div className="slick-caption">
                      <h4>
                        {/* <LocationOn className="slick-icons" />Lorem Ipsum Dolor */}
                        <p />Lorem Ipsum Dolor
                      </h4>
                    </div>
                  </div>
                  <div>
                    <img
                      src={image2}
                      alt="Second slide"
                      className="slick-image"
                    />
                    <div className="slick-caption">
                      <h4>
                        <p />In sit vocibus gloriatur
                        {/* <LocationOn className="slick-icons" />In sit vocibus gloriatur */}
                      </h4>
                    </div>
                  </div>
                  <div>
                    <img
                      src={image3}
                      alt="Third slide"
                      className="slick-image"
                    />
                    <div className="slick-caption">
                      <h4>
                        {/* <LocationOn className="slick-icons" />Vis periculis prodesset et */}
                        <p />Vis periculis prodesset et
                      </h4>
                    </div>
                  </div>
                </Carousel>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    );
  }
}

export default withStyles(carouselStyle)(SectionCarousel);
