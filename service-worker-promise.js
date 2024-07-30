chrome.sidePanel.setOptions({ enabled: false, path: "sidepanel.html" });

chrome.action.onClicked.addListener(async tab => {
    if (!tab.id) {
        return;
    }
    const tabId = tab.id;
    await chrome.sidePanel.setOptions({
        enabled: true,
        path: "sidepanel.html",
        tabId
    });
    await chrome.sidePanel.open({ tabId });
});
