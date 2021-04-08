import React from "react";
import withStyles, { WithStyles } from "@material-ui/core/styles/withStyles";
import { classes } from "./CheckSoilStyle";

interface CheckSoilProps extends WithStyles<typeof classes> {}

const CheckSoil: React.FC<CheckSoilProps> = (props) => {
  const { classes } = props;
  return (
    <>
      <div className={classes.root}></div>
    </>
  );
};

export default withStyles(classes)(CheckSoil);
