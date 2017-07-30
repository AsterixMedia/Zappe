import React from 'react'
import PropTypes from 'prop-types'
import Drawer from 'material-ui/Drawer'
import { withStyles, createStyleSheet } from 'material-ui/styles'
import List, { ListItem, ListItemText, ListItemIcon } from 'material-ui/List'
import LibraryBooksIcon from 'material-ui-icons/LibraryBooks'
import Link from 'react-router-dom/Link'
// import Divider from 'material-ui/Divider'

const styles = createStyleSheet('NavDrawer', {
  list: {
    width: 250,
    flex: 'initial'
  }
})

// TODO: Implement array based navigation menu rendering
// const navItems = [
//   { name: 'Libary', to: '/libary', icon: '' }
// ]

const navList = (
  <div>
    <ListItem button component={Link} to='/library'>
      <ListItemIcon>
        <LibraryBooksIcon />
      </ListItemIcon>
      <ListItemText primary='Library' />
    </ListItem>
  </div>
)

const NavDrawer = ({open, handleClosing, classes}) =>
  <Drawer
    anchor='left'
    open={open}
    onRequestClose={handleClosing}
  >
    <List className={classes.list} >
      {navList}
    </List>
  </Drawer>

NavDrawer.propTypes = {
  open: PropTypes.bool,
  handleClosing: PropTypes.func,
  classes: PropTypes.object
}

export default withStyles(styles)(NavDrawer)
