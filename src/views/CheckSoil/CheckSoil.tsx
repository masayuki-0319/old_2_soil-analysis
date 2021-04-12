import React, { useState, useContext } from "react";
import { useStyles } from "./CheckSoilStyle";
import Grid from "@material-ui/core/Grid";
import Stepper from "../components/Stepper";

import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import MenuItem from "@material-ui/core/MenuItem";
import fieldMasterData from "../master_data/fieldMasterData";
import soilTypes from "../master_data/soilTypes";
import { AppContext } from "../../contexts/AppContext";

const initialProps = {
  labelWidth: 0,
};

const CheckSoil: React.FC = () => {
  const { labelWidth } = initialProps;
  const classes = useStyles();
  const steps: string[] = [
    "ほ場データの入力",
    "土壌分析結果の入力",
    "診断結果",
  ];
  const selectFieldTypes: [number, string][] = fieldMasterData.map((hash) => [
    hash["id"],
    hash["field_type"],
  ]);
  const selectSoilTypes: [number, string][] = soilTypes.map((hash) => [
    hash["id"],
    hash["name"],
  ]);

  const { analysisResultState, dispatch } = useContext(AppContext);

  const [activeStep, setActiveStep] = useState<number>(0);

  const inputEvent = (
    event: React.ChangeEvent<{ name?: string | undefined; value: unknown }>
  ) => {
    event.preventDefault();
    const name = event.target.name;
    const value = event.target.value;
    dispatch({
      type: "INPUT_EVENT",
      payload: {
        name: name as string,
        value: value as number,
      },
    });
  };

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
                  <Paper className={classes.paper}>
                    <div>
                      <div style={{ marginBottom: 32 }}>
                        <Typography
                          variant="subtitle1"
                          style={{ fontWeight: "bold" }}
                          gutterBottom
                        >
                          ほ場データ入力
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                          ※この画面の入力データを元にしてマスタデータを選択する。
                        </Typography>
                      </div>
                      <div style={{ marginBottom: 16 }}>
                        <Typography
                          style={{
                            textTransform: "uppercase",
                            marginBottom: 20,
                          }}
                          color="secondary"
                          gutterBottom
                        >
                          ほ場の種類
                        </Typography>
                        <FormControl
                          variant="outlined"
                          className={classes.formControl}
                        >
                          <Select
                            value={analysisResultState.fieldType}
                            onChange={(e) => inputEvent(e)}
                            input={
                              <OutlinedInput
                                labelWidth={labelWidth}
                                name="fieldType"
                              />
                            }
                          >
                            {selectFieldTypes.map(
                              (row: [number, string], index: number) => (
                                <MenuItem key={index} value={row[0]}>
                                  {row[1]}
                                </MenuItem>
                              )
                            )}
                          </Select>
                        </FormControl>
                      </div>
                      <div style={{ marginBottom: 16 }}>
                        <Typography
                          style={{
                            textTransform: "uppercase",
                            marginBottom: 20,
                          }}
                          color="secondary"
                          gutterBottom
                        >
                          土壌の種類
                        </Typography>
                        <FormControl
                          variant="outlined"
                          className={classes.formControl}
                        >
                          <Select
                            value={analysisResultState.soilType}
                            onChange={(e) => inputEvent(e)}
                            input={
                              <OutlinedInput
                                labelWidth={labelWidth}
                                name="soilType"
                              />
                            }
                          >
                            {selectSoilTypes.map(
                              (row: [number, string], index: number) => (
                                <MenuItem key={index} value={row[0]}>
                                  {row[1]}
                                </MenuItem>
                              )
                            )}
                          </Select>
                        </FormControl>
                      </div>
                    </div>
                  </Paper>
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
