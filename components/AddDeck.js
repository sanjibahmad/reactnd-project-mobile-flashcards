import React, { Component } from "react";
import { Alert, Button, Text, TextInput, View } from "react-native";
import { connect } from "react-redux";

import { saveDeckInStorage } from "../utils/api";
import { createDeckObject } from "../utils/helper";
import { addDeck } from "../actions";

class AddDeck extends Component {
  state = { deckTitle: "" };

  onChangeText = text => {
    this.setState({ deckTitle: text });
  };

  handleAddDeck = async () => {
    const { deckTitle } = this.state;
    const { navigate } = this.props.navigation;

    if (!deckTitle) {
      Alert.alert(
        "Deck Title Required",
        "Deck title was empty, please provide a deck title.",
        [{ text: "OK" }],
        { cancelable: false }
      );
      return;
    }

    const { decks } = this.props;
    if (decks[deckTitle]) {
      Alert.alert(
        "Deck Already Exists",
        "Another deck with the same title already exists, please provide a different deck title.",
        [{ text: "OK" }],
        { cancelable: false }
      );
      return;
    }

    // add deck, reset title, then navigate to the freshly created deck
    const { addDeck } = this.props;
    const deck = createDeckObject(deckTitle);
    await saveDeckInStorage(deck);
    addDeck(deck);
    this.setState({ deckTitle: "" });
    navigate("Deck", { deckId: deckTitle });
  };

  render() {
    return (
      <View>
        <Text>What's the Title of Your New Deck?</Text>
        <TextInput
          value={this.state.deckTitle}
          onChangeText={this.onChangeText}
          style={{ borderColor: "gray", borderWidth: 1 }}
        />
        <Button onPress={this.handleAddDeck} title="Submit" />
      </View>
    );
  }
}

const mapStateToProps = decks => {
  return { decks };
};

export default connect(
  mapStateToProps,
  { addDeck }
)(AddDeck);
