import {
  CREATE_TUTORIAL,
  RETRIEVE_TUTORIALS,
  UPDATE_TUTORIAL,
  DELETE_TUTORIAL,
  DELETE_ALL_TUTORIALS
} from "../actions/types";

const initialState = [];

function tutorialReducer(tutorials = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case CREATE_TUTORIAL:
      return [...tutorials, payload];

    case RETRIEVE_TUTORIALS:
      return payload;
  }
}
