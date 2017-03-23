import _ from 'lodash';
import compareUrls from 'compare-urls';
import { SEARCH_COMPANY } from '../const';

const checkCurrentLink = (link, func) => {
    const checker = setInterval(() => {
        console.count(link);
        chrome.tabs.getSelected(tab => {
            if (compareUrls(tab.url, link)) {
                func();
                clearInterval(checker)
            }
        })
    }, 100);
}

let companyList = [];
let page = 1;
export const searchCompany = (company, callback) => {
    let url = `${SEARCH_COMPANY}?keywords=${encodeURIComponent(company)}&page=${page}&origin=GLOBAL_SEARCH_HEADER`;
    chrome.windows.getCurrent(window => {
        chrome.tabs.getSelected(window.id ,tab => {
            console.log(tab)
            console.log(tab.url)
            console.log(url)
            console.log(tab.url !== url)
            if (tab.url !== url) {
                console.log(tab.id, { url })
                chrome.tabs.update(tab.id, { url });
            }
            checkCurrentLink(url, () => {
                setTimeout(() => {
                    chrome.tabs.executeScript(tab.id, {
                        file: 'js/companyList.js'
                    });
                }, 3000);
            });
        });
    })

    let next = '';
    const listener = request => {
        companyList = _.concat(companyList, request.source);
        chrome.runtime.onMessage.removeListener(listener);
        if ((request.next).length > 0 && (page < 3)) {
            page++;
            searchCompany(company, callback);
            return
        }
        const res = companyList;
        companyList = [];
        page = 1;
        callback(_.uniqBy(res, 'url'));
    }
    chrome.runtime.onMessage.addListener(listener);
}

export const getCompany = (url, callback) => {
    chrome.windows.getCurrent(window => {
        chrome.tabs.getSelected(window.id, tab => {
            chrome.tabs.update(tab.id, { url });
                checkCurrentLink(url, () => {
                    setTimeout(() => {
                        chrome.tabs.executeScript(tab.id, {
                            file: 'js/getDataFromCompanyPage.js'
                        });
                    }, 3000);
                });
        });
    });

    const listener = request => {
        chrome.runtime.onMessage.removeListener(listener);
        callback(request);
    }
    chrome.runtime.onMessage.addListener(listener);
}
