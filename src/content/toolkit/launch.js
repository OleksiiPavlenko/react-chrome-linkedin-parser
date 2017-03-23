export const launch = () => {
    console.log('in launch')
    chrome.runtime.onMessage.addListener(function (request, sender) {
        if (request.action == "getSource") {
            message.innerText = request.source;
        }
    });


    var message = document.querySelector('#anchor');
    console.log(message)

    chrome.tabs.executeScript(null, {
        file: "js/start.js"
    }, function () {
        if (chrome.runtime.lastError) {
            message.innerText = 'There was an error injecting script : \n' + chrome.runtime.lastError.message;
        }
    });

}