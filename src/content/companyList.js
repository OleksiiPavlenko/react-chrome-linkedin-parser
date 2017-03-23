import $ from 'jquery';
// import { uniqBy } from 'lodash';
import elementReady from 'element-ready';

console.log('content')

const scrappCompanies = document_root => {
        
    elementReady('.search-results').then(() => {
        setTimeout(() => {
            $('html, body').animate({ scrollTop: $(document).height() }, 'fast');
            const companiesList = [];
            const $results = $(document_root).find('.search-result');
            $.each($results, (index, item) => {
                const host = location.origin;
                const size = $(item).find('.subline-level-2').text();
                const title = $(item).find('.search-result__title').text();
                const industries = $(item).find('.subline-level-1').text();
                const url = host + $(item).find('.search-result__result-link').attr('href');
                companiesList.push({ title, url, industries, size });
            });

            chrome.runtime.sendMessage({
                action: "getSource",
                source: companiesList,
                next: $(document_root).find('button.next')
            });
        }, 1000);
    });

}

scrappCompanies(document)
