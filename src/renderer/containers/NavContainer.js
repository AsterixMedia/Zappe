import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import NavBar from '../components/NavBar'
import NavDrawer from '../components/NavDrawer'

import { toggleDrawer, closeDrawer } from '../actions/UiActions'

const mapStateToProps = state => ({
  isDrawerOpen: state.ui.drawerOpen
})

const mapDispatchToProps = {
  toggleDrawer,
  closeDrawer
}

@connect(mapStateToProps, mapDispatchToProps)
class NavContainer extends React.Component {
  static propTypes = {
    toggleDrawer: PropTypes.func,
    closeDrawer: PropTypes.func,
    isDrawerOpen: PropTypes.bool
  }

  render = () =>
    <div>
      <NavBar onMenuPress={this.props.toggleDrawer} />
      <NavDrawer
        open={this.props.isDrawerOpen}
        handleClosing={this.props.closeDrawer} />
    </div>
}

export default NavContainer
