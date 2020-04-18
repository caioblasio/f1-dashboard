import React from "react";
import Typography from "@material-ui/core/Typography";
import useStyles from "./styles";
import Grid from "@material-ui/core/Grid";

const Home = () => {
  const classes = useStyles();

  return (
    <Grid container spacing={5} className={classes.root} component="section">
      <Grid item xs={12}>
        <Typography variant="h4" component="h1">
          F1 Dashboard
        </Typography>
      </Grid>
    </Grid>
  );
};
export default Home;
