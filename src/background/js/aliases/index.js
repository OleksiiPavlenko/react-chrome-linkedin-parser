// export * from './companiesSource';
// export * from './similarCompaines';

// import { searchCompanyByNameAndDomain } from '../../../popup/js/utils/launch';

// import {
//     START_PARSE_COMPANY,
//     FETCH_PARSE_COMPANY,
//     HANDLE_PARSE_COMPANY,
//     CLEAR_STATE_DATA
// } from '../../../actionTypes';

// const fetchCompanyData = () => ({
//     type: FETCH_PARSE_COMPANY
// });

// const clearStateData = () => ({
//     type: CLEAR_STATE_DATA
// });

// const hendleCompanyData = data => ({
//     type: HANDLE_PARSE_COMPANY,
//     data
// });

// const getSourceCode = actionOwner => dispatch => {
//     const { name, domain, industries } = actionOwner;
//     dispatch(clearStateData());
//     dispatch(fetchCompanyData());

//     searchCompanyByNameAndDomain(name, domain, industries)
//         .then(result => {
//             dispatch(hendleCompanyData(result));
//         })

// };

// export default {
//     START_PARSE_COMPANY: getSourceCode,
//     CLEAR_DATA: clearStateData
// };