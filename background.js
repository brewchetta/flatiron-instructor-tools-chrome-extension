const listener = (tabId, change, tab) => {
  // send a message to content.js
  browser.tabs.executeScript({
    file: `select-batch.js`
  });
};

const filter = {
  urls: ["https://learn.co/curriculum/tracks/*"]
};

browser.tabs.onUpdated.addListener(listener, filter);
