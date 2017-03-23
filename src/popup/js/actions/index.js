import {
    HANDLE_FORM_DATA,
    HANDLE_SELECT_DATA,
    START_PARSE_SEARCH_COMPANY,
    CLEAR_SEARCH_COMPANIES_DATA,
    HANDLE_PARSE_SEARCH_COMPANY
} from '../../../actionTypes';

export const handleFormData = data => ({
    type: HANDLE_FORM_DATA,
    data
});

export const handleSelectData = value => ({
    type: HANDLE_SELECT_DATA,
    value
});

export const startParseCompany = (value, industries) => ({
    type: START_PARSE_SEARCH_COMPANY,
    value, industries
});

export const handleSelectDataForSearch = value => ({
    type: HANDLE_PARSE_SEARCH_COMPANY,
    value
});

export const clearSearchCompaniesData = () => ({
    type: CLEAR_SEARCH_COMPANIES_DATA
});



/* SIMILAR */



import {
    START_PARSE_SIMILAR_COMPANY,
    CLEAR_SIMILAR_COMPANIES_DATA,
    HANDLE_PARSE_SIMILAR_COMPANY
} from '../../../actionTypes';

export const handleSelectDataForSimilar = value => ({
    type: HANDLE_PARSE_SIMILAR_COMPANY,
    value
});

export const clearSimilarCompaniesData = () => ({
    type: CLEAR_SIMILAR_COMPANIES_DATA
});

export const startParseSimilarCompany = companies => ({
    type: START_PARSE_SIMILAR_COMPANY,
    companies
});