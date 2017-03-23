import {
    HANDLE_PARSE_COMPANY,
    CLEAR_STATE_DATA
} from '../../../actionTypes';


const companiesData = (state = [], action) => {
    // console.log(action.type)
    switch (action.type) {
        case HANDLE_PARSE_COMPANY:
            const data = action.data;
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

export default companiesData;