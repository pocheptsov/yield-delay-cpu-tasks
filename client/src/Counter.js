import * as React from 'react'
import PropTypes from 'prop-types'

const Counter = ({ value, onIncrementAsync }) => (
  <p>
    <input />
    <br />
    Clicked: {value} times
    <br />
    <button onClick={onIncrementAsync}>Increment async</button>
  </p>
)

Counter.propTypes = {
  value: PropTypes.number.isRequired,
  onIncrementAsync: PropTypes.func.isRequired,
}

export default Counter
