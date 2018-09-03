import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import image1 from '../assets/img/photos/3.JPG';
import image2 from '../assets/img/photos/2.JPG';
import image3 from '../assets/img/photos/1.JPG';

const styles = theme => ({
  root: {
    width: '90%',
  },
  button: {
    marginTop: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  actionsContainer: {
    marginBottom: theme.spacing.unit * 2,
  },
  resetContainer: {
    padding: theme.spacing.unit * 3,
  },
});

function getSteps() {
    const step1 = 'W jaki sposób będzie przebiegać pierwsza wizyta u dietetyka?';
    const step2 = 'Czy dietę otrzymam od razu na pierwszej wizycie?';
    const step3 = 'Jak często musisz odwiedzać dietetyka?';
    const step4 = 'Czego mogę spodziewać się na wizycie kontrolnej?';
    const step5 = 'Jak wygląda przygotowany program dietetyczny?';
    const step6 = 'Czy ustalona dieta jest trudna w realizacji?';

  return [step1, step2, step3, step4, step5, step6];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return (
            <div>
                <p>
                    Lorem ipsum dolor sit amet, mundi antiopam ex usu, nam diam theophrastus definitionem ne. 
                    Vitae dolores similique id usu, his te suas detraxit. Vis eirmod voluptatum te. Posse
                    atqui ut eum, ex has persius facilisi quaestio. Stet simul recteque mei ei, eos solum
                    appareat lobortis in. Diceret accommodare has no. Amet placerat sit cu, mel ut illum 
                    urbanitas democritum.
                </p>
                <img
                    style={{display: "block", borderRadius: "8px", 
                    marginLeft: "auto",
                    marginRight: "auto",
                    width: "50%"}}
                    src={image1}
                    alt="Card-img-cap"
                />
            </div>     
            )
    case 1:
      return (
        <div>
        <p>
            Lorem ipsum dolor sit amet, mundi antiopam ex usu, nam diam theophrastus definitionem ne. 
            Vitae dolores similique id usu, his te suas detraxit. Vis eirmod voluptatum te. Posse
            atqui ut eum, ex has persius facilisi quaestio. Stet simul recteque mei ei, eos solum
            appareat lobortis in. Diceret accommodare has no. Amet placerat sit cu, mel ut illum 
            urbanitas democritum.
        </p>
        <img
            style={{display: "block", borderRadius: "8px", 
            marginLeft: "auto",
            marginRight: "auto",
            width: "50%"}}
            src={image2}
            alt="Card-img-cap"
        />
    </div>   )
    case 2:
      return (
            <div>
                <p>
                Lorem ipsum dolor sit amet, mundi antiopam ex usu, nam diam theophrastus definitionem ne. 
                Vitae dolores similique id usu, his te suas detraxit. Vis eirmod voluptatum te. Posse
                atqui ut eum, ex has persius facilisi quaestio. Stet simul recteque mei ei, eos solum
                appareat lobortis in. Diceret accommodare has no. Amet placerat sit cu, mel ut illum 
                urbanitas democritum.
                </p>
                <img
                    style={{display: "block", borderRadius: "8px", 
                    marginLeft: "auto",
                    marginRight: "auto",
                    width: "50%"}}
                    src={image3}
                    alt="Card-img-cap"
                />
            </div>   
            )
    default:
      return 'Dowolna treść';
  }
}

class VerticalLinearStepper extends React.Component {
  state = {
    activeStep: 0,
  };

  handleNext = () => {
    this.setState(state => ({
      activeStep: state.activeStep + 1,
    }));
  };

  handleBack = () => {
    this.setState(state => ({
      activeStep: state.activeStep - 1,
    }));
  };

  handleReset = () => {
    this.setState({
      activeStep: 0,
    });
  };

  render() {
    const { classes } = this.props;
    const steps = getSteps();
    const { activeStep } = this.state;

    return (
      <div className={classes.root}>
        <Stepper activeStep={activeStep} orientation="vertical">
          {steps.map((label, index) => {
            return (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
                <StepContent>
                  <Typography>{getStepContent(index)}</Typography>
                  <div className={classes.actionsContainer}>
                    <div>
                      <Button
                        disabled={activeStep === 0}
                        onClick={this.handleBack}
                        className={classes.button}
                      >
                        Wstecz
                      </Button>
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={this.handleNext}
                        className={classes.button}
                      >
                        {activeStep === steps.length - 1 ? 'Zakończ' : 'Następny'}
                      </Button>
                    </div>
                  </div>
                </StepContent>
              </Step>
            );
          })}
        </Stepper>
        {activeStep === steps.length && (
          <Paper square elevation={0} className={classes.resetContainer}>
            <Typography>Tekst końcowy</Typography>
            <Button onClick={this.handleReset} className={classes.button}>
              Początek
            </Button>
          </Paper>
        )}
      </div>
    );
  }
}

VerticalLinearStepper.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(styles)(VerticalLinearStepper);
