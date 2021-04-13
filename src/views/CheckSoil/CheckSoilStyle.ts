import makeStyles from "@material-ui/core/styles/makeStyles";
import createStyles from "@material-ui/core/styles/createStyles";
import { themeType } from "../../_theme";

export const useStyles = makeStyles((theme: themeType) =>
  createStyles({
    root: {
      flexGrow: 1,
      overflow: "hidden",
      backgroundSize: "cover",
      backgroundPosition: "0 400px",
      marginTop: 10,
      padding: 20,
      paddingBottom: 200,
    },
    grid: {
      margin: `0 ${theme.spacing(2)}px`,
    },
    smallContainer: {
      width: "60%",
    },
    bigContainer: {
      width: "80%",
    },
    stepContainer: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    stepGrid: {
      width: "80%",
    },
    backButton: {
      marginRight: theme.spacing(1),
    },
    outlinedButtom: {
      textTransform: "uppercase",
      margin: theme.spacing(1),
    },
    stepper: {
      backgroundColor: "transparent",
    },
    paper: {
      padding: theme.spacing(3),
      textAlign: "left",
      color: theme.palette.text.secondary,
      width: "60%",
    },
    topInfo: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 42,
    },
    formControl: {
      width: "50%",
      marginBottom: "20px",
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
    borderColumn: {
      borderBottom: `1px solid ${theme.palette.grey["100"]}`,
      paddingBottom: 24,
      marginBottom: 24,
    },
    flexBar: {
      marginTop: 32,
      display: "flex",
      justifyContent: "center",
    },
  })
);
