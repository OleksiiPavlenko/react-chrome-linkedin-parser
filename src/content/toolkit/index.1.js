import $ from 'jquery';
import { intersectionBy } from 'lodash';
import { searchCompany } from './toolkit/methods';
import { goToCompaniesList } from './toolkit/router';

export const searchByNameAndDomain = (name, domain) => {
    goToCompaniesList(domain, () => {
        searchCompany((errorByDomain, resultByDomain) => {
            if (errorByDomain) {
                console.error(errorByDomain);
                return;
            }
            goToCompaniesList(name, () => {
                searchCompany((errorByName, resultByName) => {
                    if (errorByName) {
                        console.error(errorByName);
                        return;
                    }
                    const interArray = intersectionBy(resultByDomain, resultByName, 'url');
                    // callback(null, interArray);
                    searchAmountOfEmployees(interArray);
                    chrome.runtime.sendMessage({
                        action: "getArray",
                        source: interArray
                    });
                });
            });
        });
    });
    
};

export const searchAmountOfEmployees = list => {
    location.href = list[0].url;
    setTimeout(function() {
        console.log(document.title)
    }, 5000);

};