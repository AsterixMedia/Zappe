import React from 'react'

import IndexPage from './pages/index'
import DefaultLayout from './layouts/default'
import Head from './components/Head'

class App extends React.Component {
  render = () =>
    <div>
      <Head />
      <DefaultLayout component={IndexPage} path='/' title='Index' />
    </div>
}

export default App
