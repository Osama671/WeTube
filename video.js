const params = new URLSearchParams(window.location.search);
const youtubeURL = params.get("URL");

const youtubePlayer = document.getElementById("youtubePlayer");

function changeIFrameSrcValue(youtubeUrl) {
  const urlPostfix = youtubeUrl.split("?v=")[1];
  youtubePlayer.src = `https://www.youtube.com/embed/${urlPostfix}`;
}

changeIFrameSrcValue(youtubeURL);
