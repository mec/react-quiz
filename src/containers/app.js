import React from 'react';
import Axios from 'axios';
import Message from '../components/message';
import Question from '../components/question';

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      quiz: {
        questions: []
      }
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount () {
    Axios.get('/data.json')
      .then(response => {
        this.setState({quiz: response.data});
      })
      .catch(error => {
        console.log(error);
      });
  }

  handleChange(event, uid) {
    // Get the question that matches the uid
    let question = this.state.quiz.questions.find(question => question.uid == uid);
    // Get the index of that question
    const index = this.state.quiz.questions.indexOf(question);
    // Change the value
    question.value = event.target.value;
    // splice the updated question in
    this.state.quiz.questions.splice(index, 1, question);
    // Set the state
    let newState = this.state;
  }

  handleSubmit (event) {
    console.log(this.state.quiz);
    event.preventDefault();
  }

  render () {
    if (this.state.quiz.questions.length === 0) {
      return (
        <h1>Loading Quiz</h1>
      );
    } else {
      const questions = this.state.quiz.questions.map((question, index) =>
        <Question question={question} onValueChange={this.handleChange} key={index}/>
      );
      return (
        <form id={this.state.quiz.uid} onSubmit={this.handleSubmit}>
          <Message message={this.state.quiz.title}/>
          <p>{this.state.quiz.description}</p>
          {questions}
          <input type="submit" value="Submit"/>
        </form>
      );
    }
  }
}

export default App;
