import React from 'react';
import PropTypes from 'prop-types';
import './question.css';

function Question(props) {

  return (
    <div className="question">
        <h2>{props.content}</h2>
    </div>
  );

}

Question.propTypes = {
  content: PropTypes.string
};

export default Question;