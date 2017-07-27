import React from 'react'
import Route from 'react-router-dom/Route'
import { Helmet } from 'react-helmet'
import PropTypes from 'prop-types'

const DefaultLayout = ({title, component: Component, ...rest}) => {
  return (
    <Route {...rest} render={matchProps => (
      <div className='DefaultLayout'>
        <Helmet>
          <title>{title}</title>
        </Helmet>
        <div className='Header'>Header</div>
        <Component {...matchProps} />
        <div className='Footer'>Footer</div>
      </div>
    )} />
  )
}

DefaultLayout.propTypes = {
  component: PropTypes.func,
  title: PropTypes.string
}

export default DefaultLayout
