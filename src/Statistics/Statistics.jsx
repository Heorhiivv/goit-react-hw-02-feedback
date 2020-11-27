import React, {Component} from "react";
import PropTypes from 'prop-types'

class Statistics extends Component { 
  static defaultProps = {}
  static propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired
  }

  render() {
    return (
        <ul>
          <li>Good: {this.props.good}</li>
          <li>Neutral:{this.props.neutral}</li>
          <li>Bad:{this.props.bad}</li>
          <li>Total:{this.props.total()}</li>
          <li>Feedback:{this.props.positivePercentage()}%</li>
        </ul>
    )
  }
}

export default Statistics