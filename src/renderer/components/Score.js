import React from 'react'
import PropTypes from 'prop-types'
import Button from 'material-ui/Button'
import Typography from 'material-ui/Typography'

const Score = ({score, add, minus}) =>
  <div>
    <Typography type='display4' gutterBottom>
      Score: {score}
    </Typography>
    <Button onClick={add}>Add +</Button>
    <Button onClick={minus}>Minus -</Button>
  </div>

Score.propTypes = {
  score: PropTypes.number,
  add: PropTypes.func,
  minus: PropTypes.func
}

export default Score
