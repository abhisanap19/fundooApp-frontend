import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';


class PersistentDrawer extends React.Component {
  state = {
    open: false,
  };
  handleToggle = () => {
    this.setState(state => ({ open: !state.open }));
  };
  render() {
    const { open } = this.state;
    return (
      <div className="root">
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={this.handleToggle}
              className="menuButton"
            >
              <MenuIcon />
            </IconButton>
           
        <Drawer
          variant="persistent"
          anchor="left"
          open={open}
          className="drawerPaper"
        >

          <List>
            {['Notes', 'Reminders'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
          <Divider/>
          <List>
          <List>
            {['Edit labels'].map((text, index) =>(
              <ListItem button key={text}>
                <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
          <Divider/>
          </List>
          <List>
            {['Archive', 'Bin'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </Drawer> 
      </div>
    );
  }
}


export default(PersistentDrawer);
