import { GET_DECKS, ADD_DECK, ADD_CARD } from "../actions";

function decks(state = {}, action) {
  switch (action.type) {
    case GET_DECKS:
      return {
        ...state,
        ...action.decks
      };
    case ADD_DECK:
      const deck = action.deck;
      return {
        ...state,
        [deck.id]: deck
      };
    case ADD_CARD:
      const deckId = action.deckId;
      const card = action.card;
      return {
        ...state,
        [deckId]: {
          ...state.deckId,
          questions: [...state.deckId.questions, card]
        }
      };
    default:
      return state;
  }
}
