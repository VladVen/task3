import {searchAPI} from "./API";

const getDataAC = 'GET_DATA'
const delDataAC = 'DEL_DATA'

let initialState = {
    name: null,
    country: null,
    universityData: null
}

const searchReducer = (state = initialState, action) => {
    switch (action.type) {
        case(getDataAC):
            return {
                ...state,
                universityData: action.universityData,
            }
            case(delDataAC):
            return {
                ...state,
                universityData: null,
            }
        default:
            return state
    }
}

const getData = (universityData) => ({
    type: getDataAC,
    universityData
})
export const delData = () => ({
    type: getDataAC,
})

export const getDataThunk = (name, country) => async (dispatch) => {
    let response = await searchAPI.getInfo(name, country)
    let universityData = response.data
    dispatch(getData(universityData))
}


export default searchReducer