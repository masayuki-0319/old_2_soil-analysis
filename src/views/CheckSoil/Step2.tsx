import {
  FormControl,
  Grid,
  InputAdornment,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";
import { ClassNameMap } from "@material-ui/core/styles/withStyles";
import React, { useContext } from "react";
import { AppContext } from "../../contexts/AppContext";
interface Props {
  classes: ClassNameMap<string>;
}

const Step2: React.FC<Props> = (props) => {
  const { classes } = props;

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
    <Paper className={classes.paper}>
      <div className={classes.topInfo}>
        <div>
          <Typography
            variant="subtitle1"
            style={{ fontWeight: "bold" }}
            gutterBottom
          >
            土壌分析結果入力
          </Typography>
          <Typography variant="body1" gutterBottom>
            ※ 分析機器による土壌サンプルの分析結果を入力する。
          </Typography>
        </div>
      </div>
      <div>
        <Grid>
          <FormControl variant="outlined" className={classes.formControl}>
            <TextField
              type="number"
              name="phResult"
              value={analysisResultState.phResult}
              onChange={inputEvent}
              label="pH ( H2O )"
              variant="outlined"
            />
          </FormControl>
        </Grid>
        <Grid>
          <FormControl variant="outlined" className={classes.formControl}>
            <TextField
              type="number"
              name="ecResult"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">ms/cm</InputAdornment>
                ),
              }}
              value={analysisResultState.ecResult}
              onChange={inputEvent}
              label="EC"
              variant="outlined"
            />
          </FormControl>
        </Grid>
        <Grid>
          <FormControl variant="outlined" className={classes.formControl}>
            <TextField
              type="number"
              name="caoResult"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">mg/100g</InputAdornment>
                ),
              }}
              value={analysisResultState.caoResult}
              onChange={inputEvent}
              label="CaO ( 交換性カルシウム )"
              variant="outlined"
            />
          </FormControl>
        </Grid>
        <Grid>
          <FormControl variant="outlined" className={classes.formControl}>
            <TextField
              type="number"
              name="mgoResult"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">mg/100g</InputAdornment>
                ),
              }}
              value={analysisResultState.mgoResult}
              onChange={inputEvent}
              label="MgO ( 交換性マグネシウム )"
              variant="outlined"
            />
          </FormControl>
        </Grid>
        <Grid>
          <FormControl variant="outlined" className={classes.formControl}>
            <TextField
              type="number"
              name="k2oResult"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">mg/100g</InputAdornment>
                ),
              }}
              value={analysisResultState.k2oResult}
              onChange={inputEvent}
              label="K2O ( 交換性カリウム )"
              variant="outlined"
            />
          </FormControl>
        </Grid>
        <Grid>
          <FormControl variant="outlined" className={classes.formControl}>
            <TextField
              type="number"
              name="p2o5Result"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">mg/100g</InputAdornment>
                ),
              }}
              value={analysisResultState.p2o5Result}
              onChange={inputEvent}
              label="P2O5 ( 有効態リン酸 )"
              variant="outlined"
            />
          </FormControl>
        </Grid>
        <Grid>
          <FormControl variant="outlined" className={classes.formControl}>
            <TextField
              type="number"
              name="no3nResult"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">mg/100g</InputAdornment>
                ),
              }}
              value={analysisResultState.no3nResult}
              onChange={inputEvent}
              label="NO3-N ( 硝酸態窒素 )"
              variant="outlined"
            />
          </FormControl>
        </Grid>
      </div>
    </Paper>
  );
};

export default Step2;
