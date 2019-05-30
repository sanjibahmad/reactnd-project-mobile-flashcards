import React, { Component } from "react";
import { Alert, Button, Text, View } from "react-native";
import { connect } from "react-redux";

import { removeDeck } from "../utils/api";
import { deleteDeck } from "../actions";

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
    const { deckId } = this.props.navigation.state.params;

    Alert.alert(
      "Delete Deck",
      `Are you sure you want to delete the deck ${deckId}?`,
      [
        { text: "Cancel" },
        {
          text: "OK",
          onPress: async () => {
            const { deleteDeck } = this.props;
            await removeDeck(deckId);
            deleteDeck(deckId);
            const { goBack } = this.props.navigation;
            goBack();
          }
        }
      ],
      { cancelable: true }
    );
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

export default connect(
  null,
  { deleteDeck }
)(Deck);
