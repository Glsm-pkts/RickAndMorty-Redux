import { CHARECTER_TYPES, EPISODE_TYPES, ERROR_TYPES, LOADING_TYPES, LOCATION_TYPES, SET_SEARCH_QUERY } from "../type/charecterTypes"

const initialstate = {
    charecterList: [],
    episodeList: [],
    locationList: [],
    loading: true,
    error: null,
    searchList: [
        
    ],
    
}

const CharecterReducer = (state = initialstate, action) => {
    switch (action.type) {
        case CHARECTER_TYPES:
            return {
                ...state,
                charecterList: action.payload,
                loading: false,
                error: null
            };

        case LOADING_TYPES:
            return {
                ...state,
                loading: true,
                error: null
            };

        case ERROR_TYPES:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
  case SET_SEARCH_QUERY:
    return {
    ...state,
    searchQuery: action.payload,
  };

           
            case EPISODE_TYPES:
    console.log("Payload:", action.payload); // Gelen payload'ı kontrol edin
    return {
        ...state,
        episodeList: action.payload,
        loading: false,
        error: null,
    };


            case LOCATION_TYPES:
                return {
                   ...state,
                    locationList: action.payload,
                    loading: false,
                    error: null,
                }
                

        // Default durumu ekleyin
        default:
            return state;
    }

};


export default CharecterReducer;