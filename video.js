const params = new URLSearchParams(window.location.search)
const youtubeURL = params.get("URL")
console.log("YoutubeURL", youtubeURL)