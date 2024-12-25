import { CHARACTERS_URL } from "../../services/urls";
import getRequest from "../../services/verbs";
import { CHARECTER_TYPES, ERROR_TYPES, LOADING_TYPES, SET_SEARCH_QUERY } from "../type/charecterTypes";

export const SearchCharacter = (query) => {
  return async (dispatch) => {
    dispatch({ type: SET_SEARCH_QUERY, payload: query });
    dispatch({ type: LOADING_TYPES });
    try {
      const response = await getRequest(CHARACTERS_URL, { name: query });
      dispatch({
        type: CHARECTER_TYPES,
        payload: response.data.results,
      });
    } catch (error) {
      dispatch({
        type: ERROR_TYPES,
        payload: error.message,
      });
    }
  };
};
