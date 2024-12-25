import { CHARACTERS_URL, EPISODES_URL } from "../../services/urls"
import getRequest from "../../services/verbs"
import { CHARECTER_TYPES, ERROR_TYPES, LOADING_TYPES, SET_SEARCH_QUERY } from "../type/charecterTypes"


const getCharecterList = (params = {}) => {
    return async (dispatch, getState) => {
      const { searchQuery } = getState().Charecter;
      const updatedParams = { ...params, name: searchQuery }; // API'de 'name' parametresine uygun şekilde
      dispatch({ type: LOADING_TYPES });
      try {
        const response = await getRequest(CHARACTERS_URL, updatedParams);
        dispatch({
          type: CHARECTER_TYPES,
          payload: response.data.results,
        });
      } catch (error) {
        dispatch({
          type: ERROR_TYPES,
          payload: error,
        });
      }
    };
  };
  

  

export default  getCharecterList
    
  