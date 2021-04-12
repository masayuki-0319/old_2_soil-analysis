import React, { useState } from "react";
import { useStyles } from "./CheckSoilStyle";
import Grid from "@material-ui/core/Grid";
import Stepper from "../components/Stepper";
import Step1 from "./Step1";

const CheckSoil: React.FC = () => {
  const classes = useStyles();
  const steps: string[] = [
    "ほ場データの入力",
    "土壌分析結果の入力",
    "診断結果",
  ];

  const [activeStep, setActiveStep] = useState<number>(0);

  return (
    <>
      <div className={classes.root}>
        <Grid container justify="center">
          <Grid
            spacing={10}
            alignItems="center"
            justify="center"
            container
            className={classes.grid}
          >
            <Grid item xs={12}>
              <div className={classes.stepContainer}>
                <div className={classes.bigContainer}>
                  <Stepper
                    steps={steps}
                    activeStep={activeStep}
                    style={classes.stepper}
                  />
                </div>
                <div className={classes.smallContainer}>
                  <Step1 classes={classes} />
                </div>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default CheckSoil;
