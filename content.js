const currentURL = getYoutubeURL();

function getYoutubeURL() {
  return window.location.href;
}

if (currentURL.includes("youtube.com/watch")) {
  chrome.storage.local.set({ youtubeURL: currentURL });
}
