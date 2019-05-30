import React, { Component } from "react";
import { Alert, Button, Text, TextInput, View } from "react-native";
import { connect } from "react-redux";

import { saveCardInStorage } from "../utils/api";
import { createCardObject } from "../utils/helper";
import { addCard } from "../actions";

class AddCard extends Component {
  state = { question: "", answer: "" };

  onChangeTextQuestion = text => {
    this.setState({ question: text });
  };

  onChangeTextAnswer = text => {
    this.setState({ answer: text });
  };

  handleAddCard = async () => {
    const { deckId } = this.props.navigation.state.params;
    const { question, answer } = this.state;

    if (!question || !answer) {
      Alert.alert(
        "Question and Answer Required",
        "Please provide both a question and an answer.",
        [{ text: "OK" }],
        { cancelable: false }
      );
      return;
    }

    // add card, then navigate back to deck
    const { addCard } = this.props;
    const { goBack } = this.props.navigation;
    const card = createCardObject(question, answer);
    await saveCardInStorage(card, deckId);
    addCard(card, deckId);
    goBack();
  };

  render() {
    const { deckId } = this.props.navigation.state.params;

    return (
      <View>
        <Text>add card to deck: {deckId}</Text>
        <TextInput
          onChangeText={this.onChangeTextQuestion}
          style={{ borderColor: "gray", borderWidth: 1 }}
        />
        <TextInput
          onChangeText={this.onChangeTextAnswer}
          style={{ borderColor: "gray", borderWidth: 1 }}
        />
        <Button onPress={this.handleAddCard} title="Submit" />
      </View>
    );
  }
}

export default connect(
  null,
  { addCard }
)(AddCard);
