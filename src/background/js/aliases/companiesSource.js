import { searchCompanyByNameAndDomain } from '../../../popup/js/utils/launch';

import {
    START_PARSE_SEARCH_COMPANY,
    FETCH_PARSE_COMPANY,
    CLEAR_SEARCH_COMPANIES_DATA,
    HANDLE_PARSE_COMPANY,
    CLEAR_STATE_DATA
} from '../../../actionTypes';

const fetchCompanyData = () => ({
    type: FETCH_PARSE_COMPANY
});

const clearStateData = () => ({
    type: CLEAR_STATE_DATA
});

const hendleCompanyData = data => ({
    type: HANDLE_PARSE_COMPANY,
    data
});

const getSourceCode = actionOwner => dispatch => {
    const { value, industries } = actionOwner;
    dispatch(clearStateData());
    dispatch(fetchCompanyData());
    
    searchCompanyByNameAndDomain(value, industries)
        .then(result => {
            
            dispatch(hendleCompanyData(result));
        })
    
};

export default {
    START_PARSE_SEARCH_COMPANY: getSourceCode,
    CLEAR_SEARCH_COMPANIES_DATA: clearStateData
};