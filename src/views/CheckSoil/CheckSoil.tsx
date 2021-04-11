import React, { useState } from "react";
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

interface CheckSoilProps {
  labelWidth: number;
}

interface inputProps {
  soilType: number;
  fieldType: number;
  phResult: number;
  ecResult: number;
  caoResult: number;
  mgoResult: number;
  k2oResult: number;
  p2o5Result: number;
  no3nResult: number;
}

const initialProps = {
  labelWidth: 0,
};

const initialState: inputProps = {
  soilType: 1,
  fieldType: 1,
  phResult: 5.3,
  ecResult: 0.62,
  caoResult: 248,
  mgoResult: 13,
  k2oResult: 98,
  p2o5Result: 59,
  no3nResult: 1.0,
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

  const [activeStep, setActiveStep] = useState<number>(0);
  const [form, setForm] = useState<inputProps>(initialState);

  const handleChange = (
    event: React.ChangeEvent<{ name?: string | undefined; value: unknown }>
  ) => {
    setForm((prevForm) => ({
      ...prevForm,
      [event.target.name as string]: event.target.value,
    }));
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
                          ※
                          この画面の入力データを元にしてマスタデータを選択する。
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
                            value={form.fieldType}
                            onChange={handleChange}
                            input={
                              <OutlinedInput
                                labelWidth={labelWidth}
                                name="fieldType"
                              />
                            }
                          >
                            {selectFieldTypes.map((row: [number, string], index: number) => (
                              <MenuItem key={index} value={row[0]}>{row[1]}</MenuItem>
                            ))}
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
                            value={form.soilType}
                            onChange={handleChange}
                            input={
                              <OutlinedInput
                                labelWidth={labelWidth}
                                name="soilType"
                              />
                            }
                          >
                            {selectSoilTypes.map((row: [number, string], index: number) => (
                              <MenuItem key={index} value={row[0]}>{row[1]}</MenuItem>
                            ))}
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

// CheckSoil.defaultProps = initialProps;

export default CheckSoil;
