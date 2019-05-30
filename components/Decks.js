import React, { Component } from "react";
import { connect } from "react-redux";
import { Text, TouchableOpacity, View } from "react-native";

import {
  fetchDecksFromStorage,
  removeAllDecksFromStorage,
  saveAllDecksInStorage
} from "../utils/api";
import { loadDecks } from "../actions";
import { getDummyData } from "../utils/helper";

class Decks extends Component {
  state = { ready: false };

  async componentDidMount() {
    // await removeAllDecksFromStorage();
    const { loadDecks } = this.props;

    let decks = await fetchDecksFromStorage();
    if (decks === null) {
      // first time running the app, set some dummy data
      // then fetch again
      await saveAllDecksInStorage(getDummyData());
      decks = await fetchDecksFromStorage();
    }
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
  // console.log("mapStateToProps decks", decks);
  return { decks };
};

export default connect(
  mapStateToProps,
  { loadDecks }
)(Decks);
