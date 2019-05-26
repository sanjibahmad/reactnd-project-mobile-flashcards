import React, { Component } from "react";
import { Button, Text, TextInput, View } from "react-native";

class AddCard extends Component {
  state = { question: "", answer: "" };

  onChangeTextQuestion = text => {
    this.setState({ question: text });
  };

  onChangeTextAnswer = text => {
    this.setState({ answer: text });
  };

  handleAddCard = () => {
    const { question, answer } = this.state;
    const { goBack } = this.props.navigation;
    // add card, then navigate back to deck
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

export default AddCard;
