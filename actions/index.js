const GET_DECKS = "GET_DECKS";
const ADD_DECK = "ADD_DECK";
const ADD_CARD = "ADD_CARD";

function getDecks(decks) {
  return {
    type: GET_DECKS,
    decks
  };
}

function addDeck(deck) {
  return {
    type: ADD_DECK,
    deck
  };
}

function addCard(card, deckId) {
  return {
    type: ADD_CARD,
    card,
    deckId
  };
}
