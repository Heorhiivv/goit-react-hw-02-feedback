import React from "react";
import PropTypes from 'prop-types';

const FeedbackOptions = ({options, onLeaveFeedback}) => {
  return (
    <div onClick = {onLeaveFeedback}>
      <button type="button">
        {options.GOOD}
      </button>

      <button type="button">
      {options.NEUTRAL}
      </button>

      <button type="button">
        {options.BAD}
      </button>
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.object.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired
}

export default FeedbackOptions
