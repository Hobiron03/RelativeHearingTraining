import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  header: {
    padding: 20,
  },
  title: {
    display: "flex",
    marginLeft: 50,
    fontWeight: "bold",
    width: "50%",
  },
}));
const Header = (): JSX.Element => {
  const classes = useStyles();

  return (
    <div>
      <AppBar position="static" color="secondary" className={classes.header}>
        <Typography variant="h6" className={classes.title}>
          相対音感トレーニング（β版）
        </Typography>
      </AppBar>
    </div>
  );
};

export default Header;
