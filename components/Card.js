import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import { Text, Button } from "react-native-elements";

class Card extends Component {
  state = { shouldShowQuestion: true };
  flipCard = () => {
    this.setState(previousState => {
      return { shouldShowQuestion: !previousState.shouldShowQuestion };
    });
  };

  showQuestion() {
    const { card } = this.props;
    return (
      <View>
        <Text h2>{card.question}</Text>
        <Button
          onPress={this.flipCard}
          title="Answer"
          buttonStyle={style.qaButton}
        />
      </View>
    );
  }

  showAnswer() {
    const { card } = this.props;
    return (
      <View>
        <Text h4>{card.answer}</Text>
        <Button
          onPress={this.flipCard}
          title="Question"
          buttonStyle={style.qaButton}
        />
      </View>
    );
  }

  render() {
    // console.log(card);
    const { shouldShowQuestion } = this.state;
    return shouldShowQuestion ? this.showQuestion() : this.showAnswer();
  }
}

const style = StyleSheet.create({
  qaButton: { backgroundColor: "gray", marginTop: 20 }
});

export default Card;
