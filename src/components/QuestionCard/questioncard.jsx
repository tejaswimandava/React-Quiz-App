import React,{Component} from 'react';
import QuestionCount from './../questioncount/questioncount';
import Question from './../question/question';
import Answer from './../answer/answer';
import PropTypes from 'prop-types';
import './questioncard.css';

class QuestionCard extends Component {

  constructor( props ){
    super(props);
    this.state = {
     checked: false,
     selectedAnswer: null
    };

    this.submitQuestion = this.submitQuestion.bind(this);
    this.setSelectedAnswer = this.setSelectedAnswer.bind(this);
    this.renderAnswerOptions = this.renderAnswerOptions.bind(this);
    this.getBackButton = this.getBackButton.bind(this);
  };

  setSelectedAnswer(value){
    this.setState({
        selectedAnswer:value
    });
  };

  submitQuestion(){
     this.props.updateAnswersCount(this.state.selectedAnswer && this.state.selectedAnswer === this.props.question.answer);
  }

  renderAnswerOptions(answer,index) {
        return (
        <Answer
            answerId={answer.id}
            key={answer.id}
            answerText={answer.text}
            answer={this.props.question.answer}
            questionId={this.props.questionId}
            setSelectedAnswer={this.setSelectedAnswer}
        />
        );
    };

    getBackButton(){
     if(this.props.questionId){
        return(
            <div className="backButton" onClick={this.props.handleBackNavigation}></div>
        );
     }
    };

   render() {
    return (
        <div key={this.props.questionId} className='container'>
            {this.getBackButton()}
            <QuestionCount
            counter={this.props.questionId}
            total={this.props.questionTotal}
            />
            <Question content={this.props.question.question} />
            <ul className="answers">
            {this.props.question.answers.map(this.renderAnswerOptions)}
            </ul>
            <div className="buttonContainer">
                <input
                    type="button"
                    className="customButton"
                    name="Next"
                    value="Next"
                    onClick={this.submitQuestion}
                />
            </div>
        </div>
    );
   }
};

QuestionCard.propTypes = {
  question: PropTypes.object,
  questionId: PropTypes.number,
  questionTotal: PropTypes.number,
  updateAnswersCount: PropTypes.func,
  handleBackNavigation: PropTypes.func
};

export default QuestionCard;