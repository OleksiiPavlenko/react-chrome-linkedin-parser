import {
    HANDLE_FORM_DATA,
    HANDLE_SELECT_DATA,
    FETCH_PARSE_COMPANY,
    HANDLE_PARSE_COMPANY,
    CLEAR_STATE_DATA,
    HANDLE_PARSE_SIMILAR_COMPANY,
    HANDLE_PARSE_SEARCH_COMPANY,
    HANDLE_PARSE_SIMILAR_COMPANY_DATA
} from '../../../actionTypes';

const INITIAL_STATE = {
    company: '',
    domain: '',
    selectValue: '45,41,43'
}

const main = (state = INITIAL_STATE, action) => {
    // console.log(action.type)
    switch (action.type) {
        case HANDLE_FORM_DATA:
            const data = action.data;
            return {
                ...state,
                ...data
            }
        case HANDLE_SELECT_DATA:
            const selectValue = action.value;
            return {
                ...state,
                selectValue
            }
        case HANDLE_PARSE_SIMILAR_COMPANY:
            const fileValueForSimilar = action.value;
            return {
                ...state,
                fileValueForSimilar
            }
        case HANDLE_PARSE_SEARCH_COMPANY:
            const fileValueForSearch = action.value;
            return {
                ...state,
                fileValueForSearch
            }
        // case CLEAR_STATE_DATA:
        //     return {
        //         ...state,
        //         selectValue: ''
        //         // company: '',
        //         // domain: ''
        //     }
        case FETCH_PARSE_COMPANY:
            return {
                ...state,
                isFetching: true
            }
        case HANDLE_PARSE_SIMILAR_COMPANY_DATA:
        case HANDLE_PARSE_COMPANY:
            return {
                ...state,
                isFetching: false
            }
        default:
            return state
    }
};

export default main;