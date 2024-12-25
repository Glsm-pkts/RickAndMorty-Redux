import { LOCATIONS_URL } from "../../services/urls"
import getRequest from "../../services/verbs"
import { LOADING_TYPES, LOCATION_TYPES } from "../type/charecterTypes"

const getListLocation = (params) => {
    return async (dispatch) =>{
        dispatch({type: LOADING_TYPES})
        
        try{
const response = await getRequest(LOCATIONS_URL, params)
console.log(response.data.results);
    
dispatch({
    type: LOCATION_TYPES,
    payload: response.data.results
})
        }catch(error){
        dispatch({
            type: ERROR_TYPES,
            payload: error,
        })
}

}}

export default getListLocation;
