import $ from 'jquery';
import elementReady from 'element-ready';

export const goToCompaniesList = (company, done) => {
    if (location.pathname === '/search/results/companies/') {
        $('.ember-text-field').val(company);
        $('.shared-search-box .submit-button').click();
        const checkIfLoadingRoute = setInterval(() => {
            if (!$('.route-loader-container').hasClass('transitioning')) return false;
            clearInterval(checkIfLoadingRoute);
            done();
        }, 500);
    } else {
        document.querySelector('a[href="/jobs/"').click();
        setTimeout(() => {
            elementReady('.ember-text-field').then(element => {
                $('.ember-text-field')[0].value = company;
                $('.ember-text-field')[1].value = 'us';
                setTimeout(() => {
                    $('.shared-search-box .submit-button').click();
                    $('.shared-search-box .submit-button').click();
                    $('.shared-search-box .submit-button').click();
                    $('.shared-search-box .submit-button').click();
                    $('.shared-search-box .submit-button').click();

                    elementReady('.sub-nav-item button[data-vertical="COMPANIES"]').then(element => {
                        element.click();
                        setTimeout(() => {
                            done();
                        }, 1000);
                    });
                }, 1000);

            });
        }, 1000);
    }

}