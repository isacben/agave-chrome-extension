
chrome.runtime.onInstalled.addListener(function() {
    chrome.contextMenus.create({
        "title": 'Run Agave',
        "contexts": ["all"],
        "id": "myContextMenuId"
    });
});
    
chrome.contextMenus.onClicked.addListener(() => {
    chrome.tabs.query({active: true, currentWindow: true}).then(([tab]) => {
        chrome.scripting.executeScript(
          {
            target: {tabId: tab.id},
            files: ['main.js']
          })
      })
});

chrome.commands.onCommand.addListener(() => {
    chrome.tabs.query({active: true, currentWindow: true}).then(([tab]) => {
        chrome.scripting.executeScript(
          {
            target: {tabId: tab.id},
            files: ['main.js']
          })
      })
  });