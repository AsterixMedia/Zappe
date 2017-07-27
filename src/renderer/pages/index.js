import React from 'react'
import PropTypes from 'prop-types'
import Score from '../components/Score'
import { connect} from 'react-redux'

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

  render = () =>
    <Score
      score={this.props.score}
      add={this.props.add}
      minus={this.props.minus} />
}
export default IndexPage
