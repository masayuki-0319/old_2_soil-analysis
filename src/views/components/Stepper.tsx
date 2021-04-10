import React from "react";
import MuiStepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";

interface StepperProps {
  steps: string[];
  activeStep: number;
  style: string;
}

const Stepper: React.FC<StepperProps> = (props) => {
  const { steps, activeStep, style } = props;
  return (
    <>
      <MuiStepper
        classes={{ root: style }}
        activeStep={activeStep}
        alternativeLabel
      >
        {steps.map((label) => {
          return (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          );
        })}
      </MuiStepper>
    </>
  );
};

export default Stepper;
