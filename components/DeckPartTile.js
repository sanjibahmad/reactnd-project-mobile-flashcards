import React, { Component } from "react";
import { Card, Text } from "react-native-elements";

class DeckPartTile extends Component {
  render() {
    const { deck } = this.props;
    const cardsText = deck.questions.length > 1 ? "cards" : "card";
    return (
      <Card image={require("../assets/deck.jpg")} imageStyle={{ height: 15 }}>
        <Text h4>{deck.title}</Text>
        <Text>
          {deck.questions.length} {cardsText}
        </Text>
      </Card>
    );
  }
}

export default DeckPartTile;
