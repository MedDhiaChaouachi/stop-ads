const defaultFilters = [
  "*://*.googlesyndication.com/*",
  "*://*.google-analytics.com/*",
  "*://*.quantserve.com/*",
  "*://*.scorecardresearch.com/*",
  "*://*.zedo.com/*",
  "*://*.doubleclick.net/*",
  "*://partner.googleadservices.com/*",
  "*://creative.ak.fbcdn.net/*",
  "*://*.adbrite.com/*",
  "*://*.exponential.com/*",
];

chrome.webRequest.onBeforeRequest.addListener(
  function (details) {
    return { cancel: true };
  },
  { urls: defaultFilters },
  ["blocking"]
);
