const mainFunc = doc => {
    console.log(doc);
}

chrome.runtime.sendMessage({
    action: "getSource",
    source: mainFunc(document)
});