import { getSimilarCompanies } from '../../../popup/js/utils/launch';

import {
    START_PARSE_SIMILAR_COMPANY,
    HANDLE_PARSE_SIMILAR_COMPANY_DATA,
    FETCH_PARSE_COMPANY,
    CLEAR_SIMILAR_COMPANIES_DATA,
    HANDLE_PARSE_COMPANY,
    CLEAR_STATE_DATA
} from '../../../actionTypes';

const fetchCompanyData = () => ({
    type: FETCH_PARSE_COMPANY
});

const clearStateData = () => ({
    type: CLEAR_STATE_DATA
});

const hendleCompanyData = value => ({
    type: HANDLE_PARSE_SIMILAR_COMPANY_DATA,
    value
});

const getSimilarCompaniesAction = actionOwner => dispatch => {
    const { companies } = actionOwner;
    dispatch(clearStateData());
    dispatch(fetchCompanyData());

    getSimilarCompanies(companies)
        .then(result => {
            dispatch(hendleCompanyData(result));
        })
    
};

export default {
    START_PARSE_SIMILAR_COMPANY: getSimilarCompaniesAction,
    CLEAR_SIMILAR_COMPANIES_DATA: clearStateData
};