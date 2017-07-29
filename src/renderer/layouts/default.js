import React from 'react'
import Route from 'react-router-dom/Route'
import { Helmet } from 'react-helmet'
import PropTypes from 'prop-types'

import NavContainer from '../containers/NavContainer'

const DefaultLayout = ({title, component: Component, ...rest}) =>
  <Route {...rest} render={matchProps => (
    <div className='DefaultLayout'>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <NavContainer />
      <Component {...matchProps} />
      <div className='Footer'>Footer</div>
    </div>
  )} />

DefaultLayout.propTypes = {
  component: PropTypes.func,
  title: PropTypes.string
}

export default DefaultLayout
