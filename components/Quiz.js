import React, { Component } from "react";
import { Button, Text, View } from "react-native";

class Quiz extends Component {
  state = { score: 0, currentQuestionId: 0 };
  numberOfQuestions = 0;
  deck = null;

  componentWillMount() {
    // get/set this.deck
    // set this.numberOfQuestions
    this.numberOfQuestions = 4;
  }

  handleResponse = ({ isCorrect }) => {
    if (isCorrect === true) {
      this.setState(previousState => {
        return { score: previousState.score + 1 };
      });
    }

    // increment state.currentQuestionId
    this.setState(previousState => {
      return { currentQuestionId: previousState.currentQuestionId + 1 };
    });
  };

  quiz() {
    const { deckId } = this.props.navigation.state.params;

    return (
      <View>
        <Text>start quiz for deck: {deckId}</Text>
        <Text>x/y number of questions</Text>
        <Text>Question / Answer</Text>
        <Button
          onPress={() => {
            this.handleResponse({ isCorrect: true });
          }}
          title="Correct"
        />
        <Button
          onPress={() => {
            this.handleResponse({ isCorrect: false });
          }}
          title="Incorrect"
        />
      </View>
    );
  }

  quizResult() {
    const { navigate } = this.props.navigation;
    const { deckId } = this.props.navigation.state.params;
    let score = 0;
    if (this.numberOfQuestions !== 0) {
      score =
        Math.round((this.state.score / this.numberOfQuestions) * 10000) / 100;
    }

    return (
      <View>
        <Text>quiz result for deck: {deckId}</Text>
        <Text>Total questions {this.numberOfQuestions}</Text>
        <Text>You scored {score} %</Text>
        <Button
          onPress={() => {
            this.setState({ score: 0, currentQuestionId: 0 });
          }}
          title="Start Quiz Again"
        />
        <Button
          onPress={() => {
            navigate("Home");
          }}
          title="Go to Decks"
        />
      </View>
    );
  }

  render() {
    if (this.numberOfQuestions === 0) {
      return (
        <View>
          <Text>
            The number of questions for this deck is zero. Please add some cards
            then start the quiz.
          </Text>
        </View>
      );
    } else if (this.state.currentQuestionId === this.numberOfQuestions) {
      return this.quizResult();
    } else {
      return this.quiz();
    }
  }
}

export default Quiz;
