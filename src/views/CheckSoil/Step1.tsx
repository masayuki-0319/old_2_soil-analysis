import React, { useContext } from "react";

import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import MenuItem from "@material-ui/core/MenuItem";
import fieldMasterData from "../master_data/fieldMasterData";
import soilTypes from "../master_data/soilTypes";
import { AppContext } from "../../contexts/AppContext";
import { ClassNameMap } from "@material-ui/core/styles/withStyles";

interface Props {
  classes: ClassNameMap<string>;
}

const Step1: React.FC<Props> = (props) => {
  const { classes } = props;

  const selectFieldTypes: [number, string][] = fieldMasterData.map((hash) => [
    hash["id"],
    hash["field_type"],
  ]);

  const selectSoilTypes: [number, string][] = soilTypes.map((hash) => [
    hash["id"],
    hash["name"],
  ]);

  const { analysisResultState, dispatch } = useContext(AppContext);

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
            <FormControl variant="outlined" className={classes.formControl}>
              <Select
                value={analysisResultState.fieldType}
                onChange={(e) => inputEvent(e)}
                input={<OutlinedInput name="fieldType" />}
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
            <FormControl variant="outlined" className={classes.formControl}>
              <Select
                value={analysisResultState.soilType}
                onChange={(e) => inputEvent(e)}
                input={<OutlinedInput name="soilType" />}
              >
                {selectSoilTypes.map((row: [number, string], index: number) => (
                  <MenuItem key={index} value={row[0]}>
                    {row[1]}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
        </div>
      </Paper>
    </>
  );
};

export default Step1;
