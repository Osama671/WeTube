const currentURL = getYoutubeURL();

function getYoutubeURL() {
  return window.location.href;
}

if (currentURL.includes("youtube.com/watch")) {
  chrome.storage.local.set({ youtubeURL: currentURL });
}

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.message === "urlchange") {
    chrome.storage.local.set({ youtubeURL: window.location.href });
  }
});
