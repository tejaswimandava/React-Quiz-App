import React from 'react';
import PropTypes from 'prop-types';
import './result.css';

function Result(props) {

  return (
    <div className="resultContainer">
      <h2>Assesment Results</h2>
      <div className="resultText">
       {props.correctAnswersCount} <span>Correctly Answered out of </span>{props.totalCount}
      </div>
    </div>
  );

}

Result.propTypes = {
  totalCount: PropTypes.number,
  correctAnswersCount: PropTypes.number
};

export default Result;