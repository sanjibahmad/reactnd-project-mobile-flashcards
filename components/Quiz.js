import React, { Component } from "react";
import { Button, Text, View } from "react-native";
import { connect } from "react-redux";

import Card from "./Card";

class Quiz extends Component {
  state = { score: 0, currentQuestionId: 0 };

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
    const { deck } = this.props;
    const { currentQuestionId } = this.state;
    console.log(deck.questions[currentQuestionId]);

    return (
      <View>
        <Text>start quiz for deck: {deck.title}</Text>
        <Text>
          Question: {currentQuestionId + 1} of {deck.questions.length}
        </Text>
        <Card card={deck.questions[currentQuestionId]} />
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
    const { deck } = this.props;

    let score = 0;
    if (deck.questions.length !== 0) {
      score =
        Math.round((this.state.score / deck.questions.length) * 10000) / 100;
    }

    return (
      <View>
        <Text>quiz result for deck: {deck.title}</Text>
        <Text>Total questions {deck.questions.length}</Text>
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
    const { deck } = this.props;

    if (!deck) {
      return (
        <View>
          <Text>Loading...</Text>
        </View>
      );
    }

    if (deck.questions.length === 0) {
      return (
        <View>
          <Text>
            The number of questions for this deck is zero. Please add some cards
            then start the quiz.
          </Text>
        </View>
      );
    }

    if (this.state.currentQuestionId === deck.questions.length) {
      return this.quizResult();
    }

    return this.quiz();
  }
}

const mapStateToProps = (decks, ownProps) => {
  const { deckId } = ownProps.navigation.state.params;
  const deck = decks[deckId];
  return { deck };
};

export default connect(mapStateToProps)(Quiz);
