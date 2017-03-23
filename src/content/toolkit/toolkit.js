import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { Store } from "react-chrome-redux";

import '../sass/popup.sass';

// const store = new Store({
//     portName: 'linkedin-toolkit'
// });

// chrome.runtime.onMessage.addListener(function (request, sender) {
//     if (request.action == 'getArray') {
//         console.log(request.source);
//     }
// });

const toolkitDiv = document.createElement('div');
toolkitDiv.id = 'linkedin-toolkit-anchor';

document.body.insertBefore(toolkitDiv, document.body.childNodes[0]);


render(
    <h1>Popup!</h1>,
    document.getElementById("linkedin-toolkit-anchor")
);
