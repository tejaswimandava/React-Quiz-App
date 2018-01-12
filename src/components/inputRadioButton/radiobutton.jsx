import React from 'react';
import PropTypes from 'prop-types';
import './radiobutton.css';

function RadioButton(props) { 

  return (
      <input
        type="radio"
        className="radioCustomButton"
        name="radioGroup"
        checked={props.checked}
        id={props.answerId}
        value={props.answerText}
      />
  );

}

RadioButton.propTypes = {
  answerId: PropTypes.number,
  answerText: PropTypes.string,
  checked: PropTypes.bool
};

export default RadioButton;