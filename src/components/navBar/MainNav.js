import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));

export default function MainNav(props) {
  const classes = useStyles();
  console.log("----------------hell from mainnav:::", props);
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <Link to="/" style={{ textDecorationLine: "none", color: "white" }}>
              {" "}
              News
            </Link>
          </Typography>
          <Button
            color="inherit"
            // onClick={() => props.history.push("/login")}
          >
            <Link
              to="/login"
              style={{ textDecorationLine: "none", color: "white" }}
            >
              Login
            </Link>
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
