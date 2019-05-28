import { LOAD_DECKS, ADD_DECK, ADD_CARD } from "../actions";

function decks(state = {}, action) {
  switch (action.type) {
    case LOAD_DECKS:
      return {
        ...state,
        ...action.decks
      };
    case ADD_DECK:
      return {
        ...state,
        ...action.deck
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

export default decks;
