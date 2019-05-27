import React, { Component } from "react";
import { connect } from "react-redux";
import { Text, TouchableOpacity, View } from "react-native";

import { fetchDecks, removeAllDecks } from "../utils/api";
import { loadDecks } from "../actions";

class Decks extends Component {
  state = { ready: false };

  componentDidMount() {
    // removeAllDecks();

    const { loadDecks } = this.props;
    fetchDecks()
      .then(decks => {
        loadDecks(decks);
      })
      .then(() => {
        this.setState({ ready: true });
      });
  }

  handleOnPress = () => {
    const { navigate } = this.props.navigation;
    navigate("Deck", { deckId: "deck id" });
  };

  render() {
    if (!this.state.ready) {
      return (
        <View>
          <Text>Loading...</Text>
        </View>
      );
    }

    const { decks } = this.props;

    return (
      <View>
        {Object.keys(decks).map(deckId => {
          const deck = decks[deckId];
          return (
            <TouchableOpacity key={deckId} onPress={this.handleOnPress}>
              <Text>{deck.title}</Text>
              <Text>{deck.questions.length} cards</Text>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  }
}

const mapStateToProps = decks => {
  return { decks };
};

export default connect(
  mapStateToProps,
  { loadDecks }
)(Decks);
