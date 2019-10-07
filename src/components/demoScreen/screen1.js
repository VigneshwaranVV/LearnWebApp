import React, { Component } from "react";
import RecipeReviewCard from "./card";

import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    justifyContent: 'center',
    padding:"10px",
  },
  paper: {
    // padding: theme.spacing(2),
    textAlign: "center"
    // color: theme.palette.text.secondary
  }
}));

function Screen1() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={1} className={classes.root}>
        <Grid item >
          <RecipeReviewCard imgSrc="https://analyticsindiamag.com/wp-content/uploads/2018/02/iris.jpg"/>
        </Grid>
        <Grid item >
          <RecipeReviewCard imgSrc="https://ik.imagekit.io/bfrs/tr:w-950,h-959,pr-true,cm-pad_resize,bg-FFFFFF/image_sahejsuits/data/FLOWER-02.jpg"/>
        </Grid>
        <Grid item >
          <RecipeReviewCard imgSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnnuD1WPi40dxk5tMj86sU1RJD4WB3WLTHYf-2gjWUMGahWAKG"/>
        </Grid>
        <Grid item >
          <RecipeReviewCard imgSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnnuD1WPi40dxk5tMj86sU1RJD4WB3WLTHYf-2gjWUMGahWAKG"/>
        </Grid>
        <Grid item >
          <RecipeReviewCard imgSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnnuD1WPi40dxk5tMj86sU1RJD4WB3WLTHYf-2gjWUMGahWAKG"/>
        </Grid>
        <Grid item >
          <RecipeReviewCard imgSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnnuD1WPi40dxk5tMj86sU1RJD4WB3WLTHYf-2gjWUMGahWAKG"/>
        </Grid>
      </Grid>
    </div>
  );
}

export default Screen1;
