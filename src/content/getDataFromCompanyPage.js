import $ from 'jquery';
import elementReady from 'element-ready';


const getDataFromCompanyPage = () => {

    elementReady('.org-organization-page').then(element => {
        console.log('data from page')
        setTimeout(() => {
            const amount = $(element)
                .find('.org-company-employees-snackbar__details-highlight.snackbar-description-see-all-link')
                .eq(0)
                .text()
                .replace(/[^0-9]/gi, '');

            const aboutUs = $(element)
                .find('.org-about-us-organization-description__text')
                .eq(0)
                .text()
                .trim();

            const specialties = $(element)
                .find('.org-about-company-module__specialities')
                .eq(0)
                .text()
                .trim();

            const headquarters = $(element)
                .find('.org-about-company-module__headquarter')
                .eq(0)
                .text()
                .trim();

            const founded = $(element)
                .find('.org-about-company-module__founded-year')
                .eq(0)
                .text()
                .trim();

            const website = $(element)
                .find('.org-about-company-module__company-page-url')
                .eq(0)
                .text()
                .trim();

            const size = $(element)
                .find('.org-top-card-module__container .company-size')
                .eq(0)
                .text()
                .trim();

            const title = $(element)
                .find('.org-top-card-module__name')
                .eq(0)
                .text()
                .trim();

            const industries = $(element)
                .find('.org-top-card-module__container .company-industries')
                .eq(0)
                .text()
                .trim();

            const url = location.href;

            const similar = $(element)
                .find('.org-similar-companies-module li')
                .map((key, item) => ({
                    url: `${location.origin}${$(item).find('.company-name-link').attr('href')}`,
                    companyName: $(item).find('.company-name-link').text().trim(),
                    industry: $(item).find('.company-industry').text().trim(),
                    size: $(item).find('.company-size').text().trim()
                }));
            
            chrome.runtime.sendMessage({
                action: "getDataFromCompanyPage",
                result: {
                    amount, aboutUs, specialties, headquarters,
                    founded, website, size, title, industries, url
                },
                similar: [...similar ]
            });
        }, 1000);
    });

}

getDataFromCompanyPage()
