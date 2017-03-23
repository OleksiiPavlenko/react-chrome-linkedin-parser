import $ from 'jquery';
import { uniqBy } from 'lodash';
import elementReady from 'element-ready';


let companiesList = [];
let page = 0;
export const searchCompany = callback => {
    elementReady('.search-results').then(element => {
        $('html, body').animate({scrollTop:$(document).height()}, 'fast');
        setTimeout(() => {
            const $data = $(element).find('.search-result');
            $data.each(function() {
                const host = location.origin;
                const size = $(this).find('.subline-level-2').text();
                const title = $(this).find('.search-result__title').text();
                const industries = $(this).find('.subline-level-1').text();
                const url = host + $(this).find('.search-result__result-link').attr('href');
                companiesList.push({ title, url, industries, size });
            });
            if($('button.next').length && !(page >= 9)) {
                $('button.next').click()
                page++;
                const checkIfLoadingRoute = setInterval(() => {
                    if ($('.route-loader-container').hasClass('transitioning')) return false;
                    clearInterval(checkIfLoadingRoute);
                    setTimeout(() => {
                        searchCompany(callback);
                    }, 1000);
                }, 800);

            } else {
                const result = uniqBy(companiesList, 'url')
                callback(null, result);
                companiesList = [];
                page = 0;
            }
        }, 1000);
    });
} 
