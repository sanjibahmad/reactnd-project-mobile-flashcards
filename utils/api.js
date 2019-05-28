import { AsyncStorage } from "react-native";
import { createCardObject, createDeckObject, getDummyData } from "./helper";

const DECKS_STORAGE_KEY = "Flashcards:Decks";

export function fetchDecks() {
  return AsyncStorage.getItem(DECKS_STORAGE_KEY).then(result => {
    if (result === null) {
      const decks = getDummyData();
      saveAllDecks(decks);
      fetchDecks();
    } else {
      return JSON.parse(result);
    }
  });
}

export function removeAllDecks() {
  AsyncStorage.clear();
}

export function saveDeck(deckTitle) {
  const deck = createDeckObject(deckTitle);
  return AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.stringify(deck)).then(
    () => {
      return deck;
    }
  );
}

function saveAllDecks(decks) {
  AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(decks));
}
