import React, { Component } from "react";
import { connect } from "react-redux";
import { Text, TouchableOpacity, View } from "react-native";

import { fetchDecks, removeAllDecks, saveAllDecks } from "../utils/api";
import { loadDecks } from "../actions";
import { getDummyData } from "../utils/helper";

class Decks extends Component {
  state = { ready: false };

  async componentDidMount() {
    // await removeAllDecks();
    const { loadDecks } = this.props;

    let decks = await fetchDecks();
    if (decks === null) {
      await saveAllDecks(getDummyData());
    }
    decks = await fetchDecks();
    loadDecks(decks);
    // console.log("Decks", decks);

    this.setState({ ready: true });
  }

  handleOnPress = deckId => {
    const { navigate } = this.props.navigation;
    navigate("Deck", { deckId });
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
    // console.log(decks);

    return (
      <View>
        {Object.keys(decks).map(deckId => {
          const deck = decks[deckId];
          return (
            <TouchableOpacity
              key={deckId}
              onPress={() => this.handleOnPress(deckId)}
            >
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
  // console.log("mapStateToProps", decks);
  return { decks };
};

export default connect(
  mapStateToProps,
  { loadDecks }
)(Decks);
