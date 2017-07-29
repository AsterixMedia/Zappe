import React from 'react'
import PropTypes from 'prop-types'
import Drawer from 'material-ui/Drawer'
import { withStyles, createStyleSheet } from 'material-ui/styles'
import List, { ListItem, ListItemText } from 'material-ui/List'
// import Divider from 'material-ui/Divider'

const styles = createStyleSheet('NavDrawer', {
  list: {
    width: 250,
    flex: 'initial'
  }
})

const navList = (
  <div>
    <ListItem button>
      <ListItemText primary='Test' />
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
