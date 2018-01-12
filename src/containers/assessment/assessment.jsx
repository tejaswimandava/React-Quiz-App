
import React, {Component} from 'react';
import QuestionCard from './../../components/QuestionCard/questioncard';
import Questions from './../../api/quizdata';
import Result from './../../components/result/result';
import './assessment.css';

//Main container component for rendering exam

export default class Assessment extends Component {
    
    constructor( props ){
        super(props);
        this.state = {
            questionId: 0,
            question: {
                question: '',
                answers: [],
                answer: ''
            },
            questionTotal: 0,
            correctAnswersCount: 0,
            isLastQuestion: false
        };
     this.updateAnswersCount = this.updateAnswersCount.bind(this);
     this.setNextQuestion = this.setNextQuestion.bind(this);
     this.renderQuestionCard = this.renderQuestionCard.bind(this);
     this.handleBackNavigation = this.handleBackNavigation.bind(this);
    };

    setNextQuestion(){
        this.setState(function(prevState, props){
            return {questionId: prevState.questionId+ 1 }
        });

        this.setState(function(prevState, props){
            return {question: Questions[prevState.questionId] }
        });
    }

    handleBackNavigation(){
         this.setState(function(prevState, props){
            return {questionId: prevState.questionId - 1 }
        });

        this.setState(function(prevState, props){
            return {question: Questions[prevState.questionId] }
        });
    };

    updateAnswersCount(isCorrect){
        if(isCorrect){
            this.setState(function(prevState, props){
                return {correctAnswersCount: prevState.correctAnswersCount+ 1 }
            });
        }

         if (!(this.state.questionId < (Questions.length - 1))) {
             this.setState({
                 isLastQuestion: true
             });
         }
         else {
            this.setNextQuestion(); 
         }
    }

    renderQuestionCard() {
        return (
            <QuestionCard
                questionId={this.state.questionId}
                question={this.state.question}
                questionTotal={Questions.length}
                updateAnswersCount={this.updateAnswersCount}
                handleBackNavigation={this.handleBackNavigation}
            />
        );
    };


    renderResult() {
        return (
            <Result
            totalCount={Questions.length}
            correctAnswersCount={this.state.correctAnswersCount}
            />
        );
    };

    componentWillMount() {
        this.setState({
         question: Questions[0],
         questionId: 0
        });
    }
  

	render() {
		return (
			<div className = 'assessment'>
              { (!this.state.isLastQuestion) ? this.renderQuestionCard() : this.renderResult()}
			</div>
		);
	}
};