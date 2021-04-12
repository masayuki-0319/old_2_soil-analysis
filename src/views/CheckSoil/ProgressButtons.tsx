import { Button } from "@material-ui/core";
import { ClassNameMap } from "@material-ui/core/styles/withStyles";
import React from "react";

interface Props {
  classes: ClassNameMap<string>;
  activeStep: number;
  incrementStep: () => void;
  decrementStep: () => void;
}

const ProgressButtons: React.FC<Props> = (props) => {
  const { classes, activeStep, incrementStep, decrementStep } = props;
  return (
    <>
      <Button
        className={classes.backButton}
        size="large"
        onClick={incrementStep}
        disabled={activeStep === 0}
      >
        戻る
      </Button>
      <Button
        variant="contained"
        color="secondary"
        size="large"
        onClick={decrementStep}
        disabled={activeStep === 2}
      >
        {activeStep === 2 ? "終了" : "次へ進む"}
      </Button>
    </>
  );
};

export default ProgressButtons;
