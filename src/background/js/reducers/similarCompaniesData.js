import {
    HANDLE_PARSE_SIMILAR_COMPANY_DATA,
    CLEAR_STATE_DATA
} from '../../../actionTypes';


const similarCompaniesData = (state = [], action) => {
    console.log(action.type)
    switch (action.type) {
        case HANDLE_PARSE_SIMILAR_COMPANY_DATA:
            const data = action.value;
            return [
                ...state,
                ...data
            ]
        case CLEAR_STATE_DATA:
            return []
        default:
            return state
    }
};

export default similarCompaniesData;