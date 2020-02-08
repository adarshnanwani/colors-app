import React from "react";
import { withStyles } from "@material-ui/styles";

const styles = {
  main: {
    backgroundColor: "purple",
    border: "3px solid teal"
  },
  secondary: {
    backgroundColor: "pink",
    color: '#fff'
  }
};

const MiniPalette = props => {
  const {classes} = props;
  return (
    <div className={classes.main}>
      <h1>Mini Palette</h1>
      <section className={classes.secondary}>dsfdgdgfgddfg</section>
    </div>
  );
};

export default withStyles(styles)(MiniPalette);
