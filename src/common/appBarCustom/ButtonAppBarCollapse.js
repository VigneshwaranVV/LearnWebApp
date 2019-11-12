import React from "react";
import { withStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { colors } from "../../components/constants/variables";

const styles = theme => ({
  buttonCollapse: {
    [theme.breakpoints.up("sm")]: {
      display: "none"
    },
    margin: "10px",
    boxShadow: "none"
  },
  paper: {
    width: '60%'
  },
  list:{
    backgroundColor: colors.fb_blue,
    height: '100%',
    color: 'white'
  }
});

function ButtonAppBarCollapse(props) {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (side, open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({ ...state, [side]: open });
  };

  const sideList = (side, drawerData) => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <List>
        {
          drawerData.map((data, index) => {
            return <ListItem button key={data.text} onClick={() => redirect(data.route)}>
              <ListItemText primary={data.text} />
            </ListItem>
          })
        }
      </List>
      <Divider />
    </div>
  );

  const { classes, drawerData, redirect } = props;
  return (
    <div className={classes.buttonCollapse}>
      <IconButton onClick={toggleDrawer('right', true)}>
        <MenuIcon style={{ color: '#fff' }} />
      </IconButton>
      <Drawer anchor="right" open={state.right} onClose={toggleDrawer('right', false)} classes={{ paper: classes.paper }}>
        {sideList("right", drawerData, redirect)}
      </Drawer>
    </div>
  );
}
export default withStyles(styles)(ButtonAppBarCollapse);
