import { wrapStore } from 'react-chrome-redux';

import store from './js/store';

wrapStore(store, { portName: 'linkedin-toolkit' });

// chrome.app.runtime.onLaunched.addListener(() => {
//     chrome.app.window.create('popup.html')
// })