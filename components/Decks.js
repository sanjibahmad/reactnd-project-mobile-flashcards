import React, { Component } from "react";
import { Text, TouchableOpacity, View } from "react-native";

class Decks extends Component {
  handleOnPress = () => {
    const { navigate } = this.props.navigation;
    navigate("Deck", { deckId: "deck id" });
  };

  render() {
    return (
      <View>
        <TouchableOpacity onPress={this.handleOnPress}>
          <Text>Deck Title A</Text>
          <Text>N number of cards</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>Deck Title B</Text>
          <Text>N number of cards</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>Deck Title C</Text>
          <Text>N number of cards</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Decks;
