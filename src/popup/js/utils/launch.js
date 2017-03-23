import _ from 'lodash';
import compareUrls from 'compare-urls';
import { eachLimit } from 'async';

import { INDUSTRIES_OBJ } from '../../../industriesList';

import { searchCompany, getCompany } from './methods';

export const searchCompanyByNameAndDomain = (companies, industries) => {
    return new Promise(resolve => {
        
        const indList = [];
        let listWithAmount = [];

        industries.split(',').forEach(item => {
            indList.push((_.find(INDUSTRIES_OBJ, { value: item })).label);
        });

        eachLimit(companies, 1, (company, nextComp) => {

            const name = company[0];
            const domain = company[1];

            searchCompany(name, nameArray => {

                const filteredArr = nameArray.filter(value => {
                    return indList.includes(value.industries)
                });

                listWithAmount.push({
                    title: name
                });

                eachLimit(filteredArr, 1, (item, next) => {

                    const timeout = _.random(5, 15) * 1000;
                    console.log(timeout);
                    _.delay(() => {

                        getAmountOfEmployees(item.url)
                            .then(result => {
                                if (compareUrls(result.website, domain)) {

                                    listWithAmount.push(Object.assign(item, { ...result }));
                                }
                                next();
                            });

                    }, timeout);

                }, () => {
                    
                    nextComp();

                });

            });
        }, () => {

            resolve(listWithAmount);
            listWithAmount = [];

        });
    });
}

export const getAmountOfEmployees = url => {
    return new Promise(resolve => {
        getCompany(url, data => {
            resolve(data.result);
        });
    })
}

export const getSimilarCompanies = urls => {
    return new Promise(resolve => {

        let similarCompaniesData = [];

        eachLimit(urls, 1, (url, next) => {
            getCompany(url[0], data => {

                const result = data.result;
                const parentData = {
                    ...result,
                    parent: true            
                };

                similarCompaniesData = _.concat(similarCompaniesData, parentData);

                eachLimit(data.similar, 1, (item, nextSim) => {
                    const isDuplicate = !!_.find(similarCompaniesData, data => data.url === item.url)

                    if (isDuplicate) {
                        nextSim();
                        return;
                    }

                    const timeout = _.random(5, 15) * 1000;
                    console.log(timeout);
                    _.delay(() => {
                        getCompany(item.url, dataSim => {
                            similarCompaniesData = _.concat(similarCompaniesData, dataSim.result);
                            nextSim();
                        });
                    }, timeout);

                }, () => {

                    console.log('similar done');
                    next();

                });
            });

        }, () => {

            resolve(similarCompaniesData);

        });
    })
}

