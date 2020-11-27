import React from "react";
import PropTypes from 'prop-types';

const FeedbackOptions = ({options, onLeaveFeedback}) => {
  return (
    <div onClick = {onLeaveFeedback}>
      <button type="button" onClick={onLeaveFeedback.good}>
        {options.GOOD}
      </button>

      <button type="button" onClick={onLeaveFeedback.neutral}>
      {options.NEUTRAL}
      </button>

      <button type="button" onClick={onLeaveFeedback.bad}>
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
