import React from 'react'

import IndexPage from './pages/index'
import DefaultLayout from './layouts/default'

export default class App extends React.Component {
  render = () =>
    <div>
      <DefaultLayout component={IndexPage} path='/' />
    </div>
}
