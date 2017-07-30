import React from 'react'
import PropTypes from 'prop-types'
import createStyleSheet from 'material-ui/styles/createStyleSheet'
import withStyles from 'material-ui/styles/withStyles'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import Button from 'material-ui/Button'
import IconButton from 'material-ui/IconButton'
import MenuIcon from 'material-ui-icons/Menu'
import Link from 'react-router-dom/Link'

const styleSheet = createStyleSheet('NavBar', {
  root: {
    width: '100%'
  },
  flex: {
    flex: 1
  },
  brand: {
    textDecoration: 'inherit',
    color: 'inherit'
  }
})

const NavBar = ({classes, onMenuPress}) =>
  <div className={classes.root}>
    <AppBar position='static'>
      <Toolbar>
        <IconButton onClick={onMenuPress} color='contrast' aria-label='Menu'>
          <MenuIcon />
        </IconButton>
        <Typography
          type='title'
          className={classes.flex}
          color='inherit'>
          <Link to='/' className={classes.brand}>
            Odios
          </Link>
        </Typography>
        <Button color='contrast'>Login</Button>
      </Toolbar>
    </AppBar>
  </div>

NavBar.propTypes = {
  classes: PropTypes.object.isRequired,
  onMenuPress: PropTypes.func.isRequired
}

export default withStyles(styleSheet)(NavBar)
