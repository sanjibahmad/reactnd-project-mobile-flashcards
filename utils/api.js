import { AsyncStorage } from "react-native";
import { getDummyData } from "./helper";

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

function saveAllDecks(decks) {
  AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(decks));
}
