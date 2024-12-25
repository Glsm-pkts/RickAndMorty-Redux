import { EPISODES_URL } from "../../services/urls";
import getRequest from "../../services/verbs";
import { EPISODE_TYPES, ERROR_TYPES, LOADING_TYPES } from "../type/charecterTypes";

const getEpisodeList = (params) => {
    return async (dispatch) => {
      dispatch({ type: LOADING_TYPES });
      try {
        const response = await getRequest(EPISODES_URL, params);
       // console.log(response.data.results);
    
        dispatch({
          type: EPISODE_TYPES, 
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

  export default getEpisodeList;