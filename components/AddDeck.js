import React, { Component } from "react";
import { Button, Text, TextInput, View } from "react-native";

class AddDeck extends Component {
  state = { deckTitle: "" };

  onChangeText = text => {
    this.setState({ deckTitle: text });
  };

  handleAddDeck = () => {
    const { deckTitle } = this.state;
    const { navigate } = this.props.navigation;
    // add deck, then navigate
    navigate("Deck", { deckId: deckTitle });
  };

  render() {
    return (
      <View>
        <Text>What's the Title of Your New Deck?</Text>
        <TextInput
          onChangeText={this.onChangeText}
          style={{ borderColor: "gray", borderWidth: 1 }}
        />
        <Button onPress={this.handleAddDeck} title="Submit" />
      </View>
    );
  }
}

export default AddDeck;
