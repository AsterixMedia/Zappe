import React from 'react'
import { Helmet } from 'react-helmet'

const Head = () =>
  <Helmet
    defaultTitle='Zappe'
    titleTemplate='%s - Zappe'>
    <link
      href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons'
      rel='stylesheet'
      type='text/css' />
  </Helmet>

export default Head
