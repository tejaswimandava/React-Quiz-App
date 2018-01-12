import React,{Component} from 'react';
import PropTypes from 'prop-types';
import './answer.css';
import RadioButton from './../inputRadioButton/radiobutton';

class Answer extends Component {

  constructor( props ){
    super(props);
    this.state = {
     checked: false
    };

    this.selectAnswer = this.selectAnswer.bind(this);
  };

  selectAnswer(e){
    this.setState({
      checked: true
    });
    this.props.setSelectedAnswer(this.props.answerText);
  }

  render() {
		return (
		 <li className="answerOption" onClick={this.selectAnswer} value={this.props.answerText}>
      <RadioButton
        checked={this.state.checked}
        answerId={this.props.answerId}
        answerText={this.props.answerText}
      />
      <label className="radioCustomLabel" htmlFor={this.props.answerText}>
        {this.props.answerText}
      </label>
    </li>
		);
	}
}

Answer.propTypes = {
  answerId: PropTypes.number,
  answerText: PropTypes.string,
  answer: PropTypes.string,
  questionId: PropTypes.number,
  setSelectedAnswer: PropTypes.func
};

export default Answer;