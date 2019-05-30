import React, { Component } from "react";
import { Button, Text, View } from "react-native";

class Card extends Component {
  state = { shouldShowQuestion: true };
  flipCard = () => {
    this.setState(previousState => {
      return { shouldShowQuestion: !previousState.shouldShowQuestion };
    });
  };
  render() {
    const { card } = this.props;
    // console.log(card);
    const { shouldShowQuestion } = this.state;
    return shouldShowQuestion ? (
      <View>
        <Text>{card.question}</Text>
        <Button onPress={this.flipCard} title="Answer" />
      </View>
    ) : (
      <View>
        <Text>{card.answer}</Text>
        <Button onPress={this.flipCard} title="Question" />
      </View>
    );
  }
}

export default Card;
