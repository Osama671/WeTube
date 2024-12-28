function getYoutubeURL() {
  return new Promise((resolve, reject) => {
    chrome.storage.local.get("youtubeURL", (data) => {
      console.log("Data:", data.youtubeURL);
      resolve(data.youtubeURL);
    });
  });
}

async function onClick() {
  const youtubeURL = await getYoutubeURL();
  chrome.tabs.create({
    url: chrome.runtime.getURL("video.html" + `?URL=${youtubeURL}`),
  });
}

document.getElementById("redirectButton").addEventListener("click", () => {
  onClick();
});

console.log("YOUTUBE URL: ", getYoutubeURL());
