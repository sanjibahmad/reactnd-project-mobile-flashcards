import { AsyncStorage } from "react-native";
import { createCardObject, createDeckObject, getDummyData } from "./helper";

const DECKS_STORAGE_KEY = "Flashcards:Decks";

export async function fetchDecks() {
  let decksData = await AsyncStorage.getItem(DECKS_STORAGE_KEY);
  return JSON.parse(decksData);
}

export async function removeAllDecks() {
  await AsyncStorage.clear();
}

export async function removeDeck(deckId) {
  const decksData = await AsyncStorage.getItem(DECKS_STORAGE_KEY);
  const decks = JSON.parse(decksData);
  decks[deckId] = undefined;
  delete decks[deckId];
  await AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(decks));
}

export async function saveDeck(deckTitle) {
  const deck = createDeckObject(deckTitle);
  await AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.stringify(deck));
  return deck;
}

export async function saveAllDecks(decks) {
  await AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(decks));
}
