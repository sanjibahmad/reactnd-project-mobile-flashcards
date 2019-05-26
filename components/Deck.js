import React, { Component } from "react";
import { Button, Text, View } from "react-native";

class Deck extends Component {
  handleAddCard = () => {
    const { navigate } = this.props.navigation;
    const { deckId } = this.props.navigation.state.params;
    navigate("AddCard", { deckId: deckId });
  };
  handleStartQuiz = () => {
    const { navigate } = this.props.navigation;
    const { deckId } = this.props.navigation.state.params;
    navigate("Quiz", { deckId: deckId });
  };
  handleDeleteDeck = () => {
    // delete deck, then go back
    const { goBack } = this.props.navigation;
    goBack();
  };
  render() {
    const { deckId } = this.props.navigation.state.params;
    return (
      <View>
        <Text>Deck Title {deckId}</Text>
        <Text>N number of cards</Text>
        <Button onPress={this.handleAddCard} title="Add Card" />
        <Button onPress={this.handleStartQuiz} title="Start Quiz" />
        <Button onPress={this.handleDeleteDeck} title="Delete Deck" />
      </View>
    );
  }
}

export default Deck;
