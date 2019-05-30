import { LOAD_DECKS, ADD_DECK, DELETE_DECK, ADD_CARD } from "../actions";

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
    case DELETE_DECK:
      return Object.keys(state)
        .filter(deckId => deckId !== action.deckId)
        .map(deckId => state[deckId]);
    case ADD_CARD:
      return {
        ...state,
        [action.deckId]: {
          ...state.action.deckId,
          questions: [...state.action.deckId.questions, action.card]
        }
      };
    default:
      return state;
  }
}

export default decks;
