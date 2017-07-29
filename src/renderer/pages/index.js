import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Button from 'material-ui/Button'
import { push } from 'react-router-redux'

import { store } from '../libs'
import Score from '../components/Score'
import { add, minus } from '../actions'

const mapStateToProps = state => ({
  score: state.example.score
})

const mapDispatchToProps = { add, minus }

@connect(mapStateToProps, mapDispatchToProps)
class IndexPage extends React.Component {
  static propTypes = {
    score: PropTypes.number,
    add: PropTypes.func,
    minus: PropTypes.func
  }

  goToAboutPage = () => {
    store.dispatch(push('/about'))
  }

  render = () =>
    <div>
      <Score
        score={this.props.score}
        add={this.props.add}
        minus={this.props.minus} />
      <Button onClick={this.goToAboutPage}>About Page</Button>
    </div>
}

export default IndexPage
