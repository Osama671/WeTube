function getYoutubeURL() {
  return new Promise((resolve, reject) => {
    chrome.storage.local.get("youtubeURL", (data) => {
      if (data.youtubeURL) {
        resolve(data.youtubeURL);
      } else {
        reject(null);
      }
    });
  });
}

async function createYoutubePage() {
  const youtubeURL = await getYoutubeURL();
  chrome.tabs.create({
    url: chrome.runtime.getURL("video.html" + `?URL=${youtubeURL}`),
  });
}

document.getElementById("redirectButton").addEventListener("click", () => {
  createYoutubePage();
});
