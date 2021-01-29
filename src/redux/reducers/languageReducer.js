import { SET_LANGUAGE } from "../actions/types";

const initialState = {
  language: "ENG"
};

const language = (state = initialState, action) => {
  switch (action.type) {
    case SET_LANGUAGE: {
      return {
        ...state,
        language: action.payload.language
      };
    }
    default: {
      return state;
    }
  }
};

export default language;
