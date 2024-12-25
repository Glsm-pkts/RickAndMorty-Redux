import axiosClient from "./instance"


const getRequest = async (URL, params) => {
const response = await axiosClient.get(`${URL}` , {params:params})
return response
}

export default getRequest;